import Image from "next/image";
import React from "react";
import virtual from "@/images/whowe.png";
import dot from "@/images/dots.png";
import { poppins } from "@/app/fonts";

type Props = {};

const WhoWeAre = (props: Props) => {
  return (
    <section id="about" className="bg-who-section bg-center bg-no-repeat bg-cover w-full py-32 flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row w-[70%] mx-auto items-center justify-center gap-10">
        <div className="relative ">
          <Image src={virtual} alt="" width={437} height={448} className="relative "/>
        </div>
        <div className="flex flex-col max-w-[519px] gap-10 -mt-10 text-justify ">
          <h1 className="text-base text-[#7854f7] font-semibold">Who We Are</h1>
          <span className={`text-sm text-[#272d4e] ${poppins.className} `}>
            At Bytewave Technologies Limited, we’re at the forefront of African
            technological innovation, delivering cutting-edge solutions to meet
            the evolving needs of businesses, government agencies, NGOs, and
            Individuals in Africa’s digital space. With a strong commitment to
            quality, innovation, and client satisfaction, we offer a
            comprehensive suite of services to bring ideas into reality.{" "}
          </span>
          <span className={`text-sm text-[#272d4e] ${poppins.className} `}>
            We are focused on building everyday digital solutions for the
            African population while providing services for organizations with
            specific needs, In the areas of Software Development, Research &
            Development, Security Technology, Web & Mobile App Development, Data
            & Information Management and IT Consulting.{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
