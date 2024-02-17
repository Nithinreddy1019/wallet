import React from "react";

type ComponentProps ={
    label: string
}

const Heading:React.FC<ComponentProps> = ({label}) => {
    return (
        <div className="flex justify-center items-center py-2 px-4 h-10 w-full font-bold text-4xl">
            {label}
        </div>
    )
}

export default Heading;