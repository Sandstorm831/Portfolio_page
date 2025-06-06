import { useNavigate } from "react-router-dom";
import "../../output.css";
export default function WorkDiv() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="flex justify-center text-white mt-2 text-[150px]">
          {"<work_done>"}
        </div>
      </div>
      <div className="flex flex-col h-max mx-2">
        <LeftDiv
          Source={"/static/images/chessdom.png"}
          Title={"Chessdom chess applicatoin"}
          Description={
            "Chessdom is an web-based chess application, whose name comes from combining Chess and Wisdom. Implemented two modes of gameplay in it, computer based gameplay where stockfish acts as your opponent and another is live gameplay where you can play chess with other fellow humans. Also build a game-archive with the name of hall of games, where each game which came to an valid end (resignation, check-mate or draw) in the live gameplay is stored."
          }
          github_link={"https://github.com/Sandstorm831/chessdom"}
          live_demo_link={"https://chessdom.vercel.app"}
        />

        <RightDiv
          Source={"/static/images/stockfishTerminal.png"}
          Title={"Stockfish terminal"}
          Description={
            "Stockfish terminal is an online terminal for stockfish engine, any user can open and run any command on the terminal, thus can get the bestmove or evaluation metric for any given FEN configuration."
          }
          github_link={"https://github.com/Sandstorm831/stockfish_logger"}
          live_demo_link={"https://stockfish-terminal.vercel.app/"}
        />

        <LeftDiv
          Source={"/static/images/recipe_app2.png"}
          Title={"Recipe Web Applicatoin"}
          Description={
            "Recipe App is a web application that offers a wide variety of recipes for different dishes. Simply enter an ingredient, and the app will display recipes that include it. You can then view detailed recipe instructions, save your favorites for later, and access all your saved recipes on the Favorites page."
          }
          github_link={
            "https://github.com/Sandstorm831/Learning-react/tree/main/recipie-app"
          }
          live_demo_link={"https://portfoliodeployements.vercel.app/recipeapp"}
        />

        <div className="w-full h-24 mt-8 flex justify-center">
          <div
            className="bg-white text-[#212121] max-xl:text-3xl xl:text-5xl w-2/12 flex flex-col justify-center rounded-lg hover:bg-[#E6DB74] duration-500 cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            <div className="w-full flex justify-center ">View All</div>
            <div className="w-full flex justify-center ">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftDiv({ Source, Title, Description, github_link, live_demo_link }) {
  return (
    <div className="flex justify-start w-full mt-8 font-pixelated">
      <div className="flex max-xl:flex-col max-xl:w-full xl:w-11/12 justify-start border-r-8 border-t-[#EAF2EF] border-r-[#EAF2EF] rounded-lg bg-[#EAF2EF] text-[#212121]">
        <div className="max-xl:w-full xl:w-4/5">
          <img
            src={Source}
            alt="LeftImage"
            className="rounded-lg shadow-lg shadow-slate-700 w-full"
          />
        </div>
        <div className="flex flex-col xl:w-1/5 max-xl:my-8 xl:my-1 max-xl:mx-24 xl:mx-5">
          <div className="text-5xl mb-5 text-[#104f55] max-xl:flex max-xl:justify-center ">{`{ ${Title} }`}</div>
          <div className="text-2xl max-xl:flex max-xl:justify-center">
            {Description}
          </div>
          <div className="flex flex-col justify-end w-full h-full mt-5">
            <div className="w-full h-max flex justify-center">
              <a
                href={github_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">GitHub Repo</div>
              </a>
              <a
                href={live_demo_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightDiv({ Source, Title, Description, github_link, live_demo_link }) {
  return (
    <div className="flex justify-end w-full mt-8 font-pixelated">
      <div className="flex max-xl:flex-col max-xl:w-full xl:w-11/12 justify-end w-11/12 bg-[#E6DB74] border-[#E6DB74] border-l-8 border-l-[#E6DB74] rounded-lg ">
        <div className="flex flex-col xl:w-1/5 max-xl:my-8 xl:my-1 max-xl:mx-24 xl:mx-5">
          <div className="text-5xl mb-5 text-[#26547c] max-xl:flex max-xl:justify-center ">{`{ ${Title} }`}</div>
          <div className="text-2xl max-xl:flex max-xl:justify-center">
            {Description}
          </div>
          <div className="flex flex-col justify-end w-full h-full mt-5">
            <div className="w-full h-max flex justify-center">
              <a
                href={github_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">GitHub Repo</div>
              </a>
              <a
                href={live_demo_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
        <div className="max-xl:w-full xl:w-4/5">
          <img
            src={Source}
            alt="RightImage"
            className="rounded-lg shadow-lg shadow-slate-700 w-full"
          />
        </div>
      </div>
    </div>
  );
}
