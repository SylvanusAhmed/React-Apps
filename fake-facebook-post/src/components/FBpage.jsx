import React from 'react'
import Andriod from './Andriod'
import {Routes, Route,Link} from 'react-router-dom'
import Iphone from './Iphone'

const FBpage = ({ time, profileName, charge, signalStrength  }) => {
  return (
    <div className='min-h-screen bg-gray-300 w-[120%]  p-5 px-10 rounded-lg'>
        <div>
          <Routes>
            <Route path='/' element={<Andriod time={time} profileName={profileName} charge={charge} signalStrength={signalStrength}/>}/>
            <Route path='/Iphone' element={<Iphone/>}/>

          </Routes>

        

        </div>
        

    </div>
  )
}

export default FBpage