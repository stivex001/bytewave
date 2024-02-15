import Image from "next/image";
import React from "react";
import globe from "@/images/phonegroup.png";
import html from "@/images/html.png";
import WhyUsContent from "./whyUsContent";
import ellipse1 from "@/images/Ellipse 31.png";
import ellipse2 from "@/images/Ellipse 32.png";
import ellipse3 from "@/images/Group 8.png";
import ellipse4 from "@/images/dotgroup.png";
import ellipse5 from "@/images/woo.png";
import bg from "@/images/why.png";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <>
      <section className="hidden bg-white w-full  lg:flex flex-col my-10">
        <div className="text-center flex flex-col gap-1">
          <h1 className="text-[#7854f7] font-semibold text-xl">
            Why You Need To Choose Us{" "}
          </h1>
          <p className="font-medium text-base text-[#272d4e]">
            This Is How We Make A Difference{" "}
          </p>
        </div>
        <div className="my-16 relative ">
          <Image
            src={bg}
            alt=""
            className="absolute inset-0 w-full 2xl:min-h-screen h-[97%] "
          />
          <div className="flex w-5/6 2xl:w-[70%]  mx-auto items-center justify-center flex-col z-50  ">
            <div className="flex gap-10">
              <div className="w-[35%] relative">
                <Image src={globe} alt="" className="-mt-5 relative z-10" />
                <Image
                  src={ellipse1}
                  alt=""
                  className="absolute bottom-2 -left-14 w-[301px] "
                />
                <Image
                  src={ellipse2}
                  alt=""
                  className="absolute top-20 -left-10"
                  width={48}
                  height={48}
                />
                <Image
                  src={ellipse4}
                  alt=""
                  className="absolute -bottom-40 -left-14 w-[160px]"
                />
              </div>

              <div className="flex flex-col gap-4 mt-24 max-w-[469px] z-50">
                <WhyUsContent
                  title="Collaborative Design Process"
                  desc="An inclusive and collaborative design process that involves clients at  every stage, ensuring that their vision and feedback are integral to the final product."
                  count="1"
                />
                <WhyUsContent
                  title="  Responsive Adaptive Designs "
                  desc="Every design is crafted with responsiveness in mind, guaranteeing a consistent and delightful experience across a variety of devices."
                  count="2"
                />
                <WhyUsContent
                  title="  Cross-Functional Expertise"
                  desc="A team with diverse skills, encompassing graphic design, UX/UI, and coding, ensuring a holistic approach to website development that considers both aesthetics and functionality."
                  count="3"
                />
              </div>
            </div>
            <div className="flex ml-16 ">
              <div className="flex flex-col gap-5 mt-8 2xl:mt-20  max-w-[523px] z-50">
                <WhyUsContent
                  title="User Centric Approach"
                  desc="A commitment to a user-centric approach, where designs prioritize seamless navigation and an intuitive user experience."
                  count="4"
                />
                <WhyUsContent
                  title="Customization & Flexibility"
                  desc="Tailor-made designs that are not only visually appealing but also customizable to meet the unique brand identity and objectives of each client."
                  count="5"
                />
                <WhyUsContent
                  title="Innovative Design Philosophy"
                  desc="Your design philosophy is rooted in innovation, ensuring that each website stands out with creativity and cutting-edge aesthetics."
                  count="6"
                />
              </div>
              <div className="w-[35%] 2xl:w-[37%] relative 2xl:mt-7 ">
                <Image
                  src={html}
                  alt=""
                  className=" relative z-10 inline-block "
                />
                <Image
                  src={ellipse1}
                  alt=""
                  className="absolute top-5 -right-14 w-[197px]"
                />
                <Image
                  src={ellipse2}
                  alt=""
                  className="absolute top-2 left-20 z-50 w-12"
                />
                <Image
                  src={ellipse3}
                  alt=""
                  className="absolute bottom-36 -right-32 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile */}
      <section className="lg:hidden bg-white w-full my-10">
        <div className="text-center flex flex-col gap-1">
          <h1 className="text-[#7854f7] font-semibold text-sm">
            Why You Need To Choose Us{" "}
          </h1>
          <p className="font-medium text-[11px] text-[#272d4e]">
            This Is How We Make A Difference{" "}
          </p>
        </div>
        <div className="relative my-10 ">
          <Image src={bg} alt="" className="absolute inset-0  w-full h-full " />
          <div className="flex flex-col px-6">
            <div className="w-[220px] relative mx-auto">
              <Image src={globe} alt="" className="-mt-5 relative z-10" />
              <Image
                src={ellipse1}
                alt=""
                className="absolute bottom-2 -left-5 w-[201px] "
              />
              <Image
                src={ellipse2}
                alt=""
                className="absolute top-10 -left-16"
                width={32}
                height={32}
              />
              <Image
                src={ellipse4}
                alt=""
                className="absolute -bottom-40 -left-14 w-[113px]"
              />
            </div>
            <div className="flex flex-col gap-5 mt-10 max-w-[469px] z-50">
              <WhyUsContent
                title="Collaborative Design Process"
                desc="An inclusive and collaborative design process that involves clients at  every stage, ensuring that their vision and feedback are integral to the final product."
                count="1"
              />
              <WhyUsContent
                title="  Responsive Adaptive Designs "
                desc="Every design is crafted with responsiveness in mind, guaranteeing a consistent and delightful experience across a variety of devices."
                count="2"
              />
              <WhyUsContent
                title="  Cross-Functional Expertise"
                desc="A team with diverse skills, encompassing graphic design, UX/UI, and coding, ensuring a holistic approach to website development that considers both aesthetics and functionality."
                count="3"
              />
            </div>

            <div className="flex flex-col gap-5 mt-10 2xl:mt-20  max-w-[523px] z-50">
              <WhyUsContent
                title="User Centric Approach"
                desc="A commitment to a user-centric approach, where designs prioritize seamless navigation and an intuitive user experience."
                count="4"
              />
              <WhyUsContent
                title="Customization & Flexibility"
                desc="Tailor-made designs that are not only visually appealing but also customizable to meet the unique brand identity and objectives of each client."
                count="5"
              />
              <WhyUsContent
                title="Innovative Design Philosophy"
                desc="Your design philosophy is rooted in innovation, ensuring that each website stands out with creativity and cutting-edge aesthetics."
                count="6"
              />
            </div>

            <div className="w-[220px] relative mx-auto mt-8 ">
              <Image
                src={html}
                alt=""
                className="inline-block  relative z-10 "
              />
              <Image
                src={ellipse1}
                alt=""
                className="absolute top-3 -right-8 w-[133px]"
              />
              <Image
                src={ellipse2}
                alt=""
                className="absolute top-0 left-16 z-50 w-[33px]"
              />
              <Image
                src={ellipse3}
                alt=""
                className="absolute bottom-20 -right-16 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
