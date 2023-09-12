import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function SliderImages({ loop, images, navigation }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isActive, setIsActive] = useState(0);
  const handleImageClick = (index) => {
    setIsActive(index);
  };
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-size": "20px",
          "--swiper-pagination-color": "#fff",
        }}
        loop={loop}
        spaceBetween={10}
        navigation={navigation}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((item) => (
          <SwiperSlide>
            <img src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pd-gallery-group">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={loop}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images?.map((item, index) => (
            <SwiperSlide onClick={() => handleImageClick(index)}>
              <a
                className={
                  isActive === index ? "huydevimage active" : "huydevimage"
                }
              >
                <img src={item.image} alt={item.name} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
