import { useContext, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import {Link } from "react-router-dom"
import DataContext from '../context/DataContext'
import { FaArrowLeft } from "react-icons/fa";


const AddTask = () => {

  const { 
    title, 
    setTitle, 
    description, 
    setDescription, 
    status, 
    setStatus, 
    date, 
    setDate,
    time,
    setTime,
    tasks,
    setTasks,
    saveTask,
    navigate
  
  } = useContext(DataContext)

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(status || "Default"); // Use status prop if available

  const handleSubmit = (e) =>{
    e.preventDefault()
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {id , title: title, date: date, time: time, description: description, status:status}
    const allTasks =[...tasks, newTask]
    setTasks(allTasks)
    saveTask(allTasks)
     
    setTitle("")
    setDate("")
    setTime("")
    setDescription("")
    setStatus("")
    navigate('/')  

  }

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setStatus(option); // Update status
    setIsOpen(false); // Close dropdown after selection
  };

  

  return (
    <main className="pt-10 min-h-[135vh]">

      <div className="mt-14 text-white text-2xl flex gap-24 mb-5 items-center" >
            <Link to="/">
                <FaArrowLeft />
            </Link>
          <h2 className="font-Quicksand font-bold text-white text-2xl ml-14">New Task</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 mx-5">
        {/* Task Title */}
        <div className="flex flex-col">
          <label htmlFor="task-title" className="text-blue-400 font-bold text-lg">
            What is to be done?
          </label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-b-2 border-gray-600 focus:border-cyan-600"
          />
        </div>

        {/* Task Description */}
        <div className="flex flex-col">
          <label htmlFor="task-detail" className="text-blue-400 font-bold text-lg">
            Task Detail
          </label>
          <textarea
            id="task-detail"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none h-20  border-b-2 border-gray-600 "
          />
        </div>

        {/* Due Date */}
        <div className="flex flex-col gap-3">
          <label htmlFor="due-date" className="text-blue-400 font-bold text-lg">
            Due Date
          </label>
          <input
            id="due-date"
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent outline-none border-b-2 border-gray-600 text-white "
          />
          <input
            id="due-time"
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-transparent outline-none border-b-2 border-gray-600 text-white"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="text-white flex items-center justify-between w-full px-4 py-2 border-b-2 border-gray-600 focus:border-cyan-600 bg-transparent"
          >
            <span>{selected}</span>
            <BsCaretDownFill className={`text-white transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 shadow-md rounded-lg z-10 max-h-48 overflow-y-auto">
              {
              [
                "default",
                 "personal",
                 "shopping",
                 "wishlist",
                 "work"

              ].map((option) => (
                <label key={option} className="cursor-pointer flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <input
                    type="radio"
                    name="taskStatus"
                    required
                    value={option}
                    checked={status === option}
                    onChange={() => handleSelect(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <button type="Submit" className="text-blue-500 bg-white font-bold font-Quicksand py-2 px-4 w-full rounded-lg hover:shadow-button transition-all duration-200 ">
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddTask;
