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
      <div className="text-center">
        <p className="text-[#7854f7] font-semibold text-xl">Portfolio</p>
        <span className="font-medium text-base text-[#272d4e]">
          See Some Of Our Works
        </span>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-6">
        <Image src={img1} alt="" width={153} height={49} />
        <Image src={img3} alt="" width={137} height={37} />
        <Image src={img5} alt="" width={146} height={45} />
        <Image src={img6} alt="" width={139} height={42} />
        <Image src={img4} alt="" width={176} height={34} />
        <Image src={img2} alt="" width={118} height={45} />
      </div>
    </section>
  );
};

export default Portfolio;
