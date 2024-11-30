import "../../output.css"
export default function PortfolioDiv() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center text-white mt-2 text-[150px]">
          {"<portfolio>"}
        </div>
      </div>
      <div className="flex flex-col h-max mx-2">
        <LeftDiv
          Source={"src/assets/todo_fullstack1.png"}
          Title={"To-Do Applicatoin"}
          Description={"Description of the ToDo Web Application"}
        />

        <RightDiv
          Source={"src/assets/recipe_app2.png"}
          Title={"Recipe Web Applicatoin"}
          Description={"Description of the Recipe-App Web Application"}
        />

        <LeftDiv
          Source={"src/assets/weatherApp2.png"}
          Title={"Weather App"}
          Description={"Description of the Weather Web Application"}
        />
      </div>
    </>
  );
}

function LeftDiv({ Source, Title, Description }) {
  return (
    <div className="flex justify-start w-full mt-8">
      <div className="flex justify-start border-r-8 border-t-[#EAF2EF] border-r-[#EAF2EF] rounded-lg bg-[#EAF2EF] text-[#212121]">
        <img
          src={Source}
          alt="WeatherTellerImage"
          width={1400}
          className="rounded-lg shadow-lg shadow-slate-700"
        />
        <div className="flex flex-col mx-5 my-1">
          <div>{`{ ${Title} }`}</div>
          <div>{Description}</div>
        </div>
      </div>
    </div>
  );
}

function RightDiv({ Source, Title, Description }) {
  return (
    <div className="flex justify-end w-full mt-8">
      <div className="flex justify-end bg-[#E6DB74] border-[#E6DB74] border-l-8 border-l-[#E6DB74] rounded-lg w-max">
        <div className="flex flex-col mx-5 my-1">
          <div>{`{ ${Title} }`}</div>
          <div>{Description}</div>
        </div>
        <img
          src={Source}
          alt="Recipe App Image"
          width={1400}
          className="rounded-lg shadow-lg shadow-slate-700"
        />
      </div>
    </div>
  );
}
