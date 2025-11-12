import React from "react";

const Row3 = () => {
  return (
    <div className="relative text-[7px] mobile-m:text-[9px] mobile-l:text-[11px] sm:text-sm md:text-lg lg:text-2xl lg:text-[26px]">
      <div className="flex items-stretch gap-3 mb-3 md:gap-5 lg:gap-8 md:mb-7 lg:mb-10 ">
        <div className="bg-black w-[45%] flex flex-col justify-between">
          <p className="p-2 px-3 pb-1 mobile-m:px-2 lg:p-5 xl:p-7 sm:px-5 md:px-6 xl:px-7">
            <span className="text-[#65F702]">Eliminating</span> any possibility
            of tampering or manipulation.
          </p>
          <img src="images/comic/100.png" alt="" className="w-full mb-1" />
        </div>
        <div className="w-[55%]">
          <img
            src="images/comic/orange-stripes.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="px-3 pt-3 pb-3 bg-black sm:pt-5 lg:pt-8 xl:pt-10 sm:px-5 md:px-6 xl:px-7 sm:pb-8 lg:pb-10 xl:pb-12">
        <div className="w-[52%] xl:w-1/2">
          <p className="mb-2 sm:mb-6 md:mb-7 lg:mb-10">
            Dive into a truly decentralized gaming experience with Arcade Lotto,
            where fairness is not just a promise, but a guarantee!
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dapp.arcadelotto.com"
            className="transition-all duration-200 bg-[#FB681E] hover:bg-[#b14b18] border-white border-[3px] rounded-full flex items-center justify-center w-20 mobile-m:w-24 mobile-l:w-28 sm:w-40 md:w-52 lg:w-60 xl:w-72 py-1.5 sm:py-2 lg:py-4 font-clash mobile-l:border-[4px] md:border-[6px] lg:border-8"
          >
            PLAY NOW
          </a>
        </div>
        <div className="absolute right-0 w-[45%] xl:w-[42%] bottom-[5%]">
          <img src="images/comic/slotmach.png" alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default Row3;
