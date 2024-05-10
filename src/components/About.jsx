import { Styles, aboutSentence } from "../consts/sentense";
import abouBeside from "/img/materialImg/aboutBeside.png";
import aboutUnder from "/img/materialImg/aboutUnder.png";

const About = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col lg:flex-row justify-between w-[80%] mx-auto mt-[30px]">
        <div>
          <p
            className="mt-[110px] font-ENG text-xs sm:text-sm md:text-xl lg:text-2xl"
            id="about1"
          >
            about・・・
          </p>
          <p className="mt-5 font-JPN text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            あたりまえ工房とは?
          </p>
          <div className="mt-[90px] font-JPN text-xs sm:text-sm md:text-xl lg:text-2xl text-center lg:text-left">
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

export default About;
