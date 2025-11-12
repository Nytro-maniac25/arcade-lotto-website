import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const Comic = () => {
  return (
    <div className="p-5 py-20 sm:py-40 overflow-hidden -mt-[6%] z-10 relative text-white font-poppins font-medium ">
      <div className="comic-section">
        <div className="relative w-full mx-auto max-w-[280px] mobile-m:max-w-[335px] mobile-l:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <Row1 />
          <Row2 />
          <Row3 />
        </div>
      </div>
    </div>
  );
};

export default Comic;
