import footer from "/footer.png";

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
          <p className="mr-20" style={Styles.fontSize23}>
            about
          </p>
          <p style={Styles.fontSize23}>member & works</p>
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
