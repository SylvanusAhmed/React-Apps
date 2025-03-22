import Battery from "./Battery"
import {Routes, Route} from "react-router-dom"
import { AiOutlineLike } from "react-icons/ai";
import Profile1 from "../assets/profile-1.png"
import NetworkType from "./NetworkType"
import Signal from "./Signal"
import { FaChevronLeft, FaCaretDown, FaRegComment, FaWhatsapp, FaUserFriends } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { IoHome, IoStorefrontSharp, IoNotificationsOutline, IoMenu } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Photo from "./Photo";
import Video from "./Video";
import Text from "./Text";
import PostHead from "./PostHead";

const Android = ({ postPhoto,time, profileName, charge, signalStrength, profileImage, name, postState, cert, dateTime, renderHashtags, postContent, src, poster}) => { // Fix spelling
  return (
    <div className="bg-white w-[60%] place-self-center mt-2 rounded-md">
      <header className="border-b-8 border-gray-500">

        <div className="flex items-center justify-between mx-5 pt-2">
          <p>{time}</p>
          <div className="flex items-center justify-between gap-1">
            <NetworkType />
            <Signal signalStrength={signalStrength} />  {/* ✅ Pass the prop here */}
            <Battery charge={charge} />
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

        <PostHead profileImage={profileImage} name={name} postState={postState} cert={cert} dateTime={dateTime} postContent={postContent} renderHashtags={renderHashtags} className="mb-5 "/>



        <Routes>
          <Route index element={<Photo/>}/>
          <Route path="photo" element={<Photo postPhoto={postPhoto}/>}/>
          <Route  path="video" element={<Video src={src} ploster={poster}/>}/>
          <Route path="/" element={<Android/>}/>

        </Routes>
      </main>

      <footer className="bg-white p-2 rounded-b-md">
        <div className="flex items-center justify-between">
          <p>100 likes</p>
          <div className="flex items-center justify-between gap-1">
            <p>200 comments</p>
            <p>100 shares</p>
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

        <ul className="flex items-center justify-evenly gap-2 text-xs font-bold my-5 border-t-2 pt-3 w-full">
          <li className="flex flex-col justify-center items-center text-blue-700">
            <div className="bg-blue-700 h-[0.2rem] w-full transform -translate-y-[0.9rem] rounded-sm"></div>
            <IoHome className="text-lg" />
            <p>Home</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <GoVideo className="text-lg" />
            <p>Video</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <FaUserFriends className="text-lg" />
            <p>Friends</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <IoStorefrontSharp className="text-lg" />
            <p>Marketplace</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <IoNotificationsOutline className="text-lg" />
            <p>Notification</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <IoMenu className="text-lg" />
            <p>Menu</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Android;
