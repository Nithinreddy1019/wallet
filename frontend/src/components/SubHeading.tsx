import React from "react";

type ComponentProps = {
    label: string
}

const SubHeading:React.FC<ComponentProps> = ({label}) => {
    return (
        <div className="py-4 px-10 text-center flex justify-center items-center">
            {label}
        </div>
    )
}

export default SubHeading;