import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "/img/materialImg/logo.png"

const Header = () => {
  return (
    <div className="flex items-center justify-start w-full p-10">
      <img className="mr-[70px] w-[100px] h-[100px]" src={logo} alt="logo" />
      <AnchorLink
        href="#about1"
        offset="100"
        className="mr-[70px]"
        style={Styles.fontSize23}
      >
        about
      </AnchorLink>
      <AnchorLink
        href="#member1"
        offset="80"
        className="mr-[70px]"
        style={Styles.fontSize23}
      >
        member & works
      </AnchorLink>
    </div>
  );
};

const Styles = {
  fontSize23: {
    fontSize: "23px",
    fontFamily: "Karla",
  },
};

export default Header;
