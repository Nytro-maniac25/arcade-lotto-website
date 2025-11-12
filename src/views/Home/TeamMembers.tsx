import React from "react";

const teamMembers = [
  {
    name: "Head Honcho",
    imgSrc: "/images/team/head-honcho.png",
    big: true,
  },
  {
    name: "Pit Boss",
    imgSrc: "/images/team/pit-boss.png",
    big: true,
  },
  {
    name: "Arcade Manager",
    imgSrc: "/images/team/arcade-manager.png",
    big: true,
  },
  {
    name: "Robin",
    imgSrc: "/images/team/robin.png",
    big: false,
  },
  {
    name: "Sarah",
    imgSrc: "/images/team/sarah.png",
    big: false,
  },
  {
    name: "Eric",
    imgSrc: "/images/team/eric.png",
    big: false,
  },
];

const TeamMembers = () => {
  return (
    <div className="p-5 py-20 text-white sm:p-10 md:p-16 bg-team">
      <div className="max-w-6xl mx-auto font-bold text-center font-poppins">
        <h3 className="max-w-md mx-auto mb-6 text-lg sm:text-xl md:text-2xl leading-9 sm:leading-10 md:leading-[63px] text-primary">
          Meet Our Team
        </h3>

        <p className="max-w-5xl mx-auto mb-16 text-xs leading-7 md:leading-9 sm:text-sm md:text-base">
          Introducing the team behind Arcade Lotto - a group of passionate and
          experienced individuals who are committed to building a transparent
          and decentralized gaming platform.
        </p>
        <div className="grid items-start grid-cols-3 gap-y-12 md:gap-y-16 gap-x-5 sm:gap-x-10 md:gap-x-16">
          {teamMembers.map((teamMember, index) => (
            <div
              key={index + teamMember.name}
              className="flex flex-col items-center"
            >
              <img
                src={teamMember.imgSrc}
                alt=""
                className={`rounded-full mb-4 pointer-events-none  ${
                  teamMember.big
                    ? "w-[100%] max-w-[279px]"
                    : "w-[70%] max-w-[196px]"
                }`}
              />
              <p className="text-xs w-min sm:w-max sm:text-sm md:text-base">
                {teamMember.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
