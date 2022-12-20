import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { VideoSection } from "./styles";
import { videos } from "@/utils/videos";

export default function Videos() {
  return (
    <VideoSection id="midia">
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {videos.map((put) => (
            <SwiperSlide>
              <h2>{put.title}</h2>
              <div className="column">
                <iframe
                  className="player"
                  src={put.url}
                  title={put.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </VideoSection>
  );
}
