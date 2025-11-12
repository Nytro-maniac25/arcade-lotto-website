import Link from "next/link";
import React, { useState } from "react";

import FlickeringLights from "./FlickeringLights";
import MachineDisplay from "./MachineDisplay";
import PopUpVideo from "./PopUpVideo";
import Roadmap from "./Roadmap";

interface IProps {
  isOpen: boolean;
  setVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlotMachine = ({ isOpen, setVideoOpen }: IProps) => {
  return (
    <div className="h-full aspect-[0.6] pt-10 relative bg-[url('/images/slot-machine.jpg')] bg-center slot-machine bg-no-repeat bg-cover bg-[#0C0641] flex justify-start items-center flex-col w-full">
      <MachineDisplay setVideoOpen={setVideoOpen} />
      <FlickeringLights />
      <Roadmap />
    </div>
  );
};

export default SlotMachine;
