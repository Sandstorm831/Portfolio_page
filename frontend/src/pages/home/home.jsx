import "../../output.css";
import IntroDiv from "../../components/homeIntro";
import FixedImage from "../../components/fixedImage/fixedImage";
import AboutMe from "../../components/aboutMe";
import PortfolioDiv from "../../components/portfolio";
import ContactDiv from "../../components/contactMe";
export default function Home() {
  return (
    <div className="bg-[#212121] h-full flex flex-col">
      <IntroDiv />
      <FixedImage />
      <div className="flex justify-center text-5xl text-[#9A99FF] mt-44">
        {"{/}"}
      </div>

      <AboutMe />

      <div className="flex justify-center mt-32 text-[#9A99FF] text-5xl">
        {"(!)"}
      </div>

      <PortfolioDiv />

      <div className="flex justify-center mt-32 text-[#9A99FF] text-5xl ">
        {"(*)"}
      </div>

      <ContactDiv />
    </div>
  );
}

function AButton() {
  return (
    <div className="flex justify-center">
      <div className="pointer-cursor bg-[#9A99FF] text-white px-9 py-3 text-xl">
        {"{read_more}"}
      </div>
    </div>
  );
}
