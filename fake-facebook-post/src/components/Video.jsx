import {useContext} from 'react'
import PostData from '../context/PostData'

const Video = () => {

  const {src, poster} = useContext(PostData)
  return (
    <div>
      <video src={src}  controls className='w-full'></video>
        

      
      
    </div>
  )
}

export default Video