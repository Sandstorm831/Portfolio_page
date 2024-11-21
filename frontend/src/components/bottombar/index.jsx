import "../../output.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaHeart  } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function BottomNavbar(){
    return <div className="bg-[#212121] flex justify-between">
        <div className="flex">
            <div className="px-3 text-[#E6DB74] text-xl mb-8 mt-5 cursor-pointer flex flex-col justify-center">_home</div>
            <div className="px-3 text-[#E6DB74] text-xl mb-8 mt-5 cursor-pointer flex flex-col justify-center">_portfolio</div>
            <div className="px-3 text-[#E6DB74] text-xl mb-8 mt-5 cursor-pointer flex flex-col justify-center">_about</div>
            <div className="px-3 text-[#E6DB74] text-xl mb-8 mt-5 cursor-pointer flex flex-col justify-center">_services</div>
            <div className="px-3 text-[#E6DB74] text-xl mb-8 mt-5 cursor-pointer flex flex-col justify-center">_resume</div>
            <div className="px-3 text-[#E6DB74] text-xl mb-8 mt-5 cursor-pointer flex flex-col justify-center">_contact</div>
        </div>
        <div className="flex justify-start w-1/4 ">
            <div className="flex flex-col justify-center"><FaXTwitter  className="text-[#2FCBEF] text-xl mx-5 mt-8 mb-8"/></div>
            <div className="flex flex-col justify-center"><FaGithub className="text-[#2FCBEF] text-xl mx-5 mt-8 mb-8" /></div>
            <div className="flex flex-col justify-center"><FaLinkedinIn className="text-[#2FCBEF] text-xl mx-5 mt-8 mb-8" /></div>
        </div>
        <div className="flex">
            <div className="text-[#E6DB74] text-xl ml-5 mr-2 mt-5 mb-8 flex flex-col justify-center">Made with </div>
            <div className="text-[#E6DB74] mt-5 mb-8 text-xl flex flex-col justify-center">  <FaHeart />  </div>
            <div className="text-[#E6DB74] text-xl mr-16 ml-2 mt-5 mb-8 flex flex-col justify-center" > by RG</div>
        </div>
    </div>
}