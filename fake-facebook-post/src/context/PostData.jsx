import { createContext, useState, useRef  } from "react"
import ProfileImage from "../assets/profile.jpg"
import certified from "../assets/certif.png"
import PostPhoto from "../assets/profile-1.png"
import FooterImage from "../assets/profile.jpg"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";



const PostData = createContext({})


export const PostDataProvider = ({children}) => {
    const [ time, setTime] = useState("10:04")
    const [profileName, setProfileName] = useState("Sylvanus");
    const [profileImage, setProfileImage] = useState(ProfileImage);
    const [postState, setPostState] = useState("Live")
    const [cert, setCert] = useState(null)
    const [name, setName] = useState("Sylvanus")
    const [charge, setCharge] = useState(50);
    const [postPhoto, setPostPhoto] = useState(PostPhoto)
    const [signalStrength, setSignalStrength] = useState(2); // Default signal strength (2 bars)
    const scrollRef = useRef(null);
    const [dateTime, setDateTime] = useState("Yesterday at 22:00");
    const [postContent , setPostContent] = useState("Explore the different #possiblities the fake facebook post page can offer");
    const [poster, setPoster] = useState(PostPhoto); // Default poster image
    const [src, setSrc] = useState(null); // Default video source (empty initially)
    const [likes, setLikes] = useState("11k");
    const [likeType, setLikeType] = useState("");
    const [shares, setShares] = useState(50)
    const [comments, setComments] = useState(50);
    const [footerImage, setFooterImage] = useState(FooterImage);
    const [postType, setPostType] = useState("text"); // Default to "text"

  
    // Function to handle user input for the video source
    const handleVideoInput = (event) => {
      const file = event.target.files[0];
      if (file) {
        const videoURL = URL.createObjectURL(file); // Create a URL for the selected file
        setSrc(videoURL); // Update the video source
        setPoster(''); // Remove the poster when video is loaded
      }
    };

    

    const handleFooterImage = (e) => {
      const file = e.target.files[0]
      if (file) {
        // Use URL.createObjectURL to create a URL for the selected file
        const imageUrl = URL.createObjectURL(file);
        setFooterImage(imageUrl); // Update the state with the image URL
      }

    }
  
  
  
    const handlePostContent =(e) =>{
      setPostContent(e.target.value)
    }
  
    // Function to render hashtags as styled text
    const renderHashtags = (text) => {
      // Use a regular expression to match hashtags
      const hashtagPattern = /(#\w+)/g;
  
      // Split text by hashtags, and map each part
      return text.split(hashtagPattern).map((part, index) => {
        if (hashtagPattern.test(part)) {
          // If part matches the hashtag pattern, apply styling
          return (
            <span key={index} className="text-blue-600 font-semibold">
              {part}
            </span>
          );
        }
        // Regular text (non-hashtags) is returned as it is
        return part;
      });
    };
  
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Use URL.createObjectURL to create a URL for the selected file
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl); // Update the state with the image URL
      }
    };
    const handlePostPhoto = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Use URL.createObjectURL to create a URL for the selected file
        const imageUrl = URL.createObjectURL(file);
        setPostPhoto(imageUrl); // Update the state with the image URL
      }
    };
    const handleCert =(e) =>{
      if(e.target.checked){
        setCert(certified)
      }
      else{
        setCert(null)
      }
    }
  
    // Function to handle scrollbar drag
    const handleDrag = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX; // Support touch and mouse
      const scrollBar = scrollRef.current.getBoundingClientRect();
      const percentage = Math.min(
        Math.max((clientX - scrollBar.left) / scrollBar.width, 0),
        1
      ); // Normalize to a value between 0 and 1
    
      const newStrength = Math.round(percentage * 4); // Convert to 0-4 bars
      setSignalStrength(newStrength);
    };
    
    // Function to start drag
    const handleStart = (e) => {
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleDrag); // Add touch event
      document.addEventListener("touchend", handleEnd);
    };
    
    // Function to stop drag
    const handleEnd = () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleDrag); // Remove touch event
      document.removeEventListener("touchend", handleEnd);
    };
    
  
    const handleCharge = (e) => {
      let value = parseInt(e.target.value, 10);
      if (isNaN(value)) value = 0;
      if (value > 100) value = 100;
      if (value < 0) value = 0;
      setCharge(value);
    };


    const downloadPost = () => {
      const post = document.getElementById("fakePost"); // Ensure this ID is in your post container
    
      html2canvas(post).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "fake_facebook_post.png";
        link.click();
      });
    };
    
    



   return(
    <PostData.Provider value={{
        profileImage, name, postState, cert, dateTime, renderHashtags, postContent,
        time, setTime, handleCharge, charge, scrollRef,  signalStrength, handleStart,
        profileName, setProfileName, handleImageChange, name, setName, setPostState, handleCert,
        dateTime, setDateTime, handlePostContent, handlePostPhoto, handleVideoInput, likes, setLikes,
        comments,setComments,shares,setShares,setLikeType,charge,signalStrength,
        postPhoto,time,  profileName,likes, likeType, comments, shares,
        src, poster, footerImage, handleFooterImage, setPostType, postType, downloadPost 
    }}>
        {children}
    </PostData.Provider>
   ) 
}

export default PostData