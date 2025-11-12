import React from "react";

const Row2 = () => {
  return (
    <div className="flex items-center gap-4 mb-3 md:gap-6 md:mb-7 lg:mb-10">
      <Left />
      <Right />
    </div>
  );
};

const Left = () => {
  return (
    <div className="w-[55%] ">
      <div className="w-[45%] -mb-[15%]">
        <img src="images/comic/play-now.png" alt="" className="w-full" />
      </div>
      <div className="bg-[#DD4AAC] font-black italic text-[9px] mobile-m:text-[11px] mobile-l:text-[14px] sm:text-base md:text-2xl lg:text-3xl pt-[18%] pb-[32%] px-2 sm:px-4 md:px-5">
        <p>
          <span className="text-[#3E1BAC]">YOU FILL</span> UP POOLS
        </p>

        <p>
          <span className="text-[#3E1BAC]">YOU TRIGGER</span> THEM
        </p>

        <p>
          <span className="text-[#3E1BAC]">YOU WIN</span> HIGH REWARDS!
        </p>
      </div>
      <div className="w-[85%] -mt-[25%]">
        <img src="images/comic/cassette.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="bg-black w-[45%] py-2 md:py-4">
      <div className="px-3 mb-2 sm:px-5 md:px-6">
        <img src="images/comic/jj.png" alt="" className="w-full" />
      </div>
      <div className="-mx-2 px-3 sm:px-5 md:px-6 xl:px-8 py-1 bg-[#FB681E] mb-2 md:mb-4 md:py-3 lg:py-4">
        <p className="text-[9px] mobile-m:text-[11px] mobile-l:text-[14px] font-black sm:text-base md:text-2xl lg:text-3xl lg:text-[32px]">
          FULLY AUTONOMOUS LOTTERY POOLS
        </p>
      </div>
      <p className="px-3 sm:px-5 md:px-6 text-[7px] mobile-m:text-[9px] mobile-l:text-[11px] sm:text-sm md:text-lg lg:text-2xl lg:text-[26px]">
        Our Jackpot Junction pools operate{" "}
        <span className="text-[#FB681E]">autonomously</span>, filling up,
        rewarding winners, and initiating the next pool without any interference
        from our team.
      </p>
    </div>
  );
};

export default Row2;
