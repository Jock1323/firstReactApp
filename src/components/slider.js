import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="clients-card">
                <div className="clients-card__img">
                    <img src="./images/client.png" alt="a client"/>
                </div>
                <p className="clients-card__text">
                “Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”
                </p>
                <h4 className="clients-card__title">
                Kirana Dunham
                </h4>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
