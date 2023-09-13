import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Carousel({
  delay,
  navigation,
  pagination,
  children,
  spaceBetween,
  breakpoints,
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      centeredSlides={true}
      breakpoints={breakpoints}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      pagination={pagination}
      navigation={navigation}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
