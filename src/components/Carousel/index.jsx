import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Carousel({ images }) {
  return (
    <Swiper className="mySwiper">
      {images?.map((item) => {
        <SwiperSlide>
          <img src={item.image} alt={item.name} />
        </SwiperSlide>;
      })}
    </Swiper>
  );
}
