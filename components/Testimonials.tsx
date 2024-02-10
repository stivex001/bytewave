import React from "react";
import testimonial from "@/images/testimonial.png";
import testi1 from "@/images/testi1.png";
import testi2 from "@/images/Group 6.png";
import Image from "next/image";
import p1 from "@/images/p1.png";
import p2 from "@/images/p2.png";
import p3 from "@/images/p3.png";
import p4 from "@/images/p4.png";
import p5 from "@/images/p5.png";
import p6 from "@/images/p6.png";
import { LeftArrowIcon, RightArrowIcon } from "@/icons/ArrowIcon";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="hidden lg:block bg-who-section bg-center bg-no-repeat bg-cover w-full py-32   ">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-center">
          <h1 className="text-[#7854f7] font-semibold text-xl">Testimonials</h1>
          <p className="font-medium text-base text-[#272d4e] mt-2">
            See What Clients Feel About Us
          </p>
        </div>
        <div className="relative w-[50%]  rounded-xl bg-testimonies bg-center bg-no-repeat bg-cover py-28 mx-auto my-16 flex items-center justify-center">
          {/* <Image src={testimonial} alt="" className=" w-full" /> */}
          <p className="max-w-[428px] text-[#94A2B3] text-[18px] text-center leading-9  ">
            Working with the BYTEWAVE TECHNOLOGIES team has been a huge success!{" "}
            <br />
            They're good people who care deeply about our business. More
            importantly, Bytewave doesn't charge you a portion of your profits
            as your business grows!
          </p>
          <Image
            src={testi1}
            alt=""
            className="w-[355px] absolute -bottom-5 -left-24 -z-[1]"
          />
          <Image
            src={testi2}
            alt=""
            className="w-[355px]  absolute top-10 -right-16 -z-[1]"
          />
          <Image
            src={p1}
            alt=""
            className="w-[115px] h-[115px] rounded-full object-cover  absolute top-32 -right-56"
          />
          <Image
            src={p2}
            alt=""
            className="w-[66px] h-[66px] rounded-full object-cover  absolute -bottom-5 -right-36"
          />
        </div>
        <div>
          <Image
            src={p3}
            alt=""
            className="w-[78px] h-[78px] rounded-full object-cover  absolute left-20 bottom-16 "
          />
          <Image
            src={p4}
            alt=""
            className="w-[70px] h-[70px] rounded-full object-cover  absolute top-10 right-48"
          />
          <Image
            src={p5}
            alt=""
            className="w-[102px] h-[102px] rounded-full object-cover  absolute top-8 left-48"
          />
          <Image
            src={p6}
            alt=""
            className="w-[69px] h-[69px] rounded-full object-cover  absolute top-60 left-10 "
          />
        </div>
        <div className="flex items-center gap-5 justify-center ml-52">
          <div className="cursor-pointer">
            <RightArrowIcon />
          </div>
          <div className="cursor-pointer">
            <LeftArrowIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
