import React, { useState } from "react";
import rupee from "../assets/rupee.svg";

type ComponentProps = {
    amount: number
}

const Balance:React.FC<ComponentProps> = ({amount}) => {
    const [visibility, setVisibility] = useState(true);

    const clickHandler =() => {
        setVisibility(true);
        setTimeout(() => setVisibility(false), 1* 1000)
    }
    return (
        <div className="flex items-center px-4 py-4">
            <div className="font-medium text-md">Your balance:</div>
            <button onClick={clickHandler} className={`transition-all duration-300 flex items-center border-2 mx-2 py-2 px-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-400 text-white`}>{visibility ? <><img className="size-6 pr-1" src={rupee}></img> {amount.toFixed(2)}</> : "See balance" }</button>
        </div>
    )
}

export default Balance;