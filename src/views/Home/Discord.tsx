import React from "react";

const Discord = () => {
  return (
    <div className="bg-[#DD4AAC] shadow-discord p-5 sm:p-10 md:p-16 pt-10 pb-14 relative z-0">
      <div className="items-center justify-between max-w-screen-lg mx-auto md:flex">
        <div className="max-w-[150px] md:max-w-[200px] mx-auto md:w-1/3">
          <img
            src="/images/discord-section.png"
            alt=""
            className="w-full pointer-events-none"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-w-3xl text-center md:w-2/3">
          {/* <p className="text-[#1F1876] font-poppins font-bold text-xl md:text-2xl mb-3">
            Join Us On Discord
          </p> */}
          <p className="text-base md:text-lg lg:text-xl leading-7  lg:leading-8 xl:leading-[50px] font-bold text-white font-poppins mb-5">
            Join Arcade Lotto&apos;s Discord Community for Exclusive Updates
          </p>
          <a
            href="https://discord.com/invite/arcadelotto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#6D75F1] border-[4px] border-white rounded-[50px] text-center text-xxs sm:text-xs px-5 py-2 shadow-discord-btn hover:bg-[#4f55ae] transition-colors"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discord;
