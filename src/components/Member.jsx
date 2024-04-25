import Prof from "./Prof";

const Member = () => {
  return (
    <div>
      <div className="w-[1725px] mt-[300px]">
        <p style={Styles.fontSize24} id="member1">
          member & works・・・
        </p>
        <p className="mt-5" style={Styles.fontSize36}>
          こんなもの作ります
        </p>
      </div>
      <Prof />
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

export default Member;
