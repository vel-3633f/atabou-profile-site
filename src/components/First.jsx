import backImg from "/img/materialImg/1/backImg.png";
import bucket from "/img/materialImg/1/bucket.png";
import compass from "/img/materialImg/1/compass.png";
import major from "/img/materialImg/1/major.png";
import nail from "/img/materialImg/1/nail.png";
import palette from "/img/materialImg/1/palette.png";
import scissors from "/img/materialImg/1/scissors.png";
import scoop from "/img/materialImg/1/scoop.png";
import thread from "/img/materialImg/1/thread.png";
import titleLogo from "/img/materialImg/1/titleLogo.png";

const First = () => {
  return (
    <div className="relative w-full ">
      <img src={backImg} alt="backImg" />
      <img src={nail} alt="nail" className="absolute top-0" />
      <img src={thread} alt="thread" className="absolute top-0" />
      <img src={compass} alt="compass" className="absolute top-0" />
      <img src={major} alt="major" className="absolute top-0" />
      <img src={palette} alt="palette" className="absolute top-0" />
      <img src={scissors} alt="scissors" className="absolute top-0" />
      <img src={scoop} alt="scoop" className="absolute top-0" />
      <img src={titleLogo} alt="titleLogo" className="absolute top-0" />
      <img src={bucket} alt="bucket" className="absolute top-0" />
    </div>
  );
};

export default First;
