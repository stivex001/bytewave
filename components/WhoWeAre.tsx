import Image from "next/image";
import React from "react";
import virtual from "@/images/virtual.png";
import dot from "@/images/dots.png";
import { poppins } from "@/app/fonts";

type Props = {};

const WhoWeAre = (props: Props) => {
  return (
    <>
      <section
        id="about"
        className="hidden bg-who-section bg-center bg-no-repeat bg-cover w-full py-32 lg:flex items-center justify-center "
      >
        <div className="flex flex-col lg:flex-row w-[70%] mx-auto items-center justify-center gap-8">
          <div className="relative w-1/2 h-full ">
            <Image
              src={virtual}
              alt=""
              className="relative w-full h-full object-cover z-10"
            />
            <Image
              src={dot}
              alt=""
              className="absolute w-[134px] -bottom-[54px] "
            />
          </div>
          <div className="flex w-1/2  flex-col max-w-[519px] gap-10 2xl:gap-14  text-justify  2xl:-mt-8">
            <h1 className="text-lg text-[#7854f7] font-semibold">Who We Are</h1>
            <span
              className={`text-sm lg:text-[15px] text-[#272d4e] ${poppins.className} `}
              style={{lineHeight: "1.5"}}
            >
              At Bytewave Technologies Limited, we’re at the forefront of
              African technological innovation, delivering cutting-edge
              solutions to meet the evolving needs of businesses, government
              agencies, NGOs, and Individuals in Africa’s digital space. With a
              strong commitment to quality, innovation, and client satisfaction,
              we offer a comprehensive suite of services to bring ideas into
              reality.{" "}
            </span>
            <span
              className={`text-xs lg:text-[15px] text-[#272d4e] -mt-5 2xl:-mt-3 ${poppins.className} `}
              style={{lineHeight: "1.5"}}
            >
              We are focused on building everyday digital solutions for the
              African population while providing services for organizations with
              specific needs, In the areas of Software Development, Research &
              Development, Security Technology, Web & Mobile App Development,
              Data & Information Management and IT Consulting.{" "}
            </span>
          </div>
        </div>
      </section>

      {/* mobile */}
      <section id="about" className="lg:hidden flex flex-col ">
        <h1 className="text-lg text-[#7854f7] font-semibold text-center">
          Who We Are
        </h1>
        <div className="bg-who-section bg-center bg-no-repeat bg-cover w-full py-16 flex flex-col items-center justify-center ">
          <div>
            <Image
              src={virtual}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-10 w-5/6 mx-auto">
            <span
              className={`text-[11px] leading-5 text-[#272d4e] ${poppins.className} `}
            >
              At Bytewave Technologies Limited, we’re at the forefront of
              African technological innovation, delivering cutting-edge
              solutions to meet the evolving needs of businesses, government
              agencies, NGOs, and Individuals in Africa’s digital space. With a
              strong commitment to quality, innovation, and client satisfaction,
              we offer a comprehensive suite of services to bring ideas into
              reality.{" "}
            </span>
            <span
              className={`text-[11px] leading-5 text-[#272d4e] ${poppins.className} `}
            >
              We are focused on building everyday digital solutions for the
              African population while providing services for organizations with
              specific needs, In the areas of Software Development, Research &
              Development, Security Technology, Web & Mobile App Development,
              Data & Information Management and IT Consulting.{" "}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
