import { useCallback, useEffect, useRef, useState } from "react";
import { slider } from "@/utils/banners-home";
import { FirstSection } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Banners() {
  const [currentIndex, updateCurrentIndex] = useState(0);
  const swiperRef = useRef() as any;

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const updateIndex = useCallback(
    () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  return (
    <FirstSection>
      <div className="slider">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper.el;
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {slider.map((sliders) => (
            <SwiperSlide key={sliders.id}>
              <div>
                <img src={sliders.img} alt={sliders.title} />
                <section>
                  {" "}
                  <h2>{sliders.title}</h2>
                  <h4>{sliders.job}</h4>
                </section>
              </div>
            </SwiperSlide>
          ))}

          <div className="button" style={{ cursor: "pointer" }}>
            <button
              className="--prev"
              onClick={() => goPrev()}
              style={
                currentIndex === 0
                  ? { color: "gray", cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              <SlArrowLeft size={50} color={"#fff"} />
            </button>
            <button
              className="--next"
              onClick={() => goNext()}
              style={
                currentIndex === slider.length - 1
                  ? { color: "gray", cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              <SlArrowRight size={50} color={"#fff"} />
            </button>
          </div>
        </Swiper>
      </div>
    </FirstSection>
  );
}
