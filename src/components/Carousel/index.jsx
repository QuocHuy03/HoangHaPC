import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Carousel({ images, delay, navigation, pagination }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      pagination={pagination}
      navigation={navigation}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
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
