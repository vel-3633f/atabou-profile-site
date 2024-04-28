import { Styles } from "../consts/sentense";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="flex">
        <p className="mr-10" style={Styles.fontSize36}>準備中</p>
        <div className="flex justify-center space-x-3 my-5">
          <div className="animate-ping  h-2 w-2 bg-blue-600 rounded-full"></div>
          <div className="animate-ping  h-2 w-2 bg-blue-600 rounded-full"></div>
          <div className="animate-ping  h-2 w-2 bg-blue-600 rounded-full"></div>
        </div>
      </div>
      <img
        className="w-[1920px] h-[600px]"
        src="/img/materialImg/footerUnder.png"
        alt="footer"
      />
    </div>
  );
};



export default Loading;
