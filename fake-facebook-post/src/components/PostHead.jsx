import { HiOutlineDotsHorizontal } from "react-icons/hi";

const PostHead = ({profileImage, name, postState, cert, dateTime, renderHashtags, postContent}) => {
  return (
    <div>
        <div className="flex items-center justify-between mx-2">
            <div className="flex items-center justify-center gap-3 mt-2">
                <img src={profileImage} alt="profile picture"  className="rounded-full border-2 border-slate-600  object-cover h-14 w-14"/>
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold">{name}</h2>
                        {cert && <img src={cert} className="w-4 h-4 border-0" /> }
                        <p className={` ${postState === "Live" && "text-blue-600" || postState === "Offline" && "text-red-600" || postState ==="Active" && "text-green-600"} font-semibold`} >{postState}</p>

                    </div>

                
                    
                    <p>{dateTime}</p>
                </div>

            </div>

            <HiOutlineDotsHorizontal />
        </div>

        <div className="mx-3 over-hidden">
            <p className="break-words">{renderHashtags(postContent)}</p>
        </div>

    </div>
  )
}

export default PostHead