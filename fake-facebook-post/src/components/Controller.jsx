import { useNavigate} from 'react-router-dom';
import { useState, useRef} from 'react'

const Controller = (
  { 
    time, 
    setTime,
    handleCharge,
    charge,
    scrollRef,
    signalStrength,
    handleStart
  }
) => {

  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route)
  }

  return (
    <div className='px-3 pt-2'>


          {/* Phone type */}
          <div>
              <h2>Layout:</h2>
              <form action="">
                <div>
                    <input type="radio" id="android" name="device" onClick={() => handleRoute("/")} />
                    <label htmlFor="android">Android</label>

                </div>
                <div>
                  <input type="radio" id="iphone" name="device" onClick={() => handleRoute("/Iphone")}/>
                  <label htmlFor="iphone">Iphone</label>

                </div> 


                        {/* BATTERY PERCENTAGE AND CLOCK */}


                <div className='flex items-center gap-2'>
                  <div className='flex flex-col items-center '>
                      <label htmlFor="" className="font-bold">Clock</label>
                      <input 
                        type="time" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500'
                      />
                  </div>
                  <div className='flex flex-col items-center'>
                      <label htmlFor="" className="font-bold">Battery Percent</label>
                      <input 
                        type="number" 
                        value={charge}
                        onChange={handleCharge}
                        className='border-2 border-gray-300 p-2  rounded-md focus:outline-none focus:border-blue-500'
                      />
                  </div>
                </div>



                  <div>
                  <div className="w-3/4 mt-4">
                          <h2 className='mb-3 font-bold'>Andriod Signal Strength</h2>

                          <div className="h-2 bg-gray-300 w-full rounded-full relative" ref={scrollRef}>
                                {/* Draggable Dot */}

                                <div
                                  className="w-6 h-6 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2 cursor-pointer transition-all"
                                  style={{ left: `${(signalStrength / 4) * 100}%` }}
                                  onMouseDown={handleStart}
                                  onTouchStart={handleStart}
                                ></div>
                              </div>
                           </div>

          

                  </div>
              </form>
          </div>
        

    </div>
  )
}

export default Controller