import { Link } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import DataContext from "../context/DataContext";
import { useContext} from 'react'


const Default = () => {

  const { searchResults, handleCheck, handleDelete} = useContext(DataContext)
 

    const filteredTasks = searchResults.filter((searchResult) => searchResult.status === "default");
  return (
    <main className="overflow-y-auto">
      <div className="mt-[5rem]">

          
            
          {filteredTasks.length > 0 ? (

              filteredTasks.map((searchResult) =>(
                <ul>
                      <li key={searchResult.id} className='list-none shadow-md flex items-center justify-between gap-5 text-white mb-5 p-4 cursor-pointer hover:shadow-2xl'>
                        <input 
                          type="checkbox"
                          checked = {searchResult.checked}
                          onChange={() => handleCheck(searchResult.id)}

                          />

                      <Link  to={`/tasks/${searchResult.id}`} >
                        <h2 className='text-2xl'>{searchResult.title}</h2>
                        <p className='text-gray-400'>{searchResult.dateTime}</p>
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

export default Default