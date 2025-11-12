import React from "react";

const Row1 = () => {
  return (
    <div className="pt-2 mb-3 md:mb-7 lg:mb-10 bg-black sm:pt-3 md:pt-4 lg:pt-7 xl:pt-8 text-[8px] mobile-m:text-[10px] mobile-l:text-[12px] sm:text-sm md:text-xl lg:text-2xl lg:text-[28px]">
      <p className="px-3 sm:px-5 md:px-6 mb-2 sm:mb-3 lg:mb-6 xl:mb-8 text-[13px] mobile-m:text-[16px] mobile-l:text-[18px] sm:text-2xl md:text-[32px] lg:text-[42px] xl:text-[50px] italic font-bold text-center">
        EXPERIENCE TRUE DECENTRALIZATION!
      </p>
      <div className="px-3 mb-1 sm:px-5 md:px-6 lg:px-8">
        <div className="bg-[#4727B0] p-2 sm:px-4 md:p-3 lg:p-5 xl:py-6">
          <p className="w-[90%] mobile-m:w-[95%] mobile-l:w-[90%] lg:w-[90%] xl:w-[80%]">
            Welcome to Arcade Lotto, a platform where the power of blockchain
            technology is fully harnessed.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-[52%] pl-3 sm:pl-5 md:pl-6 lg:pl-8">
          Our platform operates without any Web2 back-end servers or database
          management systems, relying solely on{" "}
          <span className="text-[#DD4AAC]">modular smart contracts.</span>
        </div>
        <div className="w-[47%]">
          <img src="images/comic/comic-8ball.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Row1;
