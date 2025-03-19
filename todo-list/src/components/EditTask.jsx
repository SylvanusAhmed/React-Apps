import { useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import DataContext from "../context/DataContext";

const EditTask = () => {

  const { 
    tasks, 
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
 } = useContext(DataContext)

  const { id } = useParams();
  const navigate = useNavigate();

  const taskToEdit = tasks.find((task) => task.id === parseInt(id));


  const handleEdit = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) => 
      task.id === parseInt(id) ? { ...task, ...updatedTask } : task
    );
  
    setTasks(updatedTasks);
    saveTask(updatedTasks);
  };



  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
      setDate(taskToEdit.date);
      setTime(taskToEdit.time);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(id, { title, description, status, date, time });
    navigate("/");
  };

  if (!taskToEdit) {
    return <p className="text-red-500">Task not found</p>;
  }

  return (
    <div className="p-4 mt-[4rem]">
        <div className="m-5 flex items-center justify-between text-white">
            <Link to={`/tasks/${taskToEdit.id}`}>
                <FaArrowLeft className="text-lg" />
            </Link>
            <h2 className="text-xl font-bold ">Edit Task</h2>

            <Link to={"/"}>
                <FaHome  className="text-2xl"/>
            </Link>
        </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          type="text"
          className="p-2 border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="p-2 border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select
          className="p-2 border"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="default">Default</option>
          <option value="shopping">Shopping</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="finished">Finished</option>
          <option value="wishlist">Wish List</option>
        </select>
        <input
          type="date"
          className="p-2 border"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          className="p-2 border"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTask;
