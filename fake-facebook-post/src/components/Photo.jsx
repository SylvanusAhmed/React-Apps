import React from 'react'

const Photo = ({postPhoto}) => {
  return (
    <div>
        <img src={postPhoto} alt="" className='w-full h-1/2 my-3' />
    </div>
  )
}

export default Photo