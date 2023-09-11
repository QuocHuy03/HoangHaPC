import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Carousel({ images }) {
  return (
    <Swiper className="mySwiper">
      {images?.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            data-src={item.image}
            alt={item.name}
            width={291}
            height={192}
            className="lazy w-100 h-auto loaded"
            src={item.image}
            data-was-processed="true"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
