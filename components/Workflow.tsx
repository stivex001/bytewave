import React from "react";
import doings from "@/images/workflow.png";
import Image from "next/image";
import icon from "@/images/Subtract.png";

const workFlow = [];

type Props = {};

const Workflow = (props: Props) => {
  return (
    <section className="my-24">
      <div className="max-w-[1100px] 2xl:max-w-[1300px] px-5 mx-auto flex flex-col lg:flex-row justify-center gap-20 ">
        <div className="flex flex-col gap-[100px]">
          <p className="font-semibold text-[#7854f7] text-2xl text-center lg:text-start">Our Workflow</p>
          <div className="flex flex-col gap-5 px-5 lg:px-0">
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" className="md:w-7 md:h-7 w-5 h-5" />
              <p className="font-medium text-sm md:text-base text-[#191A15] ">
                <span className="md:mr-5 mr-3 text-sm">IDEA;</span> We conceptualize innovative
                tech solutions.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" className="md:w-7 md:h-7 w-5 h-5" />
              <p className="font-medium text-sm md:text-base text-[#191A15]">
                <span className="md:mr-5 mr-3 text-sm">RESEARCH;</span>We explore and validates
                possibilities
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" className="md:w-7 md:h-7 w-5 h-5" />
              <p className="font-medium text-sm md:text-base text-[#191A15]">
                <span className="md:mr-5 mr-3 text-sm">DEVELOPMENT;</span> We build solutions.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" className="md:w-7 md:h-7 w-5 h-5" />
              <p className="font-medium text-sm md:text-base text-[#191A15]">
                <span className="md:mr-5 mr-3">DEPLOYMENT;</span> We implement and
                launch solutions
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" className="md:w-7 md:h-7 w-5 h-5" />
              <p className="font-medium text-sm md:text-base text-[#191A15]">
                <span className="md:mr-5 mr-3 text-sm">OPTIMIZATION;</span> Continuous
                improvement
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-11/12 mx-auto lg:w-1/2">
          <Image src={doings} alt=""  className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
