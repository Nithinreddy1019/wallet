import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRecoil } from "react-icons/si";
import { FaGithub } from "react-icons/fa";




const HeroSection = () => {
  
  return (
    <>
    <div className="pt-2 flex pl-6 h-full bg-sky-50">
      <div className="flex flex-col justify-center h-[100vh]">
        <h1 className="font-bold text-4xl pb-7 underline text-gray-800">About</h1>
        <p className="text-lg py-2 text-gray-800">A small simulation of paytm wallet done in <span className="text-cyan-600 italic font-medium">Typescript</span></p>
        <div>
            <p className="italic font-medium text-gray-800">Stack Used to buid it -</p>
            <ul className="flex gap-6 text-gray-800 py-4 transition-all">
                <li className="flex flex-col items-center"> <FaReact className="text-sky-600 size-10"/>React</li>
                <li className="flex flex-col items-center"> <SiExpress className="size-10"/>Express </li>
                <li className="flex flex-col items-center"> <SiPrisma className="size-10"/>Prisma  </li>
                <li className="flex flex-col items-center"> <SiTailwindcss className="text-sky-600 size-10"/>Tailwind  </li>
                <li className="flex flex-col items-center"> <BiLogoPostgresql className="text-blue-400 size-10"/> SQL</li>
                <li className="flex flex-col items-center"> <SiJsonwebtokens className="size-10"/> JWT</li>
                <li className="flex flex-col items-center"> <SiZod className="size-10"/> Zod</li>
                <li className="flex flex-col items-center"><SiRecoil className="size-10"/>Recoil</li>
            </ul>
        </div>
        <p className="text-red-400 italic pt-4">Please signin to use</p>
      </div>
    </div>
    <div className="flex justify-center h-[10vh] bg-sky-200 relative rounded-t-[30px] items-center gap-4">
      <a href="https://github.com/Nithinreddy1019/wallet" className="flex gap-2 items-center text-lg">Github <FaGithub className="size-6"/></a> 
    </div>
    </>
  )
}

export default HeroSection
