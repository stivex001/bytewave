import React from "react";
import doings from "@/images/workflow.png";
import Image from "next/image";
import icon from "@/images/Subtract.png";

const workFlow = [];

type Props = {};

const Workflow = (props: Props) => {
  return (
    <section className="my-16">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-center gap-20 ">
        <div className="flex flex-col gap-16">
          <p className="font-semibold text-[#7854f7] text-2xl">Our Workflow</p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" width={30} height={30} />
              <p className="font-medium text-base text-[#191A15]">
                <span className="mr-5">IDEA;</span> We conceptualize innovative
                tech solutions.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" width={30} height={30} />
              <p className="font-medium text-base text-[#191A15]">
                <span className="mr-5">RESEARCH;</span>We explore and validates
                possibilities
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" width={30} height={30} />
              <p className="font-medium text-base text-[#191A15]">
                <span className="mr-5">DEVELOPMENT;</span> We build solutions.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" width={30} height={30} />
              <p className="font-medium text-base text-[#191A15]">
                <span className="mr-5">DEPLOYMENT;</span> We implement and
                launch solutions
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={icon} alt="" width={30} height={30} />
              <p className="font-medium text-base text-[#191A15]">
                <span className="mr-5">OPTIMIZATION;</span> Continuous
                improvement
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={doings} alt="" width={585} height={505} />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
