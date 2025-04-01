import Battery from "./Battery"
import { AiOutlineLike } from "react-icons/ai";
import Signal from "./Signal"
import { FaChevronLeft, FaCaretDown, FaRegComment, FaWhatsapp, FaUserFriends } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { IoHome, IoStorefrontSharp, IoNotificationsOutline, IoMenu } from "react-icons/io5";
import { Md4gMobiledata } from "react-icons/md";
import { RiArrowUpDownLine } from "react-icons/ri";
import { RiShareForwardLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import PostHead from "./PostHead";
import PostData from "../context/PostData";
import {useContext} from 'react'


const Android = () => { // Fix spelling

const { postPhoto,time, downloadPost, profileName,likes, likeType, comments, shares, footerImage, src, postType} = useContext(PostData)
  return (

    <div>
      <div className="bg-white md:w-[60%] max-md:w-full place-self-center mt-2 rounded-md " id="fakePost">
        <header className="border-b-8 border-gray-500">

          <div className="flex items-center justify-between mx-5 pt-2">
            <p>{time}</p>
            <div className="flex items-center justify-between gap-1">
            <div className='flex flex-col items-center'>
                <Md4gMobiledata />
                <RiArrowUpDownLine className='size-2' />
              </div>
              <Signal/>  {/* ✅ Pass the prop here */}
              <Battery />
            </div>
          </div>

          <div className="flex items-center justify-between mx-6">
            <FaChevronLeft />
            <h1 className="text-lg font-bold">{profileName}</h1>
            <IoSearch className="text-2xl" />
          </div>

          <ul className="flex items-center justify-evenly my-4 font-bold text-sm">
            <li className="text-blue-700  px-2 py-1 rounded-2xl bg-blue-100 cursor-pointer">Posts</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Photos</li>
            <li className="cursor-pointer">Videos</li>
            <li className="flex items-center cursor-pointer">
              More
              <FaCaretDown />
            </li>
          </ul>
        </header>

        <main className="min-h-[14rem] w-full">

          <PostHead className="mb-5 "/>

          {postType === "photo" && 
          <div>
            <img src={postPhoto} alt="" className='w-full h-1/2 my-3' />
          </div>}

          {postType === "video" &&  
          <div>
            <video src={src}  controls className='w-full'></video>
          </div>}
        </main>

        <footer className="bg-white p-2 rounded-b-md break-words">
          <div className="flex items-center justify-between break-words">
            <div className="flex justify-center items-center gap-2 break-words">
              {
              likeType &&   <img src={likeType} alt="" className="w-9 h-5"/>
              }
              <p>{likes}</p>
              
            </div>
            <div className="flex items-center justify-between gap-2 break-words">
              <p>{comments} comments</p>
              <p>{shares} shares</p>
            </div>
          </div>

          <ul className="flex items-center mt-3 justify-between">
            <li className="flex items-center justify-center gap-1">
              <AiOutlineLike />
              <p>Likes</p>
            </li>
            <li className="flex items-center justify-center gap-1">
              <FaRegComment />
              <p>Comment</p>
            </li>
            <li className="flex items-center justify-center gap-1">
              <FaWhatsapp />
              <p>Send</p>
            </li>
            <li className="flex items-center justify-center gap-1">
              <RiShareForwardLine />
              <p>Share</p>
            </li>
          </ul>

          <ul className="flex items-end justify-evenly gap-2 text-xs font-bold my-5 border-t-2 pt-3 w-full">
            <li className="flex flex-col justify-center items-center text-blue-700 cursor-pointer">
              <div className="bg-blue-700 h-[0.2rem] w-full transform -translate-y-[1.3rem] rounded-sm"></div>
              <IoHome className="text-lg" />
              <p>Home</p>
            </li>
            <li className="flex flex-col justify-center items-center cursor-pointer">
              <GoVideo className="text-lg" />
              <p>Video</p>
            </li>
            <li className="flex flex-col justify-center items-center cursor-pointer">
              <FaUserFriends className="text-lg" />
              <p>Friends</p>
            </li>
            <li className="flex flex-col justify-center items-center cursor-pointer">
              <IoStorefrontSharp className="text-lg" />
              <p>Marketplace</p>
            </li>
            <li className="flex flex-col justify-center items-center cursor-pointer">
              <IoNotificationsOutline className="text-lg" />
              <p>Notification</p>
            </li>
            <li className="flex flex-col justify-center items-center relative cursor-pointer">
              <div>
                <img src={footerImage} alt=""  className="w-7 h-7 border-2 rounded-full"/>
                <IoMenu className="text-lg absolute top-4 right-0" />
              </div>
              <p>Menu</p>
            </li>
          </ul>
        </footer>
      </div>

      <div className="place-self-center my-5">
      <button 
  onClick={downloadPost} 
  className="px-6 py-3 text-white font-semibold rounded-lg bg-cyan-700 shadow-lg hover:bg-cyan-800 hover:shadow-xl active:scale-95 transition duration-200 ease-in-out animate__animated animate__pulse">
  ⬇️ Download
</button>


      </div>

    </div>

    
  );
};

export default Android;
