import React from "react";
import FBpage from "./components/FBpage";
import Controller from "./components/Controller";
import { PostDataProvider } from "./context/PostData";



function App() {

  return (
    <div className=" flex  max-md:flex-col md:flex-row min-h-screen gap-5 ">
       {/* Scrollable Controller */}
       <PostDataProvider>
            <div className="md:w-[30%] max-md:w-full h-screen overflow-y-auto border-2 border-gray-500 mt-5 rounded-md ml-2">
              <Controller/>
            </div>

            {/* Non-scrollable FBpage */}
            <div className="md:w-1/2 max-md:w-full h-full my-5">
              <FBpage />
            </div>
      </PostDataProvider>
  
    </div>
  );
}

export default App;




