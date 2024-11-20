import { useEffect } from "react";

export default function updateDivHeightOnResize(reference, setDivHeight){
    useEffect(()=> {

        function handleDivResize(){
            reference ? setDivHeight(reference.current.clientHeight) : null;
        }
        handleDivResize(); // For the first initial render
        addEventListener("resize", handleDivResize);
        return ()=>removeEventListener("resize", handleDivResize);
    }, [reference]) 
}