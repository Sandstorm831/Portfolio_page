import { useEffect, useState } from "react";

function getWindowsDimensions(){
    const {innerHeight: height, innerWidth: width} = window;
    return {height, width};
}

export default function useWindowsDimensions(){
    const [windowDimensions, setWindowDimensions] = useState(getWindowsDimensions());

    useEffect(() => {
        function handleResize(){
            setWindowDimensions(getWindowsDimensions());
        }
        window.addEventListener("resize", handleResize);
        return ()=>removeEventListener("resize", handleResize);
    }, [])
    return windowDimensions;
}