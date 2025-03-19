import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='max-w-md w-full fixed bottom-0 z-10 '>

        <Link to={'/AddTask'}>
            <div className='flex justify-center bg-cyan-600 p-3  w-full'>
                <IoAddSharp className='text-4xl text-white font-bold hover:rotate-180 transition-transform duration-300 cursor-pointer' />
                
            </div>
        </Link>

        

    </footer>
  )
}

export default Footer