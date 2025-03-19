import { Link } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import {useContext} from 'react';
import DataContext from "../context/DataContext";

const OverDue = () => {
    const { searchResults, handleCheck, handleDelete } = useContext(DataContext);

    // if (!Array.isArray(searchResults)) {
    //     return (
    //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
    //             <GiPalmTree className='place-self-center text-6xl'/>
    //             <p>No task found</p>
    //         </div>
    //     );
    // }

    const filteredTasks = searchResults.filter((searchResult) => searchResult.status === "overdue");

    return (
        <main className='overflow-y-auto mt-[4rem]'>
            {filteredTasks.length > 0 ? (
                filteredTasks.map((searchResult) => (
                    <ul>
                        <li key={searchResult.id} className='list-none overflow-y-auto shadow-md flex items-center justify-between gap-5 text-white mb-5 p-3 bg-red-900 cursor-pointer hover:shadow-2xl'>
                            <input 
                                type="checkbox"
                                checked={searchResult.checked}
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

                    </ul>
                    
                ))
            ) : (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
                    <GiPalmTree className='place-self-center text-6xl'/>
                    <p>No overdue tasks found</p>
                </div>
            )}
        </main>
    );
};

export default OverDue;
