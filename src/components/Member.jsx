import { Styles, membersDetail } from "../consts/sentense";
import Prof from "./Prof";

const Member = () => {
  return (
    <div>
      <div className="flex flex-col w-full mt-[300px] mb-[100px]">
        <p
          className="font-ENG text-xs sm:text-sm md:text-xl lg:text-2xl"
          id="member1"
        >
          member & works・・・
        </p>
        <p className="mt-5 font-JPN text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          こんなもの作ります
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto gap-x-24 gap-y-[300px]">
        {membersDetail.map((member) => (
          <Prof key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Member;
