import "../../output.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export default function ContactDiv() {
  return (
    <>
      <div className="flex justify-center text-white mt-2 text-[150px]">
        {"<contact_me>"}
      </div>
      <div className="flex justify-between mx-80 mt-5 mb-20">
        <IconHolder title={"Mail"}>
          <GoMail className="text-[#2FCBEF] text-6xl mx-2" />
        </IconHolder>
        <IconHolder title={"Twitter"}>
          <FaXTwitter className="text-[#2FCBEF] text-6xl mx-2" />
        </IconHolder>
        <IconHolder title={"GitHub"}>
          <FaGithub className="text-[#2FCBEF] text-6xl mx-2" />
        </IconHolder>
        <IconHolder title={"LinkedIn"}>
          <FaLinkedinIn className="text-[#2FCBEF] text-6xl mx-2" />
        </IconHolder>
      </div>
    </>
  );
}

function IconHolder({ children, title }) {
  return (
    <div className="flex ">
      {children}
      <div className="text-white text-xl h-full flex flex-col justify-end">
        {title}
      </div>
    </div>
  );
}
