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
    <section className="bg-white w-full  flex flex-col my-10">
      <div className="text-center">
        <h1 className="text-[#7854f7] font-semibold text-xl">
          Why You Need To Choose Us{" "}
        </h1>
        <p className="font-medium text-base text-[#272d4e]">
          This Is How We Make A Difference{" "}
        </p>
      </div>
      <div className="my-16 relative ">
        <Image src={bg} alt="" className="absolute inset-0 lg:h-screen w-full" />
        
        <div className="hidden lg:flex w-[70%] mx-auto items-center justify-center flex-col py-5">
          <div className="flex gap-10">
            <div className="relative">
              <Image
                src={globe}
                alt=""
                width={323}
                height={412}
                className="-mt-10 relative z-10"
              />
              <Image
                src={ellipse1}
                alt=""
                className="absolute top-16 -left-5"
                width={301}
                height={301}
              />
              <Image
                src={ellipse2}
                alt=""
                className="absolute top-10 -left-10"
                width={48}
                height={48}
              />
              <Image
                src={ellipse4}
                alt=""
                className="absolute -bottom-60 -left-14"
                width={160}
                height={355}
              />
            </div>

            <div className="flex flex-col gap-5 mt-20 max-w-[469px] z-50">
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
          <div className="flex ml-40">
            <div className="flex flex-col gap-5 mt-10 max-w-[523px] z-50">
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
            <div className="relative">
              <Image
                src={html}
                alt=""
                width={323}
                height={412}
                className="inline-block mt-20 relative z-10"
              />
              <Image
                src={ellipse1}
                alt=""
                className="absolute top-14 -right-14"
                width={197}
                height={197}
              />
              <Image
                src={ellipse2}
                alt=""
                className="absolute top-10 left-20 z-50"
                width={48}
                height={48}
              />
              <Image
                src={ellipse3}
                alt=""
                className="absolute bottom-14 -right-14"
                width={197}
                height={197}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
