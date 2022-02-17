import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const characters = [
  {
    url: require("../../assests/char-1.png"),
  },
  {
    url: require("../../assests/char-2.png"),
  },
  {
    url: require("../../assests/char-3.png"),
  },
  {
    url: require("../../assests/char-1.png"),
  },
];

const Collection = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="section_margin">
        <div className="row d-flex align-items-center justify  ">
          <div className="col-xl-10 col-sm-12">
            <div className="heading_3">Our most unique collection</div>
            <div className="text_2">
              Discover our special legendary collection, they are the rarest and
              unique.
            </div>
          </div>
          <div className="col-xl-2 col-sm-3 d-flex justify-content-around">
            <span className="slider_arrow d-flex align-items-center justify-content-center">
              <BsArrowLeft size={25} />
            </span>
            <span
              className="slider_arrow d-flex align-items-center justify-content-center"
              onClick={() => swiper.slideNext()}
            >
              <BsArrowRight size={25} />
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {characters.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img className="img-fluid" src={item.url} alt="index" />
                </SwiperSlide>
              );
            })}
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Collection;
