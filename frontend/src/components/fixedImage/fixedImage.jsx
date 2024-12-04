import "../../output.css"
export default function FixedImage() {
  return (
    <div className="h-max">
      <div className="bg-fixed flex flex-col overflow-scroll bg-[url('/static/images/geometrhy.png')] bg-no-repeat max-w-full h-[450px] my-[5px] ml-[2px] bg-fixed object-scale-down"></div>
    </div>
  );
}
