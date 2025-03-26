import {useContext} from 'react'
import  PostData from '../context/PostData'

const Signal = () => {

  const {signalStrength} = useContext(PostData)
  return (
    <div className="flex items-end gap-[0.08rem]">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`w-[0.3rem] transition-all rounded-sm ${
            signalStrength > index ? "bg-slate-800" : "bg-gray-400"
          }`}
          style={{ height: `${(index + 2) * 3}px` }} // Increasing bar height
        ></div>
      ))}
    </div>
  )
}

export default Signal