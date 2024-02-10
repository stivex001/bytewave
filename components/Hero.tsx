import Image from "next/image";
import React from "react";
import herobg from "@/images/Group 39686.png";
import bg from "@/public/herobg.png";
import { nunito } from "@/app/fonts";
import absImg from "@/images/cut.svg";
import decoy from "@/images/Decore.png";

type Props = {};

// bg-hero-section h-screen bg-center bg-no-repeat bg-cover w-full min-h-[35vh]

export const Hero = (props: Props) => {
  return (
    <section className="relative bg-[#E9F1FF] w-full ">
      <Image
        src={absImg}
        alt=""
        className=" absolute -bottom-[1px] left-0  w-full z-[999] "
      />
      <div className="w-11/12  mx-auto grid grid-cols-1 lg:grid-cols-2 py-5 lg:py-20  bg-hero bg-bottom lg:bg-right bg-no-repeat bg-contain  h-[75vh] z-10 relative">
        <div className="flex flex-col z-50 ">
          <h1
            className="text-xl mb-4 md:text-4xl 2xl:text-5xl max-w-[788px]  font-bold text-[#272D4E] "
            style={{ lineHeight: "1.5" }}
          >
            Building a truly{" "}
            <span className="relative  inline-block">
              modern
              <Image src={decoy} alt="" className="absolute bottom-1 lg:bottom-3 " />
            </span>{" "}
            Africa by Africans; One byte at a time.
          </h1>
          <p
            className={`text-sm lg:text-2xl md:3xl text-[#272D4E]/90 mt-5 ${nunito.className} font-bold`}
          >
            {" "}
            Where Vision Meets Execution
          </p>
          <span
            className={`text-sm lg:text-lg lg:max-w-[567px] text-[#272D4E]/90 mt-5 ${nunito.className} `}
          >
            Our mission is to transform challenges into opportunities by
            designing, developing, and reply tech solutions from simple to
            complex; to improve the quality of life in Africa. We believe in
            harnessing the power of technology to create a brighter, more
            connected, and highly productive Africa and deploying tech
            solutions.
          </span>
        </div>
        {/* <div className=" relative w-[365px] h-full lg:hidden ">
          <Image src={herobg} alt="hero" className=" object-cover "/>
          
        </div> */}
      </div>
    </section>
  );
};
