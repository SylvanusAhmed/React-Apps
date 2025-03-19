import { useParams } from "react-router-dom";
import { IoMdCalendar } from "react-icons/io";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
import { useContext} from 'react';
import DataContext from "../context/DataContext";


const TaskDetails = () => {
  const { searchResults, handleDelete} = useContext(DataContext)

  const { id } = useParams();
  const task = searchResults.find((e) => e.id === parseInt(id));

  

  return (

    task ? (

      <main className=" p-4 flex flex-col gap-6 pt-10">
          <div className="flex items-center gap-24 text-white mt-14">

              <Link to={"/"}>
                  <FaArrowLeft className="text-lg hover:scale-150 transition-transform duration-300 " />

              </Link>
              <h2 className="font-bold text-2xl">Task Detail</h2>

          </div>
          
            <div>
                <p className="text-blue-400 font-bold text-lg">What has to be done?</p>
                <h2 className=" text-white">{task.title}</h2>
            </div>

            <div>
              <span className="flex gap-64 items-center text-2xl text-white">
                <p className="text-blue-400 font-bold text-lg">Task Detail</p>
                <BiDetail />
              </span>
              <p className=" text-white">{task.description}</p>
            </div>

            <div>
                <p className="text-blue-400 font-bold text-lg">Due date </p>
              <span className="flex gap-[17rem] items-center text-white">
                <p >{task.date}</p>
                <IoMdCalendar className="text-2xl" />
              </span>

              <span className="flex gap-80 items-center mt-5 text-white">
                <p >{task.time}</p>
                <FaRegClock  className="text-2xl"/>
                
              </span>
            </div>

            <div>
              
            <p className={`text-white font-bold text-lg mb-5 capitalize ${task.status === "finished" && "text-green-400"}`}>{task.status}</p>

            <div className="flex justify-center items-center gap-3">

                    <button onClick={() => handleDelete(task.id)}  className="  text-2xl   w-20 p-2 rounded-lg bg-red-700 shadow-button hover:shadow-lg ">
                        <FaRegTrashAlt className="place-self-center text-white" />
                    </button>

                    <button   className="  text-2xl   w-20 p-2 rounded-lg  shadow-button hover:shadow-lg bg-gray-600">

                      <Link to={`/edit/${task.id}`}>
                        <GiPencil className="place-self-center text-white"/>

                      </Link>
                    </button>
            </div>



            </div>
        
      
    </main>

    ): (
      <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-2xl font-bold text-white">Task not found</p>
         <Link to={"/"}>
                     <p className="underline text-blue-700 cursor-pointer text-lg">click to return home</p>

        </Link>

      </main>
     

    )


      
    

    
   
  );
};

export default TaskDetails;
