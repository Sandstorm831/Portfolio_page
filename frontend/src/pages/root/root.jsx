import { Outlet, useNavigate } from "react-router-dom";
import "../../output.css";
import Sideline from "../../components/sideliner";
import Navbar from "../../components/navbar";
import BottomNavbar from "../../components/bottombar";
import { useEffect } from "react";

export default function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div className="font-pixelated flex h-max">
      <div className="w-10 md:w-16 h-max relative flex-none">
        <div className="fixed w-full ">
          <Sideline />
        </div>
      </div>

      <div className="relative flex flex-col">
        <Navbar />
        <Outlet />
        <BottomNavbar />
      </div>
    </div>
  );
}
