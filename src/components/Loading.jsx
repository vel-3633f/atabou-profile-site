const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center items-center">
        <p className="mr-10 font-ENG font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-4xl">
          Loading
        </p>
        <div className="flex justify-center space-x-3 my-5">
          <div className="animate-ping  h-2 w-2 bg-gray-600 rounded-full"></div>
          <div className="animate-ping  h-2 w-2 bg-gray-600 rounded-full"></div>
          <div className="animate-ping  h-2 w-2 bg-gray-600 rounded-full"></div>
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
