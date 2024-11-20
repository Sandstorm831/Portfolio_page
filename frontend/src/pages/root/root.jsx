import { Outlet } from "react-router-dom";
import "../../output.css";
import Sideline from "../../components/sideliner";
import Navbar from "../../components/navbar";
import BottomNavbar from "../../components/bottombar";

export default function Root(){
    return <div className="font-pixelated flex">
        <div className="w-16 h-screen relative">
            <div className="fixed w-16"><Sideline /></div> 
        </div>
        <div className="h-screen w-full relative">
            <div ><Navbar /></div>
            <div><Outlet /></div>
            <div ><BottomNavbar /></div>
        </div>
    </div>
}