import React from 'react'
import Android from './Android'
import {Routes, Route,Link} from 'react-router-dom'
import Iphone from './Iphone'

const FBpage = ({ time, profileName, charge, signalStrength, profileImage , name, postState, cert, dateTime, renderHashtags, postContent, postPhoto, src, poster}) => {
  return (
    <div className='min-h-screen bg-gray-300 w-[120%]  p-5 px-10 rounded-lg'>
        <div>
          <Routes>
            <Route path='*' element={<Android 
                      time={time} 
                      profileName={profileName} 
                      charge={charge} 
                      signalStrength={signalStrength}
                      profileImage={profileImage}
                      name ={ name }
                      postState={postState}
                      cert={cert}
                      dateTime={dateTime}
                      renderHashtags={renderHashtags}
                      postContent={postContent}
                      postPhoto={postPhoto}
                      src={src}
                      poster={poster}
                      />}/>
            <Route path='/Iphone' element={<Iphone/>}/>

          </Routes>

        

        </div>
        

    </div>
  )
}

export default FBpage