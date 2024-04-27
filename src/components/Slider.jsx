import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../styles/slider.css";

import { Navigation } from "swiper/modules";

export default function Slider({ images, id }) {
  return (
    <div className="relative h-[427px] w-[570px] mt-[100px]">
      <Swiper
        modules={[Navigation]}
        className="mySwiper"
        navigation={{
          // パラメータを設定
          prevEl: `#button_prev${id}`,
          nextEl: `#button_next${id}`,
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={`/img/thumbnailimg/${image}.png`} alt={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id={`button_prev${id}`} className="swiper-button-prev"></div>
      <div id={`button_next${id}`} className="swiper-button-next"></div>
    </div>
  );
}
