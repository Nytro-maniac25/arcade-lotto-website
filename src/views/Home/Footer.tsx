import Link from "next/link";
import React from "react";
import { socials } from "../../config/routes/navLinks";

const Footer = () => {
  return (
    <div className="relative z-10 pb-1 bg-black font-inter sm:pb-1">
      <div className="flex items-center justify-between p-5 pt-10 pl-0 mx-auto xl:w-[70%] sm:pl-5 md:pl-0 sm:p-10 sm:pt-20 ">
        <Link
          href="/"
          className="w-[30%] min-w-[150px] max-w-[200px] xl:max-w-none xl:w-[20%]"
        >
          <img
            src="images/hero-logo.png"
            alt=""
            className="pointer-events-none"
          />
        </Link>
        <div className="w-full">
          <ul className="flex items-center justify-end gap-3 ml-auto">
            {socials.map((social, index) => (
              <li
                key={index + social.url}
                className="flex items-center justify-center w-8 lg:w-9 bg-white rounded-full aspect-square transition-all hover:bg-[#bebebe] shadow-footer-socials"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  className="flex items-center justify-center w-full h-full p-2"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-[#B3BBEE] text-xxs text-center flex items-center justify-center">
        <p>
          &copy; 2023 ARCADE LOTTO - All rights reserved .{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dapp.arcadelotto.com/privacy-policy"
            className="flex-nowrap hover:text-[#FFA437] transition-colors"
          >
            Privacy Policy
          </a>{" "}
          .{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dapp.arcadelotto.com/terms-and-conditions"
            className="whitespace-nowrap hover:text-[#FFA437] transition-colors"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
