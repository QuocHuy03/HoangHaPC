import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
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
  slidesPerView,
}) {
  return (
    <Swiper
      loop={true}
      delay={delay}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      pagination={pagination}
      navigation={navigation}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={breakpoints}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
