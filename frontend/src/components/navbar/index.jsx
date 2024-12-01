import { useNavigate } from "react-router-dom";
import "../../output.css";
export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="w-full bg-[#212121] flex justify-between pt-6">
      <div className="flex">
        <div className="text-white text-2xl mr-2">//</div>
        <div className="flex flex-col justify-center ">
          <div className="text-white text-2xl cursor-pointer" onClick={()=>navigate("/home")}> Rohan</div>
          <div className="text-[#9A99FF] text-2xl pb-2 cursor-pointer" onClick={() => navigate("/home")}>
            web_dev
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-2xl pb-5 mx-12">
          <div className="text-[#E6DB74]">
            Talk is Cheap.
            <a
              href="https://github.com/Sandstorm831"
              className="cursor-pointer"
            >
              {" "}
              Show me the code
            </a>
          </div>
          <div className="flex justify-end text-[#9A99FF]">
            {" "}
            - Linus Torvalds
          </div>
        </div>
      </div>
    </div>
  );
}
