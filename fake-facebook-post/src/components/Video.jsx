import React from 'react'

const Video = ({src, poster}) => {
  return (
    <div>
      <video src={src} poster={poster} controls className='w-full'></video>
        

      
      
    </div>
  )
}

export default Video