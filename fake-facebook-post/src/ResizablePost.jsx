import React, { useState, useRef } from "react";

const ResizablePost = () => {
  const [width, setWidth] = useState(50); // Default width percentage
  const [height, setHeight] = useState(200); // Default height in pixels
  const widthScrollRef = useRef(null);
  const heightScrollRef = useRef(null);

  // Function to handle width dragging
  const handleWidthDrag = (e) => {
    const scrollBar = widthScrollRef.current.getBoundingClientRect();
    const newWidth = Math.min(
      Math.max(((e.clientX - scrollBar.left) / scrollBar.width) * 100, 10),
      100
    ); // Width between 10% and 100%
    setWidth(newWidth);
  };

  // Function to handle height dragging
  const handleHeightDrag = (e) => {
    const scrollBar = heightScrollRef.current.getBoundingClientRect();
    const newHeight = Math.min(
      Math.max(((e.clientX - scrollBar.left) / scrollBar.width) * 500, 100),
      500
    ); // Height between 100px and 500px
    setHeight(newHeight);
  };

  // Function to start width drag
  const handleWidthMouseDown = () => {
    document.addEventListener("mousemove", handleWidthDrag);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Function to start height drag
  const handleHeightMouseDown = () => {
    document.addEventListener("mousemove", handleHeightDrag);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Function to stop dragging
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleWidthDrag);
    document.removeEventListener("mousemove", handleHeightDrag);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4">Resizable Fake Facebook Post</h1>

      {/* Resizable Post */}
      <div
        className="bg-white shadow-lg rounded-lg p-4 transition-all"
        style={{ width: `${width}%`, height: `${height}px` }}
      >
        <h2 className="text-lg font-semibold">Fake Facebook Post</h2>
        <p className="text-gray-600">Resize me using the scrollbars below!</p>
      </div>

      {/* Width Scrollbar */}
      <div className="w-3/4 mt-4 relative">
        <p className="text-sm text-gray-700 mb-1">Adjust Width</p>
        <div className="h-3 bg-gray-300 rounded-full relative" ref={widthScrollRef}>
          {/* Draggable Dot */}
          <div
            className="w-6 h-6 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2 cursor-pointer transition-all"
            style={{ left: `${width}%` }}
            onMouseDown={handleWidthMouseDown}
          ></div>
        </div>
      </div>

      {/* Height Scrollbar */}
      <div className="w-3/4 mt-4 relative">
        <p className="text-sm text-gray-700 mb-1">Adjust Height</p>
        <div className="h-3 bg-gray-300 rounded-full relative" ref={heightScrollRef}>
          {/* Draggable Dot */}
          <div
            className="w-6 h-6 bg-green-500 rounded-full absolute top-1/2 transform -translate-y-1/2 cursor-pointer transition-all"
            style={{ left: `${(height / 500) * 100}%` }}
            onMouseDown={handleHeightMouseDown}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ResizablePost;
