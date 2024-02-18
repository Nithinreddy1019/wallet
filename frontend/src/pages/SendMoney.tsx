const SendMoney = () => {
    return (
        <div className="flex justify-center items-center h-screen p-4">
            <div className="h-fit w-80 flex flex-col rounded-lg p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="text-4xl font-semibold p-4 flex justify-center text-green-500">
                    Send Money
                </div>
                <div className="pb-4 text-center px-4">
                    Enter amount to send the money
                </div>
                <div className="flex gap-x-2 items-center px-4">
                    <div className="bg-sky-100 px-2 rounded-full flex flex-col justify-center items-center size-8">
                        U
                    </div>
                    <div className="font-mediums py-2">
                        username
                    </div>
                </div>
                <div className="pt-2 px-2 flex items-center gap-x-2 py-4">
                    <input type="number" className="h-10 rounded-lg border border-gray-300 focus:ring-sky-500 focus:outline-sky-500 px-2 w-full w-min-80" />
                    <button className="px-2 py-2 bg-green-400 rounded-2xl hover:bg-green-500 text-white focus:ring-2 focus:ring-green-800 transition-all duration-300 ">send</button>
                </div>

            </div>

        </div>
    )

}


export default SendMoney