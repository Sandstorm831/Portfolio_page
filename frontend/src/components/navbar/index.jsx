import "../../output.css"
export default function Navbar(){
    return <div className="w-full bg-[#212121] flex justify-between">
        <div className="flex flex-col justify-center">
            <div className="text-white">// Rohan</div>
            <div className="text-[#7D7CC7]">web_dev</div>
        </div>
        <div className="flex justify-center text-white">
            <div>_home</div>
            <div>_portfolio</div>
            <div>_about</div>
            <div>_services</div>
            <div>_resume</div>
            <div>_contact</div>
        </div>
    </div>
}