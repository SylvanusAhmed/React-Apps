import {useContext} from 'react'
import PostData from '../context/PostData'

const Photo = () => {
  const {postPhoto} = useContext(PostData)
  
  return (
    <div>
        <img src={postPhoto} alt="" className='w-full h-1/2 my-3' />
    </div>
  )
}

export default Photo