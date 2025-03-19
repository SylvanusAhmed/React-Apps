import { Link } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { useContext } from "react";
import DataContext from "../context/DataContext";



const Finished = () => {

  const { searchResults, handleCheck, handleDelete} = useContext(DataContext)

  const filteredTasks = searchResults.filter((searchResult) => searchResult.status === "finished");

  return (
    <main className=' overflow-y-auto'>
      <div className="mt-[4rem]">

          {filteredTasks.length > 0 ? (

            filteredTasks.map((searchResult) =>(
              <ul>    
                    <li key={searchResult.id} className='list-none shadow-md flex items-center  justify-between  text-white bg-green-800  p-5 cursor-pointer hover:shadow-2xl mb-3'>
                      <input 
                        type="checkbox"
                        checked = {searchResult.checked}
                        onChange={() => handleCheck(searchResult.id)}

                        />

                    <Link  to={`/tasks/${searchResult.id}`} >
                      <h2 className='text-2xl'>{searchResult.title}</h2>
                      <div className='flex items-center justify-center gap-3'>
                        <p className='text-gray-400'>{searchResult.date}</p>
                        <p className='text-gray-400'>{searchResult.time}</p>
                      </div>
                    </Link>
                    <FaRegTrashAlt onClick={() => handleDelete(searchResult.id)} />


                  </li>
            </ul>

            ))
          ) : (
            <>

                < div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 ">
                    <GiPalmTree  className='place-self-center text-6xl'/>
                    <p>No task found</p>
                </div>
            
            </>
          
          )}
      </div>

    
        
    </main>
  )
}

export default Finished