import Slider from "./Slider";
import prof from "/img/prof.png";

const Prof = () => {
  return (
    <div>
      <div className="relative ml-[200px] mt-[60px]">
        <img
          src={prof}
          alt="prof"
          className="w-[460px] h-[460px] rounded-full"
        />
        <div className="absolute top-[50px] -left-[50px]">
          <p style={Styles.fontSize21}>色々な切り口から！</p>
          <p className="mt-5" style={Styles.fontSize30}>
            はさみさん
          </p>
        </div>
        <p className="mt-7" style={Styles.fontSize12}>
          ぴよです。
        </p>
        <div className="mt-10">
          <Slider />
        </div>
      </div>
    </div>
  );
};

const Styles = {
  fontSize24: {
    fontSize: "24px",
    fontFamily: "Karla",
  },

  fontSize36: {
    fontSize: "36px",
    fontFamily: "Noto Sans Japanese",
  },

  fontSize21: {
    fontSize: "21px",
    fontFamily: "Noto Sans Japanese",
  },

  fontSize30: {
    fontSize: "30px",
    fontFamily: "Noto Sans Japanese",
  },

  fontSize12: {
    fontSize: "12px",
    fontFamily: "Noto Sans Japanese",
  },
};

export default Prof;
