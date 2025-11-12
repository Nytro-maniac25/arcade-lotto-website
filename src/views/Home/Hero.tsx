import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <img
          src="/images/hero/hero-bg-new.png"
          alt=""
          className="w-full pointer-events-none"
        />
        <img
          src="/images/hero/hero-text-new.png"
          alt=""
          className="absolute top-[10%] sm:top-[12%] left-[49%] -translate-x-1/2 w-[55%] sm:w-[63%] pointer-events-none"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://arcade-lotto.vercel.app/"
          className="absolute top-[60%] sm:top-[65%] left-1/2 -translate-x-1/2 w-[30%] sm:w-[20%] hover:brightness-75 transition-all duration-300"
        >
          <img
            src="/images/buy-lotto.png"
            alt=""
            className="w-full pointer-events-none"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
