import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Img1 from "../../../assets/SwiperImg/img1.jpeg";
import Img2 from "../../../assets/SwiperImg/img2.jpg";
import Img3 from "../../../assets/SwiperImg/img3.jpg";

const SwiperUI = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      id="swiper"
      loop={true}
    >
      <SwiperSlide id="active">
        <img src={Img1} alt="Slide 1" className="imgSlider" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} alt="Slide 2" className="imgSlider" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img3} alt="Slide 3" className="imgSlider" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperUI;
