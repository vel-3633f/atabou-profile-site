import AnchorLink from "react-anchor-link-smooth-scroll";
import { Styles } from "../consts/sentense";

const Footer = () => {
  return (
    <div>
      <div className="mt-[400px] mb-[300px]">
        <img
          className="w-[1920px] h-[600px]"
          src="/img/materialImg/footerUnder.png"
          alt="footer"
        />
      </div>
      <div className="w-[1920px] h-[400px] bg-gray-400">
        <div className="flex justify-center w-[1920px] h-[240px]">
          <img
            className="items-center justify-center mt-[60px]"
            src="/img/materialImg/footerLogo.png"
            alt="footer"
          />
        </div>
        <div className="flex justify-center w-[1920px] h-[100px]">
          <AnchorLink
            href="#about1"
            offset="100"
            className="mr-[70px]"
            style={Styles.fontSize23}
          >
            about
          </AnchorLink>
          <AnchorLink href="#member1" offset="80" style={Styles.fontSize23}>
            member & works
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
