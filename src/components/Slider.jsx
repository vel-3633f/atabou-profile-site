import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/slider.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="h-[427px] w-[570px] mt-[100px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="../../public/img/thumbnailimg/fujii1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/img/thumbnailimg/fujii2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/img/thumbnailimg/fujii3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
