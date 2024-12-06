import "../../output.css";
import BottomNavbar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Sideline from "../../components/sideliner";
import { AiFillRobot } from "react-icons/ai";

export default function ErrorPage() {
  return (
    <div className="font-pixelated flex h-max">
      <div className="w-10 md:w-16 h-screen relative flex-none">
        <div className="fixed w-16">
          <Sideline />
        </div>
      </div>
      <div className="h-screen w-full relative flex flex-col justify-between">
        <div>
          <Navbar />
        </div>
        <div className="h-full bg-[#212121] flex flex-col justify-center text-5xl text-[#EAF2EF]">
        <div className="flex justify-center text-[100px]" ><AiFillRobot /></div>
          <div className="flex justify-center m-5">404 Error, Ohh Shoot ...</div>
          <div className="flex justify-center m-5">
            I think you probably have reached a dead-end ...
        </div>
          <div className="flex justify-center m-5">
            As this path doesn't exist, so you should trace back your steps.
          </div>
        </div>
        <div>
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
}
