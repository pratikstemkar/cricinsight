"use client";

import ScoreCard from "./ScoreCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

const ScoreList = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <>
      <Swiper
        spaceBetween={isTabletOrMobile && isPortrait ? 1 : 5}
        slidesPerView={isTabletOrMobile && isPortrait ? 1 : 4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ScoreList;
