import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "/img/materialImg/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-start h-[50px] sm:h-[100px] lg:h-[150px] xl:h-[100px] 2xl:h-[200px] w-full p-10">
      <img
        className="mr-[10px] h-auto lg:mr-[50px] xl:mr-[70px] w-[50px]  sm:w-[80px] lg:w-[100px] xl:w-[80px] 2xl:w-[140px]"
        src={logo}
        alt="logo"
      />
      <AnchorLink
        href="#about1"
        offset="100"
        className="mr-[20px] lg:mr-[50px] xl:mr-[70px] font-ENG text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
      >
        about
      </AnchorLink>
      <AnchorLink
        href="#member1"
        offset="80"
        className="xl:mr-[70px] font-ENG text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
      >
        member & works
      </AnchorLink>
    </div>
  );
};

export default Header;
