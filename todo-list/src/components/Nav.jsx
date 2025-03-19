import { useState, useContext } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext"


const Nav = (  ) => {
    const { search, setSearch} = useContext(DataContext)
    

        const [isOpen, setIsOpen] = useState(false);
        const [selected, setSelected] = useState("All Lists"); 


        const toggleDropdown = () => setIsOpen(!isOpen);

        const handleSelect = (option) => {
            setSelected(option);
            setIsOpen(false); // Close dropdown after selection
        };

  return (
    <nav className="fixed top-0 bg-cyan-600 min-h-14 shadow-lg max-w-md w-full">
        <h1 className="place-self-center p-3 text-white font-bold text-2xl">Todo List</h1>



        <div className="flex justify-around items-center py-2">
            <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="text-white flex items-center gap-2  px-4 py-2 hover:rounded-lg hover:bg-gray-300 transition"
            >
                <span>{selected}</span> 
                <BsCaretDownFill className="text-white" />
            </button>

            
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-lg">
                {[
                    { name: "All Lists", path: "/" },
                    { name: "Default", path: "/Default" },
                    { name: "Personal", path: "/Personal" },
                    { name: "Shopping", path: "/Shopping" },
                    { name: "Wishlist", path: "/WishList" },
                    { name: "Work", path: "/Work" },
                    { name: "Overdue", path: "/overdue" },
                    { name: "Finished", path: "/Finished" }
                ].map((item) => (
                    <li key={item.path} className="hover:bg-gray-100">
                    <Link
                        to={item.path}
                        onClick={() => handleSelect(item.name)}
                        className="block px-4 py-2 text-gray-700"
                    >
                        {item.name}
                    </Link>
                    </li>
                ))}
                </ul>
            )}
            </div>

            <div className="flex items-center flex-row-reverse">
                <form action="" onSubmit={(e)=> e.preventDefault()} >
                    <input 
                        type="search"
                        placeholder="search"
                        role='searchbox'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-none p-2 rounded-sm" 
                    />
                    <label htmlFor="" className="hidden">search</label>
                </form>

            </div>
        </div>
    </nav>
  );
};

export default Nav;
