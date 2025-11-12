import React from "react";

interface IProps {
  setVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MachineDisplay = ({ setVideoOpen }: IProps) => {
  return (
    <div
      className="absolute top-[20.5%] sm:top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center w-[45%] h-[15%] justify-center cursor-pointer rounded-full hover:brightness-50 transition-all duration-300"
      onClick={() => setVideoOpen(true)}
    >
      <img
        src="/images/play-video-text.png"
        alt=""
        className="mt-[10%] mb-[5%] w-[40%] pointer-events-none"
      />
      <svg
        viewBox="0 0 111 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[13%] pointer-events-none"
      >
        <rect width="111" height="111" rx="55.5" fill="white" />
        <g filter="url(#filter0_ii_147_5)">
          <rect x="7" y="7" width="97" height="97" rx="48.5" fill="#FC681E" />
        </g>
        <path d="M71 55.4233L47 68.8467L47 41.9999L71 55.4233Z" fill="white" />
        <defs>
          <filter
            id="filter0_ii_147_5"
            x="7"
            y="5"
            width="97"
            height="100"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_147_5"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.479167 0 0 0 0 0.25875 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_147_5"
              result="effect2_innerShadow_147_5"
            />
          </filter>
        </defs>
      </svg>

      {/* <div className=" bg-white p-[1%] aspect-square w-[15%] relative rounded-full">
        <div className="bg-[#FC681E] w-full h-full relative rounded-full">
          <svg
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-1/2 w-[40%] -translate-x-[45%] -translate-y-1/2"
          >
            <path
              d="M24 13.4233L7.33841e-07 26.8467L1.90735e-06 -5.44548e-05L24 13.4233Z"
              fill="white"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default MachineDisplay;
