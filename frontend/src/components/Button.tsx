import React from "react";

type ComponentProps = {
    label: string
}

const Button:React.FC<ComponentProps> = ({label}) => {
    return(
        <div className="p-2 w-full">
            <button className="w-full border border-sky-500 rounded-xl px-5 py-2 pb-3 text-center font-medium text-white bg-gradient-to-br from-sky-500 to-blue-500 focus:ring-sky-200 focus:ring-4 hover:bg-gradient-tl hover:from-sky-600 hover:to-blue-600 transition-all duration-500">{label}</button>
        </div>
    )
}

export default Button;