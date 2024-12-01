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
        <IconHolder title={"Mail"}  link={"mailto:gargrohan831@gmail.com?subject=Hey, Let's Connect"}>
          <GoMail className="text-[#2FCBEF] text-6xl mx-2"  />
        </IconHolder>
        <IconHolder title={"Twitter"} link={"https://x.com/Rodes30947083"}>
          <FaXTwitter className="text-[#2FCBEF] text-6xl mx-2"  />
        </IconHolder>
        <IconHolder title={"GitHub"} link={"https://github.com/Sandstorm831"}>
          <FaGithub className="text-[#2FCBEF] text-6xl mx-2"  />
        </IconHolder>
        <IconHolder title={"LinkedIn"} link={"https://www.linkedin.com/in/rohan-garg-1b6b40200/"}>
          <FaLinkedinIn className="text-[#2FCBEF] text-6xl mx-2"  />
        </IconHolder>
      </div>
    </>
  );
}

function IconHolder({ children, title, link }) {
  return (
    <a className="flex " href={link}>
      {children}
      <div className="text-white text-xl h-full flex flex-col justify-end">
        {title}
      </div>
    </a>
  );
}
