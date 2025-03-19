import { createContext, useState, useEffect} from 'react'
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom'


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : []; // Parse the string into an array or return an empty array
  });
  
  const saveTask = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  useEffect(() => {
    const filteredResults = tasks.filter(task => 
      ((task.title).toLowerCase()).includes(search.toLowerCase())
    || ((task.date).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())

  }, [tasks, search])


  useEffect(() => {
    const updatedTasks = tasks.map(task => {
      const isOverdue = checkOverdue(task);
      
      if (!task.checked && isOverdue && task.status !== "overdue") {
        return { ...task, status: "overdue", previousStatus: task.status };
      }
      return task;
    });
  
    // Only update state if there is a change
    if (JSON.stringify(updatedTasks) !== JSON.stringify(tasks)) {
      setTasks(updatedTasks);
      saveTask(updatedTasks);
    }
  }, [tasks]);
  
  

  
 

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks)
    saveTask(updatedTasks)
  }

 

  const checkOverdue = (task) => {
    const taskDateTime = new Date(`${task.date}T${task.time}`);
    const now = new Date();
    return taskDateTime < now; // Task is overdue if its datetime is in the past
  };
  
  


  const handleCheck = (id) => {
    const taskCompleted = tasks.map((task) => {
      if (task.id === id) {
        // Toggle the checked state
        const isChecked = !task.checked;
        const isOverdue = checkOverdue(task); // Check if the task is overdue
  
        return {
          ...task,
          checked: isChecked,
          status: isChecked  ? "finished" : task.previousStatus ? task.previousStatus : isOverdue ? "overdue" : task.status, // Restore previous status or mark as overdue
          previousStatus: isChecked 
            ? task.status 
            : task.previousStatus, // Save previous status before marking finished
        };
      }
      return task;
    });
  
    setTasks(taskCompleted);
    saveTask(taskCompleted);
  };
  
  return(
    <DataContext.Provider value={{
      search,setSearch,
      searchResults, handleCheck, handleDelete,
      title, setTitle, 
      description, setDescription, 
      status, setStatus, 
      date, setDate,
      time,setTime,
      tasks, setTasks,
      saveTask,
      navigate

    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;