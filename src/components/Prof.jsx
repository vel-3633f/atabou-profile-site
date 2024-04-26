import Slider from "./Slider";

const Prof = () => {
  return (
    <div className="flex flex-col items-center w-[600px] ml-24">
      <div className="mt-[60px] h-[480px]">
        <div className="bg-primary rounded-full relative w-[460px] h-[460px]">
          <img
            src="/img/materialImg/2/majorSolo.png"
            alt="prof"
            className="absolute top-0 left-24"
          />
          <div className="absolute top-[50px] -left-[50px]">
            <p style={Styles.fontSize21}>伸びる伸びる、常に成長!</p>
            <p className="mt-5" style={Styles.fontSize30}>
              メジャーくん
            </p>
          </div>
        </div>
      </div>
      <p style={Styles.fontSize20}>
        エンジニアとして一流になりたい。
        <br />
        学習が日課です。
      </p>

      <Slider />
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

  fontSize20: {
    fontSize: "20px",
    fontFamily: "Noto Sans Japanese",
  },
};

export default Prof;
