import React from "react";
import {useState, useRef} from 'react'
import FBpage from "./components/FBpage";
import Controller from "./components/Controller";


function App() {
  const [ time, setTime] = useState("10:04")
  const [profileName, setProfileName] = useState("Sylvanus");
  const [charge, setCharge] = useState(50);
  const [signalStrength, setSignalStrength] = useState(2); // Default signal strength (2 bars)
  const scrollRef = useRef(null);

  // Function to handle scrollbar drag
  const handleDrag = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX; // Support touch and mouse
    const scrollBar = scrollRef.current.getBoundingClientRect();
    const percentage = Math.min(
      Math.max((clientX - scrollBar.left) / scrollBar.width, 0),
      1
    ); // Normalize to a value between 0 and 1
  
    const newStrength = Math.round(percentage * 4); // Convert to 0-4 bars
    setSignalStrength(newStrength);
  };
  
  // Function to start drag
  const handleStart = (e) => {
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleDrag); // Add touch event
    document.addEventListener("touchend", handleEnd);
  };
  
  // Function to stop drag
  const handleEnd = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleEnd);
    document.removeEventListener("touchmove", handleDrag); // Remove touch event
    document.removeEventListener("touchend", handleEnd);
  };
  

  const handleCharge = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 0;
    if (value > 100) value = 100;
    if (value < 0) value = 0;
    setCharge(value);
  };

  return (
    <div className=" flex min-h-screen gap-5 ">
       {/* Scrollable Controller */}
      <div className="w-[30%] h-screen overflow-y-auto border-2 border-gray-300 mt-5 rounded-md">
        <Controller 
          setTime={setTime} 
          time={time}
          charge={charge}
          handleCharge={handleCharge}
          scrollRef={scrollRef}
          signalStrength={signalStrength}
          handleStart={handleStart}
          
        />
      </div>

      {/* Non-scrollable FBpage */}
      <div className="w-1/2 h-full my-5">
        <FBpage time={time} profileName={profileName} charge={charge} signalStrength={signalStrength}/>
      </div>
  
    </div>
  );
}

export default App;




