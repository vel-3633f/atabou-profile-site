import { aboutSentence } from "../consts/sentense";
import about from "/img/about.png";

const About = () => {
  return (
    <div className="flex justify-between w-[1725px] mt-[200px]">
      <div>
        <p className="mt-[110px]" style={Styles.fontSize24} id="about1">
          about・・・
        </p>
        <p className="mt-5" style={Styles.fontSize36}>
          あたりまえ工房とは?
        </p>
        <div className="mt-[90px]" style={Styles.fontSize18}>
          {aboutSentence.map((value, index) => (
            <p className="mb-[25px]" key={index}>
              {value}
            </p>
          ))}
        </div>
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
