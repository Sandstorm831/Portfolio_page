import ContactDiv from "../../components/contactMe";
import "../../output.css";

export default function Projects() {
  const github_links = [
    "https://github.com/Sandstorm831/chessdom",
    "https://github.com/Sandstorm831/stockfish_logger",
    // "https://github.com/Sandstorm831/transactions_app",
    "https://github.com/Sandstorm831/learning-backend/tree/main/toDoApp",
    "https://github.com/Sandstorm831/Learning-react/tree/main/recipie-app",
    "https://github.com/Sandstorm831/Learning-react/tree/main/weather-app",
    "https://github.com/Sandstorm831/Learning-react/tree/main/learning",
    "https://github.com/Sandstorm831/Learning-react/tree/main/shopping_cart",
    "https://github.com/Sandstorm831/Learning-react/tree/main/coalition_project",
    "https://github.com/Sandstorm831/Learning-react/tree/main/businessCards",
    "https://github.com/Sandstorm831/Learning-react/tree/main/Tic_Tac_Toe",
  ];
  const live_demo_links = [
    "https://chessdom.vercel.app/",
    "https://stockfish-terminal.vercel.app/",
    // "https://transactions-app-aleph.vercel.app/",
    "https://portfoliodeployements.vercel.app/todoapp",
    "https://portfoliodeployements.vercel.app/recipeapp",
    "https://portfoliodeployements.vercel.app/weatherapp",
    "https://portfoliodeployements.vercel.app/learningreact",
    "https://portfoliodeployements.vercel.app/shoppingcart",
    "https://portfoliodeployements.vercel.app/coalitionproject",
    "https://portfoliodeployements.vercel.app/businesscardapp",
    "https://portfoliodeployements.vercel.app/tictactoe",
  ];
  const sources = [
    "/static/images/chessdom.png",
    "/static/images/stockfishTerminal.png",
    // "/static/images/transactionsApp.png",
    "/static/images/todo_fullstack1.png",
    "/static/images/recipe_app2.png",
    "/static/images/weatherApp2.png",
    "static/images/learningReact.png",
    "static/images/shoppingCart.png",
    "/static/images/coalitionProject.png",
    "/static/images/skullCard.png",
    "/static/images/tictactoe.png",
  ];
  const titles = [
    "Chessdom chess applicatoin",
    "Stockfish terminal",
    // "Transactions App",
    "To-Do Applicatoin",
    "Recipe Web Applicatoin",
    "Weather Web Application",
    "Custom React Components",
    "Shopping Web Application",
    "Coalition CSS Project",
    "Business Card Application",
    "Tic-Tac-Toe Game",
  ];
  const descriptions = [
    "Chessdom is an web-based chess application, whose name comes from combining Chess and Wisdom. Implemented two modes of gameplay in it, computer based gameplay where stockfish acts as your opponent and another is live gameplay where you can play chess with other fellow humans. Also build a game-archive with the name of hall of games, where each game which came to an valid end (resignation, check-mate or draw) in the live gameplay is stored.",
    "Stockfish terminal is an online terminal for stockfish engine, any user can open and run any command on the terminal, thus can get the bestmove or evaluation metric for any given FEN configuration.",
    // "This is a basic transactions app, to send and receive money. Any user can sign up in it, and the person will be accounted a random balance between ₹ 1-10000. On the dashboard, you can see all the users and find any user, to whom you want to send the money. In the sending money part, core DB transactions are used which will rollback if any of the DB query fails.",
    "This is a simple To-Do app where users can create tasks, mark them as done, and delete them.",
    "Recipe App is a web application that offers a wide variety of recipes for different dishes. Simply enter an ingredient, and the app will display recipes that include it. You can then view detailed recipe instructions, save your favorites for later, and access all your saved recipes on the Favorites page.",
    "Weather App is a user-friendly web application that provides real-time weather information for any city worldwide. To enhance performance, I implemented a debouncer and an API aborter to handle requests efficiently. Additionally, I included a sleek loading animation to improve the overall user experience.",
    "These projects are my initial React learning journey, featuring around 18 custom components inspired by common website elements like scroll-indicators, accordions, image-sliders and more. Each project is minimally styled but fully functional with all necessary features and interactivity.",
    "This a minimal shopping cart, here you can find the products, include them in your cart. All the products you have included in cart will be shown in the Cart page and the total price will also be displayed there. This project uses Recoil library for state management instead of Context API.",
    "This is a CSS-intensive project that I completed as an assignment for a company called Coalition. The task was to precisely replicate a given webpage, and this is the final result. I used ChartJS for the graph and TailwindCSS for styling. Functionality was not included, as it was not required for the assignment.",
    "This is my first project in the direction of learning serious CSS and styling skills. In this project, each card have an embedded animation. On hovering on any of card, the title of card moves up, and a description about the card holder and it's social media handles appears in smooth transition, and disappears smoothly on hovering out.",
    "Made a simple tic-tac-toe game while learning React, this was my first project in React and made it by following the instructions from react.dev website's learning section. I made two versions, first one was my original, but was very verbose, second was of the website's which was short and easy to understand.",
  ];
  let counter = 0;
  const divArray = [];
  for (let i = 0; i < titles.length; i++) {
    if (counter % 2 === 0) {
      divArray.push(
        <LeftDiv
          Title={titles[i]}
          Source={sources[i]}
          Description={descriptions[i]}
          github_link={github_links[i]}
          live_demo_link={live_demo_links[i]}
        />
      );
    } else {
      divArray.push(
        <RightDiv
          Title={titles[i]}
          Source={sources[i]}
          Description={descriptions[i]}
          github_link={github_links[i]}
          live_demo_link={live_demo_links[i]}
        />
      );
    }
    counter += 1;
  }
  return (
    <div className="flex flex-col bg-[#212121]">
      <div className="text-[150px] text-white flex justify-center">
        {`< Projects >`}
      </div>
      <div className="flex justify-center text-2xl text-[#E6DB74]">
        <div>
          {" "}
          {/* Extra div for preventing flex to eat up space between the word "github" and "my" */}
          I have listed all of my web-development projects here, If you want to
          look at my other projects, you can view then at my
          <a
            className="text-[#2FCBEF]"
            href="https://github.com/Sandstorm831"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"  "}
            github
          </a>
        </div>
      </div>
      {divArray && divArray.length ? divArray.map((elem) => elem) : null}
      <ContactDiv />
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
