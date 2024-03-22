import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import VolcanoImageOne from "/volcano1.jpg";
import VolcanoImageTwo from "/volcano2.jpg";
import VolcanoImageThree from "/volcano3.jpg";
import VolcanoImageFour from "/volcano4.jpg";

export default function VolcanoSwiper() {
  const images = [
    VolcanoImageOne,
    VolcanoImageTwo,
    VolcanoImageThree,
    VolcanoImageFour,
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Volcano ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
