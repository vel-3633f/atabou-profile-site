import { Styles } from "../consts/sentense";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="flex">
        <p className="mr-10 font-ENG text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Loading
        </p>
        <div className="flex justify-center space-x-3 my-5">
          <div className="animate-ping  h-2 w-2 bg-blue-600 rounded-full"></div>
          <div className="animate-ping  h-2 w-2 bg-blue-600 rounded-full"></div>
          <div className="animate-ping  h-2 w-2 bg-blue-600 rounded-full"></div>
        </div>
      </div>
      <img
        className="w-full"
        src="/img/materialImg/footerUnder.png"
        alt="footer"
      />
    </div>
  );
};

export default Loading;
