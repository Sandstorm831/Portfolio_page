import { Outlet } from "react-router-dom";
import "../../output.css";
import Sideline from "../../components/sideliner";
import Navbar from "../../components/navbar";
import BottomNavbar from "../../components/bottombar";

export default function Root() {

  return (
    <div className="font-pixelated flex h-max relative">
      <div className="max-md:w-10 md:w-16 h-max relative flex-none">
        <div className="fixed max-md:w-10 md:w-16 ">
          <Sideline />
        </div>
      </div>

      <div className="relative flex-1">
        <div className="relative w-full flex flex-col justify-between">
          <Navbar />
          <Outlet />
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
}
