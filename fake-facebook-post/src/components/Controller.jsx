import { useNavigate} from 'react-router-dom';
import { useState, useRef, useContext} from 'react'
import Like1 from '../assets/like1.png'
import Like2 from '../assets/like2.png'
import Like3 from '../assets/like3.png'
import Like4 from '../assets/like4.png'
import Like5 from '../assets/like5.png'
import Like6 from '../assets/like6.png'
import PostData from '../context/PostData';

const Controller = () => {
  const {
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
    handleVideoInput,
    likes,
    setLikes,
    comments,
    setComments,
    shares,
    setShares,
    setLikeType,
    handleFooterImage
  } = useContext(PostData)

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


                <div className='flex items-center  justify-center gap-2 max-md:flex-col md:flex-row'>
                  <div className='flex flex-col items-center '>
                      <label htmlFor="" className="font-bold">Clock</label>
                      <input 
                        type="time" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 max-md-w-full'
                      />
                  </div>
                  {/* Battery Charge */}
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

                          <div className='flex items-center justify-center max-md:flex-col md:flex-row gap-1'>
                                <div className='flex flex-col items-center mt-3 gap-2'>
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

                            {postType === "photo" &&  <div className='transition-all duration-150 p-2'>
                                <label htmlFor="" className='font-bold mt-2'>Add Photo</label>
                                <input type="file"  onChange={handlePostPhoto}/>
                            </div>}

                            {postType === "video" &&
                              <div className='transition-all duration-150 p-2'>
                                  <label htmlFor="" className='font-bold mt-2'>Add Video</label>
                                  <input type="file"  onChange={handleVideoInput}/>
                              </div>

                            }


                            {/* NUMBER OF LIKES AND LIKE TYPE */}
                            <div className='flex justify-center items-center gap-5 md:flex-row max-md:flex-col'>
                                <div className='flex justify-center items-center gap-3 max-md:flex-row md:flex-col'>
                                  <label htmlFor="">Select like icon</label>
                                  <select name="" id="" onChange={(e) => setLikeType(e.target.value)} className='border-2 border-black'>
                                    <option value="">No icon</option>
                                    <option value={Like1}>Like 1</option>
                                    <option value={Like2}>Like 2</option>
                                    <option value={Like3}>Like 3</option>
                                    <option value={Like4}>Like 4</option>
                                    <option value={Like5}>Like 5</option>
                                    <option value={Like6}>Like 6</option>
                                  </select>

                                </div>

                                <div className='p-2 gap-2 flex justify-center items-center max-md:flex-row md:flex-col'>
                                  <label htmlFor="" className='mb-2'>Number Of likes</label>
                                  <input type="text" 
                                    value={likes}
                                    onChange ={(e) => setLikes(e.target.value)}
                                    className='border-2 border-black rounded-md'
                                  />
                                </div>

                                
                            </div>
                            
                            
                            <div className='flex justify-center items-center gap-2 p-3 md:flex-row max-md:flex-col'>
                                    <div className='flex items-center justify-center md:flex-col max-md:flex-row gap-2'>
                                          <label htmlFor="">Comments</label>
                                          <input type="number"
                                            value={comments}
                                            onChange={(e) => setComments(e.target.value)}
                                            className='border-2 border-black rounded-md max-w-56 w-full'
                                          
                                          />
                                    </div>
                                    <div className='flex items-center justify-center md:flex-col max-md:flex-row gap-2'>
                                          <label htmlFor="">Shares</label>
                                          <input type="number"
                                            value={shares}
                                            onChange={(e) => setShares(e.target.value)}
                                            className='border-2 border-black rounded-md max-w-56 w-full'
                                          
                                          />
                                    </div>
                             </div>

                             <div>
                              <label htmlFor="">Footer Image</label>
                              <input 
                                type="file"
                                onChange={handleFooterImage} 
                              
                              />
                             </div>

                          </div>
                          
              </form>
          </div>
        

    </div>
  )
} 

export default Controller