import React from "react";
import { Link } from "react-router-dom";

type ComponentProps = {
    label: string,
    buttonText: string, 
    to: string
}

const BottomWarning:React.FC<ComponentProps> = ({label, buttonText, to}) => {
    return(
        <div className="flex justify-center items-center text-sm p-2">
            <div>
                {label}
            </div>
            <Link className="underline pl-1 cursor-pointer" to={to}>{buttonText}</Link>
        </div>
    )
};


export default  BottomWarning;