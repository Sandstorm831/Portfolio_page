import "../../output.css"
export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center mb-12">
        <div className="flex justify-center text-white mt-2 text-[150px]">
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
    </>
  );
}
