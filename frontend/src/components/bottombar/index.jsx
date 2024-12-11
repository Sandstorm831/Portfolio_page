import "../../output.css"
import {  FaHeart  } from "react-icons/fa";
export default function BottomNavbar(){
    return <div className="bg-[#212121] flex justify-center">
        <div className="flex justify-center">
            <div className="text-[#E6DB74] text-xl ml-5 mr-2 mt-5 mb-8 flex flex-col justify-center">Made with </div>
            <a className="text-[#E6DB74] mt-5 mb-8 text-xl flex flex-col justify-center" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=43s" target="_blank" rel="noopener noreferrer" >  <FaHeart />  </a>
            <div className="text-[#E6DB74] text-xl mr-16 ml-2 mt-5 mb-8 flex flex-col justify-center" > by RG</div>
        </div>
    </div>
}