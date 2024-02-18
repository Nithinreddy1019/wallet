import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
            <div className="h-fit w-1/4 border-2 rounded-lg pt-6 px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to log in"} />
                <InputBox onChange={(e) => {
                  setUsername(e.target.value)
                }} label={"Email"} placeholder={"youremail@gmail.com"} />
                
                <InputBox onChange={(e) => {
                  setPassword(e.target.value)
                }} label={"Password"} placeholder={"your password"} />
                
                <Button  label={"Sign in"} onClick={() => {
                  axios.post("http://localhost:3000/api/v1/user/signin", {
                    username: username,
                    password: password
                  }).then((res: any) => {
                    localStorage.setItem("token", res.data.token)
                    navigate("/dashboard");
                  }).catch((error) => {
                    alert("An error")
                    console.log(error);
                  })
                }} />
                <div className="pb-4 pt-2 border-t-2">
                    <BottomWarning to={"/signup"} label={"Don't have an account?"} buttonText={"Sign up"}/>
                </div>
            </div>
        </div>
  )
}
export default Signin
