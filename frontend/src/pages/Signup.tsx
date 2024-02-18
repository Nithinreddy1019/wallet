import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-fit w-1/4 border-2 rounded-lg pt-6 px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter your credentials to create an account"} />
                <InputBox onChange={(e) => {
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"youremail@gmail.com"} />

                <InputBox onChange={(e) => {
                    setFirstName(e.target.value)
                }} label={"First name"} placeholder={"your first name"} />
                
                <InputBox onChange={(e) => {
                    setLastName(e.target.value)
                }} label={"Last name"} placeholder={"your last name"} />
                
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"your password"} />
                <Button onClick={() => {
                    axios.post("http://localhost:3000/api/v1/user/signup", {
                        username: username,
                        firstName: firstName,
                        lastName: lastName,
                        password: password
                    }).then((res: any) => {
                        localStorage.setItem("token", res.data.token);
                        navigate("/dashboard");
                    }).catch((error) => {
                        alert("an error")
                        console.log(error)
                    })
                }} label={"Sign Up"} />
                <div className="pb-4 pt-2 border-t-2">
                    <BottomWarning to={"/signin"} label={"Already have an account?"} buttonText={"Sign in"}/>
                </div>
            </div>
        </div>
    )
}

export default Signup