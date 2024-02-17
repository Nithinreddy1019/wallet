import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-fit w-1/4 border-2 rounded-lg pt-6 px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter your credentials to create an account"} />
                <InputBox label={"Email"} placeholder={"youremail@gmail.com"} />
                <InputBox label={"First name"} placeholder={"your first name"} />
                <InputBox label={"Last name"} placeholder={"your last name"} />
                <InputBox label={"Password"} placeholder={"your password"} />
                <Button label={"Sign Up"} />
                <div className="pb-4 pt-2 border-t-2">
                    <BottomWarning to={"/signin"} label={"Already have an account?"} buttonText={"Sign in"}/>
                </div>
            </div>
        </div>
    )
}

export default Signup