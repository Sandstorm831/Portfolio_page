import "../../output.css"
export default function Navbar(){
    return <div className="w-full bg-[#212121] flex justify-between pt-6">
        <div className="flex">
            <div className="text-white text-2xl mr-2">//</div>
            <div className="flex flex-col justify-center ">
                <div className="text-white text-2xl cursor-pointer" >Rohan</div>
                <div className="text-[#9A99FF] text-2xl pb-2 cursor-pointer">web_dev</div>
            </div>
        </div>
        <div className="flex justify-center text-white">
            <div className="flex justify-center mx-16">
                <div className="px-5 text-[#E6DB74] text-2xl pb-5 cursor-pointer">_home</div>
                <div className="px-5 text-[#E6DB74] text-2xl pb-5 cursor-pointer">_portfolio</div>
                <div className="px-5 text-[#E6DB74] text-2xl pb-5 cursor-pointer">_about</div>
                <div className="px-5 text-[#E6DB74] text-2xl pb-5 cursor-pointer">_services</div>
                <div className="px-5 text-[#E6DB74] text-2xl pb-5 cursor-pointer">_resume</div>
                <div className="px-5 text-[#E6DB74] text-2xl pb-5 cursor-pointer">_contact</div>
            </div>
        </div>
    </div>
}