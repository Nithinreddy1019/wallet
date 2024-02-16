import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link to={"/"} className="bg-gradient-to-r from-sky-900 via-sky-500 to-gray-800 inline-block text-3xl font-bold text-transparent bg-clip-text py-2 pl-2">Wall-e(t)</Link>
      <div className="flex">
        <div className="flex items-center group relative mr-4">
          <Link to={"/signin"} className="px-2 flex items-center font-bold transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-sky-900 group-hover:text-transparent group-hover:bg-clip-text">Sign in</Link>
          <span className="absolute bottom-2 right-1 left-[2px] w-0 h-[2px] bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
        </div>
      
        <div className="flex items-center group relative mr-4">
          <Link to={"/signup"} className="flex items-center font-bold group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-sky-900 group-hover:text-transparent group-hover:bg-clip-text">Create an account</Link>
          <span className="absolute bottom-2 right-1 left-[2px] w-0 h-[2px] bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
        </div>
      </div>
    </div>
  )
}

export default Header
