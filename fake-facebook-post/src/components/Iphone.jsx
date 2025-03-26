import Battery from "./Battery"
import {Routes, Route} from "react-router-dom"
import { AiOutlineLike } from "react-icons/ai";
import Signal from "./Signal"
import { FaChevronLeft, FaCaretDown, FaRegComment, FaWhatsapp, FaUserFriends } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { IoHome, IoStorefrontSharp, IoNotificationsOutline, IoMenu } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Md4gMobiledata } from "react-icons/md";
import Photo from "./Photo";
import Video from "./Video";
import PostHead from "./PostHead";
import PostData from "../context/PostData";
import {useContext} from 'react'


const Iphone = () => { // Fix spelling

const { postPhoto,time,  profileName,likes, likeType, comments, shares, footerImage} = useContext(PostData)
  return (
    <div className="bg-white md:w-[60%] max-md:w-full place-self-center mt-2 rounded-md">
      <header className="border-b-8 border-gray-500">

        <div className="flex items-center justify-between mx-5 pt-2">
          <p>{time}</p>
          <div className="flex items-center justify-between gap-1">
            
            <Signal/>  {/* ✅ Pass the prop here */}
            <div className='flex flex-col items-center'>
              <Md4gMobiledata />
            </div>
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



        <Routes>
          <Route path="photo" element={<Photo/>}/>
          <Route  path="video" element={<Video/>}/>

        </Routes>
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

        <div className="h-1 w-36 bg-gray-800 rounded-md place-self-center">

        </div>
      </footer>
    </div>
  );
};

export default Iphone;
