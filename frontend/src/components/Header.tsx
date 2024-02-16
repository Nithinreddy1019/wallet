import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-between shadow-[0px_4px_1px_0px_#bee3f8]">
      <Link to={"/"} className="bg-gradient-to-r from-sky-900 via-sky-500 to-gray-800 inline-block text-3xl font-bold text-transparent bg-clip-text py-2 pl-2">Wall-e(t)</Link>
      <div className="flex">
        <div className="flex items-center group relative mr-4">
          <Link to={"/signin"} className="px-2 flex items-center font-bold transition-all duration-500 bg-gradient-to-r from-sky-400 to-sky-900 text-transparent bg-clip-text">Sign in</Link>
          <span className="absolute bottom-3 right-1 left-[2px] w-0 h-[2px] bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
        </div>
      
        <div className="flex items-center group relative mr-4">
          <Link to={"/signup"} className="flex items-center font-bold bg-gradient-to-r from-sky-400 to-sky-900 text-transparent bg-clip-text">Create an account</Link>
          <span className="absolute bottom-3 right-1 left-[2px] w-0 h-[2px] bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
        </div>
      </div>
    </div>
  )
}

export default Header
