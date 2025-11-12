import React from "react";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "react-slick";

const roadmap = [
  {
    date: "15th April",
    desc: "Community Building Begins!",
    img: "/images/roadmap/rm-1.png",
    year: "2023 Road-Map",
  },
  {
    date: "May Day",
    desc: "Website & DApp go LIVE with 3 Lotto Pools!",
    img: "/images/roadmap/rm-2.png",
    year: "2023 Road-Map",
  },
  {
    date: "4th July",
    desc: "USDT $2,500 Jackpot Pool begins!",
    img: "/images/roadmap/rm-3.png",
    year: "2023 Road-Map",
  },
  {
    date: "15th August",
    desc: "USDT $5,000 Jackpot Pool now open!",
    img: "/images/roadmap/rm-4.png",
    year: "2023 Road-Map",
  },
  {
    date: "1st October",
    desc: "USDT $10,000 Jackpot Pool launched!",
    img: "/images/roadmap/rm-5.png",
    year: "2023 Road-Map",
  },
  {
    date: "10th November",
    desc: "USDT $50,000 Jackpot Pool takes off!",
    img: "/images/roadmap/rm-6.png",
    year: "2023 Road-Map",
  },
  {
    date: "25th December",
    desc: "USDT $100,000 Mega Jackpot Pool goes live!",
    img: "/images/roadmap/rm-7.png",
    year: "2023 Road-Map",
  },
  {
    date: "31st December",
    desc: "T.B.A.",
    img: "/images/roadmap/rm-8.png",
    year: "2024 Road-Map",
  },
];

const Roadmap = () => {
  return (
    <div className="absolute top-[58%] w-[55%]">
      <img
        src="/images/roadmap-screen.png"
        alt=""
        className="w-full pointer-events-none"
      />
      <button className="swiper-arrow-left absolute top-[50%] left-[13%] w-[6%]">
        <svg viewBox="0 0 67 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-1.94516e-06 39.5L66.75 0.961865L66.75 78.0381L-1.94516e-06 39.5Z"
            fill="#055B38"
          />
        </svg>
      </button>
      <div className="absolute w-[45%] h-[53%] top-[27%] left-[19.5%]">
        <Swiper
          loop
          spaceBetween={400}
          // effect={"fade"}
          slidesPerView={1}
          modules={[Navigation]}
          className="relative h-full"
          navigation={{
            nextEl: ".swiper-arrow-right",
            prevEl: ".swiper-arrow-left",
          }}
        >
          {roadmap.map((map, index) => (
            <SwiperSlide key={index + map.date} className="relative">
              <img
                className="w-full pointer-events-none"
                src={map.img}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="swiper-arrow-right absolute top-[50%] left-[65%] w-[6%]">
        <svg viewBox="0 0 67 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M67 39.5L0.249996 78.0381L0.25 0.961865L67 39.5Z"
            fill="#055B38"
          />
        </svg>
      </button>
    </div>
  );
};

export default Roadmap;
