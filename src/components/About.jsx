import { aboutSentence } from "../consts/sentense";
import abouBeside from "/img/materialImg/aboutBeside.png";
import aboutUnder from "/img/materialImg/aboutUnder.png";

const About = () => {
  return (
    <section className="w-full ">
      <div className="flex justify-between w-[1625px] mt-[200px] mx-auto">
        <div>
          <p className="mt-[110px]" style={Styles.fontSize24} id="about1">
            about・・・
          </p>
          <p className="mt-5" style={Styles.fontSize36}>
            あたりまえ工房とは?
          </p>
          <div className="mt-[90px]" style={Styles.fontSize24}>
            {aboutSentence.map((value, index) => (
              <p className="leading-[70px] tracking-wider" key={index}>
                {value}
              </p>
            ))}
          </div>
        </div>
        <div>
          <img src={abouBeside} alt="about" />
        </div>
      </div>
      <img src={aboutUnder} alt="abourUnder" />
    </section>
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
