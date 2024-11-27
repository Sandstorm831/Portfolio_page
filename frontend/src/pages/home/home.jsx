import "../../output.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMail } from "react-icons/go";
export default function Home() {
  return (
    <div className="bg-[#212121] h-full flex flex-col">
      <div className="text-white flex justify-center mt-40 text-2xl font-bold">
        // HI, I'M ROHAN, A ...
      </div>
      <div className="text-white flex justify-center text-[150px] font-bold">
        {'{" FULL-STACK DEVELOPER "}'}
      </div>
      <div className="h-max">
        <div
          className="bg-fixed flex flex-col overflow-scroll"
          style={{
            backgroundImage: `url(src/pages/home/geometrhy.png)`,
            backgroundRepeat: `no-repeat`,
            maxWidth: `100%`,
            height: `450px`,
            margin: `5px 50px 5px 2px`,
            objectFit: `scale-down`,
          }}
        ></div>
      </div>
      <div>
        <div className="flex justify-center text-5xl text-[#9A99FF] mt-44">
          {"{/}"}
        </div>
      </div>
      <div className="flex flex-col justify-center mb-12">
        <div className="flex justify-center text-5xl text-white mt-2 text-[150px]">
          {"<about_me>"}
        </div>
        <div className="text-[#E6DB74] text-2xl flex justify-center">
          I am a Full-Stack Developer by Profession and an Engineer by Passion.
          I like to do
        </div>
        <div className="text-[#E6DB74] text-2xl flex justify-center">
          Calisthenics, Watch Movies and Read Books.
        </div>
      </div>
      <div className="flex justify-center mx-80">
        <div className="flex flex-col w-1/2 p-8 border-t border-r border-t-gray-700 border-r-gray-700 text-5xl text-white underline">
          ...I have over 12 years of experience in web development, with a
          strong background in both front-end and back-end technologies;
        </div>
        <div className="flex flex-col w-1/2 p-8 border-t border-l border-t-gray-700 border-l-gray-700 text-[#E6DB74] text-2xl">
          …curabitur sit amet luctus tortor, sit amet ultrices ante. Maecenas
          convallis dui arcu, et tempor felis consectetur vel. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Sed id velit ex. Cras ultricies nisi eget sem mollis, a maximus
          felis laoreet. Nam eget ultricies urna, vel ullamcorper arcu. Quisque
          feugiat rhoncus arcu, a tincidunt arcu lacinia ac. Maecenas molestie
          vel ante in finibus. Sed sit amet ligula eros. In hac habitasse platea
          dictumst;
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pointer-cursor bg-[#9A99FF] text-white px-9 py-3 text-xl">
          {"{read_more}"}
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <div className="text-[#9A99FF] text-4xl ">{"(!)"}</div>
      </div>
      <div className="flex justify-center">
        <div className="text-5xl text-white mt-2 text-[150px]">
          {"<portfolio>"}
        </div>
      </div>

      <div className="flex justify-center mx-2 h-max">
        <div className="flex flex-col justify-center w-1/2">
          <div className="flex bg-white">
            <div className="bg-[url('src/pages/home/todo_fullstack1.png')] w-full h-[500px] bg-fixed bg-no-repeat bg-cover bg-top" >A To-Do App</div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <div className="flex justify-center">
            <img
              src="src/pages/home/recipe_app2.png"
              width={300}
              height={500}
              alt="An image"
            />
            <div>A Recipee App</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <div className="text-[#9A99FF] text-4xl ">{"(*)"}</div>
      </div>
      <div className="flex justify-center">
        <div className="text-5xl text-white mt-2 text-[150px]">
          {"<contact_me>"}
        </div>
      </div>
      <div className="flex justify-between mx-80 mt-5 mb-20">
        <div className="flex flex-col justify-center relative">
          <GoMail className="text-[#2FCBEF] text-5xl mx-5 mt-8 static" />
          <div className="absolute bottom-3 start-7 text-white text-xl">
            {" "}
            Mail{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center relative">
          <FaXTwitter className="text-[#2FCBEF] text-5xl mx-5 mt-8 static" />
          <div className="absolute bottom-3 start-4 text-white text-xl">
            Twitter
          </div>
        </div>
        <div className="flex flex-col justify-center relative">
          <FaGithub className="text-[#2FCBEF] text-5xl mx-5 mt-8 static" />
          <div className="absolute bottom-3 start-5 text-white text-xl">
            GitHub
          </div>
        </div>
        <div className="flex flex-col justify-center relative">
          <FaLinkedinIn className="text-[#2FCBEF] text-5xl mx-5 mt-8 static" />
          <div className="absolute bottom-3 start-3 text-white text-xl">
            LinkedIn
          </div>
        </div>
      </div>
    </div>
  );
}
