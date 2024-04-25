import about from "/img/about.png";

const About = () => {
  return (
    <div className="flex justify-between w-[1725px] mt-[200px]">
      <div>
        <p className="mt-[60px]" style={Styles.fontSize24} id="about1">
          about・・・
        </p>
        <p className="mt-5" style={Styles.fontSize36}>
          あたりまえ工房とは?
        </p>
        <p className="mt-20" style={Styles.fontSize18}>
          ぴよーーーーーーーーー
        </p>
      </div>
      <div>
        <img
          src={about}
          alt="about"
          className="w-[960px] h-[810px] rounded-[60px]"
        />
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

  fontSize18: {
    fontSize: "18px",
    fontFamily: "Noto Sans Japanese",
  },
};

export default About;
