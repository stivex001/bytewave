import React from "react";
import ItemsContainer from "@/components/ItemsContainer";
import SocialIcons from "@/components/socialIcons";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <ItemsContainer />
      <div className="w-5/6 mx-auto h-1 bg-[#d9d9d9] -mt-5"></div>
      <div
        className="w-5/6 mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between
       text-white pb-8 text-base lg:text-lg font-normal my-10"
      >
        <span className="">
          Copyright © {new Date().getFullYear()} Bytewave Technologies Limited.
        </span>
        <span>
          <span>All Rights Reserved</span> |{" "}
          <span className="text-[#4A3AFF]">Terms and Conditions</span> |{" "}
          <span className="text-[#4A3AFF]">Privacy Policy</span>
        </span>
      </div>
    </footer>
  );
};
