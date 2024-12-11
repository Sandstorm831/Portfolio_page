import "../../output.css";
import IntroDiv from "../../components/homeIntro";
import FixedImage from "../../components/fixedImage/fixedImage";
import AboutMe from "../../components/aboutMe";
import WorkDiv from "../../components/work";
import ContactDiv from "../../components/contactMe";
import BlogSection from "../../components/blogSection";
export default function Home() {
  return (
    <div className="bg-[#212121] flex flex-col">
      <IntroDiv />
      <FixedImage />
      <div className="flex justify-center text-5xl text-[#9A99FF] mt-44">
        {"{/}"}
      </div>

      <AboutMe />

      <div className="flex justify-center mt-32 text-[#9A99FF] text-5xl">
        {"(!)"}
      </div>

      <WorkDiv />

      <div className="flex justify-center mt-32 text-[#9A99FF] text-5xl ">
        {"(*)"}
      </div>

      <BlogSection />

      <div className="flex justify-center mt-32 text-[#9A99FF] text-5xl ">
        {"(#)"}
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
