import PostData from '../context/PostData'
import {useContext} from "react"


const Battery = () => {
  const {charge} = useContext(PostData)
  return (
    <div className="relative w-6 h-3 border-2 flex items-center justify-start rounded-sm">
        {/* Battery Level */}
        <div
          className={`absolute h-full bg-gray-900 transition-all duration-500`}
          style={{ width: `${charge}%` }}
        ></div>

        {/* Battery Tip */}
        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-[0.2rem] h-[0.2rem] bg-gray-300 rounded-r"></div>
     </div>
  )
}

export default Battery