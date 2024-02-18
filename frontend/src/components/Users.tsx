import { IoIosSearch } from "react-icons/io";
import React from "react";


const Users = () => {
    return (
        <div className="mx-4 ">
            <div className="flex items-center gap-x-2">
                <input placeholder="Search for users" className="h-10 rounded-lg border border-gray-300 focus:ring-sky-500 focus:outline-sky-500 px-2 w-full w-min-80"></input>
                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-2 rounded-full mx-2 pr-4"> <IoIosSearch className="size-6" />search </button>
            </div>
            <div>
                <User firstName="zz" lastName="zz" id={1}/>
            </div>
        </div>
    )
}



type userComponentProps = {
    firstName: string,
    lastName: string,
    id: number
}

const User:React.FC<userComponentProps> = ({firstName, lastName, id}) => {
    return(
        <div className="flex items-center justify-between mt-2 ">
            <div className="flex items-center justify-center gap-2">
                <div className="bg-sky-100 px-2 rounded-full flex flex-col justify-center items-center size-8">
                    {firstName[0].toUpperCase()}
                </div>
                <div>
                    {firstName} {lastName}
                </div>
            </div>
            <div>
                <button className="border rounded-full bg-sky-400 text-white py-2 px-2 mr-1 hover:bg-sky-500 hover:scale-105 transition-all duration-300">Send Money{id}</button>
            </div>
        </div>
    )
}


export default Users;