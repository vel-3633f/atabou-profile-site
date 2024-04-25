import footer from "/img/footer.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div>
      <div className="mt-[400px] mb-[300px]">
        <img className="w-[1920px] h-[600px]" src={footer} alt="footer" />
      </div>
      <div className="w-[1920px] h-[400px] bg-primary">
        <div className="flex justify-center w-[1920px] h-[240px]">
          <img
            className="items-center justify-center w-[450px] h-[120px] mt-[60px]"
            src={footer}
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
          <AnchorLink
            href="#member1"
            offset="80"
            className="mr-[70px]"
            style={Styles.fontSize23}
          >
            member & works
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

const Styles = {
  fontSize23: {
    fontSize: "23px",
    fontFamily: "Karla",
  },
};

export default Footer;
