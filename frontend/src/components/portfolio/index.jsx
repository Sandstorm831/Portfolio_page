import "../../output.css";
export default function PortfolioDiv() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="flex justify-center text-white mt-2 text-[150px]">
          {"<portfolio>"}
        </div>
      </div>
      <div className="flex flex-col h-max mx-2">
        <LeftDiv
          Source={"/static/images/todo_fullstack1.png"}
          Title={"To-Do Applicatoin"}
          Description={
            "This is a simple To-Do app where users can create tasks, mark them as done, and delete them."
          }
        />

        <RightDiv
          Source={"/static/images/recipe_app2.png"}
          Title={"Recipe Web Applicatoin"}
          Description={
            "Recipe App is a web application that offers a wide variety of recipes for different dishes. Simply enter an ingredient, and the app will display recipes that include it. You can then view detailed recipe instructions, save your favorites for later, and access all your saved recipes on the Favorites page."
          }
        />

        <LeftDiv
          Source={"/static/images/weatherApp2.png"}
          Title={"Weather Web Application"}
          Description={"Weather App is a user-friendly web application that provides real-time weather information for any city worldwide. To enhance performance, I implemented a debouncer and an API aborter to handle requests efficiently. Additionally, I included a sleek loading animation to improve the overall user experience."}
        />
      </div>
    </div>
  );
}

function LeftDiv({ Source, Title, Description }) {
  return (
    <div className="flex justify-start w-full mt-8">
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
          <div className="text-2xl max-xl:flex max-xl:justify-center">{Description}</div>
        </div>
      </div>
    </div>
  );
}

function RightDiv({ Source, Title, Description }) {
  return (
    <div className="flex justify-end w-full mt-8">
      <div className="flex max-xl:flex-col max-xl:w-full xl:w-11/12 justify-end w-11/12 bg-[#E6DB74] border-[#E6DB74] border-l-8 border-l-[#E6DB74] rounded-lg ">
        <div className="flex flex-col xl:w-1/5 max-xl:my-8 xl:my-1 max-xl:mx-24 xl:mx-5">
          <div className="text-5xl mb-5 text-[#26547c] max-xl:flex max-xl:justify-center ">{`{ ${Title} }`}</div>
          <div className="text-2xl max-xl:flex max-xl:justify-center">{Description}</div>
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
