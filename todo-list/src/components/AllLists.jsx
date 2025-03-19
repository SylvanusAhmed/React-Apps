import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GiPalmTree } from "react-icons/gi";
import { FaRegTrashAlt } from "react-icons/fa";
import DataContext from '../context/DataContext'

const AllLists = () => {
  const {searchResults, handleCheck,handleDelete} = useContext(DataContext)



  return (
     <main className=' overflow-y-auto mt-[4rem]'>

{searchResults?.length ? searchResults.map((searchResult) => (
  
  <li key={searchResult.id} className={`list-none overflow-y-auto shadow-md flex gap-5 justify-between items-center text-white mb-2 p-3 cursor-pointer 
    ${searchResult.status === "finished" ? "bg-green-800" : ""} 
    ${searchResult.status === "overdue" ? "bg-red-900" : ""}`}>

    <input 
      type="checkbox"
      checked={searchResult.checked || false} // Ensure it's always a boolean
      onChange={() => handleCheck(searchResult.id)}
    />

    <Link to={`/tasks/${searchResult.id}`}>
      <h2 className='text-2xl'>{searchResult.title}</h2>
      <div className='flex items-center justify-center gap-3'>
        <p className='text-gray-400'>{searchResult.date}</p>
        <p className='text-gray-400'>{searchResult.time}</p>
      </div>
    </Link>

    <FaRegTrashAlt onClick={() => handleDelete(searchResult.id)} />
  </li>
)) : 
    <>

        < div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 ">
            <GiPalmTree  className='place-self-center text-6xl'/>
            <p>No task found</p>
        </div>

    </>

}

     </main>
  )
}

export default AllLists