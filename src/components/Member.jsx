import { Styles, membersDetail } from "../consts/sentense";
import Prof from "./Prof";

const Member = () => {
  return (
    <div>
      <div className="flex flex-col w-full mt-[300px] mb-[100px]">
        <p className="font-JPN text-2xl" id="member1">
          member & works・・・
        </p>
        <p className="mt-5" style={Styles.fontSize36}>
          こんなもの作ります
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto gap-y-[300px]">
        {membersDetail.map((member) => (
          <Prof key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Member;
