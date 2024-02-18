import React from "react";

type ComponentProps = {
    label: string,
    placeholder: string
    onChange: (event: any) => void
}

const InputBox:React.FC<ComponentProps> = ({label, placeholder, onChange}) => {
    return (
        <div className="w-full px-2 py-2">
            <p className="text-gray-800 font-semibold pl-1">{label}</p>
            <input onChange={onChange} placeholder={placeholder} className="w-full h-9 rounded-lg px-2 py-2 border border-gray-300 focus:ring-sky-500 focus:outline-sky-500"></input>
        </div>
    )
}

export default InputBox;