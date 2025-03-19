import { useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import { GiPalmTree } from "react-icons/gi";
import Nav from './components/Nav';
import AllLists from './components/AllLists';
import Default from './components/Default';
import Finished from './components/Finished';
import Personal from './components/Personal';
import WishList from './components/WishList';
import Work from './components/Work';
import Shopping from './components/Shopping';
import TaskDetails from './components/TaskDetails';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Error404 from './components/Error404';
import OverDue from './components/OverDue';

import { DataProvider} from "./context/DataContext"

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : []; // Parse the string into an array or return an empty array
  });
  

  return (
    <div className='relative top-10 md:left-1/4  border-6 max-w-md w-full min-h-screen mb-[6rem] bg-cyan-700 sm:left-0'>

      <DataProvider>
                <Nav/>
    
                {tasks && tasks.length > 0 ? (
              
                    <Routes>
                      
                      <Route path="/" element={<AllLists />}/>
                      
                      <Route path="/default" element={<Default/> } />
                      
                      <Route path="/finished" element={<Finished/>} />
                      
                      <Route path="/overdue" element={<OverDue/>} />
                      
                      <Route path="/personal" element={<Personal/>} />
                      
                      <Route path="/shopping" element={<Shopping />} />
                      
                      <Route path="/wishList" element={<WishList/>} />
                      
                      <Route path="/tasks/:id" element={<TaskDetails/>} />
                      
                      <Route path="/work"  element={<Work/>}/>
                      
                      <Route path="/AddTask" element={<AddTask/>}/>
                      
                      <Route path="/edit/:id" element={<EditTask/>} />
                    
                      {/*page not found*/}
                      <Route 
                        path="*" 
                        element={<Error404/>} 
                      />
                    </Routes>
                  
                
            ) : (
              <>
              
                  <Routes>
                      <Route 
                              path="/AddTask" 
                              element={<AddTask/>}
                      />
                  </Routes>

                  < div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 ">
                      <GiPalmTree  className='place-self-center text-6xl'/>
                      <p>No task found</p>
                  </div>
                
              
              </>
              
            
            ) }

       
          <Footer/>

      </DataProvider>


    </div>
  )
}

export default App