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
    handleStart,
    profileName,
    setProfileName,
    handleImageChange,
    name,
    setName,
    setPostState,
    handleCert,
    dateTime,
    setDateTime,
    handlePostContent,
    handlePostPhoto,
    handleVideoInput
  }
) => {

  const [postType, setPostType] = useState("")
  const navigate = useNavigate();

  const handleRoute = (route) => {
    setPostType(route)
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

                          {/* PROFILE NAME */}

                          <div className='flex flex-col items center mt-2 gap-2'>
                            <label htmlFor="" className='font-bold'>Profile Name</label>
                            <input 
                              type="text"
                              value={profileName}
                              onChange={(e) => setProfileName(e.target.value)}
                              className='border-2 border-slate-800 p-2 rounded-md focus:border-blue-700 outline-none'
                            />
                          </div>

                                  {/* Profile Image input */}
                          <div className='mt-4 flex flex-col gap-2 justify-centeritems-center'>
                            <label htmlFor="" className='font-bold'> Profile Image</label>
                            <input 
                              type="file"
                              onChange={handleImageChange}
                            />

                          </div>

                                {/* NAME */}

                          <div className='flex items-center gap-1'>
                                <div className='flex flex-col items center mt-3 gap-2'>
                                  <label htmlFor="" className='font-bold'>Name</label>
                                  <input 
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='border-2 border-slate-800 p-2 rounded-md focus:border-blue-700 outline-none'
                                  />
                                </div>

                                {/* PROFILE STATUS */}


                                <div className='mt-1'>
                                    <h2 className='mb-4 font-bold'>Profile Status</h2>
                                      <select name="" id="" onChange={(e) => setPostState(e.target.value)} className='border-2 p-2 rounded-md border-slate-800'>
                                        <option value="Live">Live</option>
                                        <option value="Offline">Offline</option>
                                        <option value="Active">Active</option>
                                      </select>
                                </div>
                          </div>

                            {/* SHOW CERTIFICATION */}

                          <div className='flex flex-row-reverse items-center justify-end gap-2 mt-3'>
                              <label htmlFor="">Show certification</label>
                              <input type="checkbox" onClick={handleCert}/>
                          </div>

                          <div className='flex flex-col justify-center mt-3 gap-2'>
                            <label htmlFor="">Time of Post</label>
                              <input 
                                type="text" 
                                value={dateTime}
                                onChange={(e) => setDateTime(e.target.value)}
                                className='border-2 border-slate-700 p-2 rounded-md'
                              />
                          </div>

                          {/* MESSAGE */}

                          <div className='flex flex-col justify-center mt-3 gap-2'>
                            <label htmlFor="">Message</label>
                              <textarea
                                type="text" 
                                onChange={handlePostContent}
                                className='border-2 border-slate-700 p-2 rounded-md'
                              />
                          </div>

                                   {/* POSTS */}


                          <div className='mt-2'>
                            <h2 className='font-bold'>Posts</h2>
                            <div>
                              <div className='flex items-center gap-2'>
                                <input type="radio" id="photo"  name="postType" onChange={() => handleRoute("photo")} />
                                <label htmlFor="">Photo</label>

                              </div>
                                  {/* VIDEO */}

                              <div className='flex items-center gap-2'>
                                <input type="radio" id="video" name="postType" onChange={() => handleRoute("video")} />
                                <label htmlFor="">Video</label>
                              </div>

                                      {/* TEXT */}
                              <div className='flex items-center gap-2'>
                                <input type="radio" id="text" name="postType" onChange={() => handleRoute("/")} />
                                <label htmlFor="">Text</label>
                              </div>
                            </div>

                                {/* INPUT FIELD FOR PHOTO */}

                            {postType === "photo" &&  <div className='transition-all duration-150'>
                                <label htmlFor="" className='font-bold mt-2'>Add Photo</label>
                                <input type="file"  onChange={handlePostPhoto}/>
                            </div>}

                            {postType === "video" &&
                              <div className='transition-all duration-150'>
                                  <label htmlFor="" className='font-bold mt-2'>Add Video</label>
                                  <input type="file"  onChange={handleVideoInput}/>
                              </div>

                            }
                            
                            
                           

                          </div>
              </form>
          </div>
        

    </div>
  )
} 

export default Controller