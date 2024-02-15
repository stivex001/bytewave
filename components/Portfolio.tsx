import React from "react";
import img1 from "@/images/google-2015 1.png";
import img2 from "@/images/grab-logo.png";
import img3 from "@/images/netflix-3 1.png";
import img4 from "@/images/facebook.png";
import img5 from "@/images/airbnb 1.png";
import img6 from "@/images/amazon-2 (1) 1.png";
import Image from "next/image";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section
      id="portfolio"
      className="my-20 px-5 lg:w-5/6 mx-auto flex flex-col gap-10"
    >
      <div className="text-center flex flex-col gap-2">
        <p className="text-[#7854f7] font-semibold text-xl">Portfolio</p>
        <span className="font-medium text-base text-[#272d4e]">
          See Some Of Our Works
        </span>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-8 items-center mt-6">
        <Image src={img1} alt="" className="w-16 md:w-[176px]" />
        <Image src={img3} alt="" className="w-16 md:w-[176px]" />
        <Image src={img5} alt="" className="w-16 md:w-[176px]" />
        <Image src={img6} alt="" className="w-16 md:w-[176px] mt-3 lg:mt-5" />
        <Image src={img4} alt="" className="w-16 md:w-[176px]" />
        <Image src={img2} alt="" className="w-16 md:w-[150px] object-cover" />
      </div>
    </section>
  );
};

export default Portfolio;
