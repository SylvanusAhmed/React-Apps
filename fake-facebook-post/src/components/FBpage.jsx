import React from 'react'
import Android from './Android'
import {Routes, Route,Link} from 'react-router-dom'
import Iphone from './Iphone'

const FBpage = () => {
  return (
    <div className='min-h-screen bg-gray-300 w-[120%]  p-5 px-10 rounded-lg'>
        <div>
          <Routes>
            <Route path='/' element={<Android 
                    
                      />}/>
            <Route path='/Iphone' element={<Iphone/>}/>

          </Routes>

        

        </div>
        

    </div>
  )
}

export default FBpage