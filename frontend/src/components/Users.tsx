import { IoIosSearch } from "react-icons/io";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [filter, setFilter] = useState('');
    const [users, setUsers] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                setUsers(res.data.user)
            })
            }, 400)

        return () => {clearTimeout(timer)}
    }, [filter])

    return (
        <div className="mx-4 ">
            <div className="flex items-center gap-x-2">
                <input placeholder="Search for users" className="h-10 rounded-lg border border-gray-300 focus:ring-sky-500 focus:outline-sky-500 px-2 w-full w-min-80" onChange={(e) => {
                    setFilter(e.target.value)
                }}></input>
                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-2 rounded-full mx-2 pr-4"> <IoIosSearch className="size-6" />search </button>
            </div>
            <div>
                {users.map((user) => {return <User firstName={user.firstName} lastName={user.lastName} id={user.id}/>})}  
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
    const navigate = useNavigate();

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
                <button onClick={() => {
                    navigate(`/sendmoney?id=${id}&username=${firstName}`)
                }} className="border rounded-full bg-sky-400 text-white py-2 px-2 mr-1 hover:bg-sky-500 hover:scale-105 transition-all duration-300">Send Money</button>
            </div>
        </div>
    )
}


export default Users;