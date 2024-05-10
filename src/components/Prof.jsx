import { Styles } from "../consts/sentense";
import Slider from "./Slider";

const Prof = ({ member }) => {
  const memberImageStyle = member.imageName === "major" ? "top-0 left-24" : "";
  return (
    <div className="flex flex-col items-center w-[600px] ml-24">
      <div className="mt-[60px] mb-[30px] h-[480px]">
        <div className="bg-secondary rounded-full relative w-[460px] h-[460px]">
          <img
            src={`/img/materialImg/2/${member.imageName}Solo.png`}
            alt="prof"
            className={`absolute ${memberImageStyle}`}
          />
          <div>
            <p style={Styles.fontSize21}>{member.catchCopy}</p>
            <p className="mt-5" style={Styles.fontSize30}>
              {member.name}
            </p>
          </div>
        </div>
      </div>
      <p style={Styles.fontSize20} className="text-left">
        {member.text.map((val, i) => (
          <span key={i}>
            {val}
            <br />
          </span>
        ))}
      </p>
      <Slider images={member.images} id={member.id} />
    </div>
  );
};

export default Prof;
