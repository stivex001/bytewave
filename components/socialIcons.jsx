import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoFacebook,  } from "react-icons/bi";
import {FaInstagram, FaLinkedinIn, FaXTwitter} from "react-icons/fa"
import {RiTwitterXFill} from "react-icons/ri"

const SocialIcons = () => {
  return (
    <div className="text-white flex items-center mt-8 ">
      <span
        // key={icon.name}
        className=" cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-purple-600
        duration-300 gap-2"
      >
        <BiLogoFacebook size={20} />
      </span>
      <span
        // key={icon.name}
        className=" cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-purple-600
        duration-300 gap-2"
      >
        <RiTwitterXFill size={20}/>
      </span>
      <span
        // key={icon.name}
        className=" cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-purple-600
        duration-300 gap-2"
      >
        <FaInstagram size={20}/>
      </span>
      <span
        // key={icon.name}
        className=" cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-purple-600
        duration-300 gap-2"
      >
        <AiOutlineYoutube size={20}/>
      </span>
      <span
        // key={icon.name}
        className=" cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl  hover:text-purple-600
        duration-300 gap-2"
      >
        <FaLinkedinIn size={20}/>
      </span>
    </div>
  );
};

export default SocialIcons;
