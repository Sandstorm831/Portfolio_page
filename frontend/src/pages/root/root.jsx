import { Outlet, useNavigate } from "react-router-dom";
import "../../output.css";
import Sideline from "../../components/sideliner";
import Navbar from "../../components/navbar";
import BottomNavbar from "../../components/bottombar";
import { useEffect } from "react";

export default function Root(){
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/home")
    }, [])
    return <div className="font-pixelated flex">
        <div className="w-16 h-screen relative">
            <div className="fixed w-16"><Sideline /></div> 
        </div>
        <div className="h-screen w-full relative flex flex-col justify-between">
            <div ><Navbar /></div>
            <div className="h-full"><Outlet /></div>
            <div ><BottomNavbar /></div>
        </div>
    </div>
}