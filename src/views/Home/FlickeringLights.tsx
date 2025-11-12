import React from "react";

const FlickeringLights = () => {
  return (
    <div className="w-[70%] absolute left-1/2 -translate-x-1/2 top-0 flex justify-between pointer-events-none">
      <div className="relative w-[45%]">
        <div className="">
          <img
            src="/images/left-light-off.png"
            alt=""
            className="w-full pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 top-0 left-0">
          <img
            src="/images/left-light-on.png"
            alt=""
            className="w-full pointer-events-none flicker-left"
          />
        </div>
      </div>

      <div className="relative w-[45%]">
        <div className="">
          <img
            src="/images/right-light-off.png"
            alt=""
            className="w-full pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 top-0 right-0">
          <img
            src="/images/right-light-on.png"
            alt=""
            className="w-full pointer-events-none flicker-right"
          />
        </div>
      </div>
    </div>
  );
};

export default FlickeringLights;
