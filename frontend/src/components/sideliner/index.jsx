import {useEffect, useRef, useState } from "react"
import "../../output.css"
import useWindowsDimensions from "./windowsDim" 
import updateDivHeightOnResize from "./divHeight"

export default function Sideline(){
    const windowDimensions = useWindowsDimensions()
    const sidelinerDivRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const [stateArray, setStateArray] = useState([]);
    let timeout;
    updateDivHeightOnResize(sidelinerDivRef, setDivHeight);
    useEffect(()=>{
        if(timeout) return clearTimeout(timeout);
        timeout = setTimeout(()=>{
            if(divHeight < windowDimensions.height && divHeight > 0){
                console.log("perform something ");
                let i = Math.ceil((windowDimensions.height)/29) ;
                if(stateArray.length < i){
                    let tempArray = [];
                    let counter=1;
                    for(; i>=0; i--){
                        tempArray.push(<div className="text-[#696969] text-2xl  pl-3 flex font-pixelated">{counter}</div>);
                        counter++;
                    }
                    setStateArray(tempArray);
                    console.log(`length of state array = ${counter}`)
                }
            }
        }, 200)
        return ()=>clearTimeout(timeout);

    }, [windowDimensions.height, divHeight])
    return <div ref={sidelinerDivRef} className="h-max w-full bg-[#212121] flex flex-col pt-2">
        {
            stateArray.map((div) => div)
        }
    </div>
}

// 