import React from "react";

type ComponentProps = {
    label: string
}

const DashNav:React.FC<ComponentProps> = ({label}) => {
    return (
        <div className="flex justify-between shadow-[0px_4px_1px_0px_#bee3f8] w-full bg-white">
            <div className="bg-gradient-to-r from-sky-900 via-sky-500 to-gray-800 inline-block text-3xl font-bold text-transparent bg-clip-text py-2 pl-2">
                Wall-e(t)
            </div>
            <div className="flex justify-center items-center gap-4 px-4">
                <div className="font-medium text-sky-400">
                    {label}
                </div>
                <div className="bg-sky-100 px-2 rounded-full flex flex-col justify-center items-center size-8">
                    {label[0]}
                </div>
            </div>
        </div>
    )
}

export default DashNav;