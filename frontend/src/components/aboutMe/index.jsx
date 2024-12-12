import { NavLink } from "react-router-dom";
import "../../output.css";
export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center mb-12">
        <div className="flex justify-center text-white mt-2 text-[150px]">
          {"<about_me>"}
        </div>
        <div className="text-[#E6DB74] text-2xl flex justify-center mx-5">
          I am a Full-Stack Developer by Profession and an Engineer by Passion.
          I like to do Calisthenics, Watch Movies and Read Books.
        </div>
      </div>
      .
      <div className="flex max-xl:flex-col max-xl:mx-8 justify-center xl:mx-80 ">
        <div className="max-xl:w-full xl:w-1/2 p-8 border-t border-r border-t-gray-700 border-r-gray-700 text-5xl text-white underline">
          ...I am a 2024 IIT Roorkee Graduate and a passionate engineer with a
          strong background in front-end and back-end technologies in JavaScript
          environment.
        </div>

        <div className="max-xl:w-full xl:w-1/2 p-8 border-t border-l border-t-gray-700 border-l-gray-700 text-[#E6DB74] text-2xl">
          …So It all starts with my operating system. I have decided to switch
          my OS from windows to Linux during my first semester of college, which
          marks my journey in the software engineering field. During my software
          journey, I have contributed in{" "}
          {<a href="https://www.sagemath.org/"> SageMath</a>} (Open-Source
          Mathematical Software), worked at{" "}
          {<a href="https://www.worldquant.com/">WorldQuant</a>} as a part-time
          research consultant and have also worked at Intellimation.AI as a
          Software Developer. My journey revolved around Machine learning and
          Deep learning stuff in my first couple of years of college, after
          which I switched gears and took competitive programming seriously, I
          have solved more then 1000+ problems from platforms like
          {<a href="https://codeforces.com"> CodeForces</a>},
          {<a href="https://leetcode.com"> LeetCode</a>},
          {<a href="https://www.interviewbit.com/"> IntervieBit</a>},
          {<a href="https://atcoder.jp/"> AtCoder</a>} and
          {<a href="https://cses.fi/"> CSES</a>}. You can find the solution of
          all those problems
          {
            <a href="https://github.com/Sandstorm831/programming_palindrome">
              {" "}
              here
            </a>
          }
          . Leaving competitive programming behind I started full-stack
          developement, in which I took MERN Stack as my stack and have been
          learning my way through it till now.
        </div>
      </div>
      <a href="/resume.pdf"  className="w-full h-24 mt-8 flex justify-center" target="_blank" rel="noopener noreferrer" >
        <div
          className="bg-[#E6DB74] text-[#212121] max-xl:text-3xl xl:text-5xl w-2/12 flex flex-col justify-center rounded-lg hover:bg-[#EAF2EF] duration-500 cursor-pointer">
          <div className="w-full flex justify-center ">View My</div>
          <div className="w-full flex justify-center ">Resume</div>
        </div>
      </a>
    </>
  );
}
