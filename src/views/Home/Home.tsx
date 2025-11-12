import Link from "next/link";
import React, { useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import PopUpVideo from "./PopUpVideo";
import SlotMachine from "./SlotMachine";
import TeamMembers from "./TeamMembers";
import Discord from "./Discord";
import Comic from "./Comic";

const Home = () => {
  const [isOpen, setVideoOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-hero-bg">
      <Hero />
      <SlotMachine isOpen={isOpen} setVideoOpen={setVideoOpen} />
      <Comic />
      <TeamMembers />
      <Discord />
      <Footer />
      <PopUpVideo isOpen={isOpen} setVideoOpen={setVideoOpen} />
    </div>
  );
};

export default Home;
