import React from "react";
import group1 from "@/images/Group 80.png";
import group2 from "@/images/Group 80.png";
import group3 from "@/images/Group 81.png";
import group4 from "@/images/Group 39617.png";
import group5 from "@/images/Group 39621.png";
import group6 from "@/images/Group 39622.png";
import Image from "next/image";
import { poppins } from "@/app/fonts";


const serviceData = [
  {
    id: 1,
    title: "Data And Information Management",
    desc: "Unlock the power of your data. Our data and information management experts help you collect, store, and harness data to make informed decisions. ",
    img: group1,
  },
  {
    id: 2,
    title: "Software Development",
    desc: "Our software development services are the backbone of your digital transformation. We craft bespoke software solutions tailored to your unique requirements. ",
    img: group2,
  },
  {
    id: 3,
    title: "Research & Development",
    desc: "Innovation is in our DNA. Our dedicated R&D team is constantly pushing the boundaries of technology. We stay ahead of emerging trends, and identifying opportunities to help you stay ahead. ",
    img: group3,
  },
  {
    id: 4,
    title: "Website & Mobile App Development  ",
    desc: "Your online presence is often the first interaction your customers have with your brand. We design and develop responsive, user-friendly websites.",
    img: group6,
  },
  {
    id: 5,
    title: "Security Technology Development",
    desc: "In an era of increasing cyber threats, security is paramount. Our security technology development team specializes in creating robust, multi-layered security solutions. ",
    img: group5,
  },
  {
    id: 6,
    title: "IT Consulting",
    desc: "Navigating the complex world of technology requires expertise. Our IT consulting services provide strategic guidance and solutions to help you make informed decisions. ",
    img: group6,
  },
];

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="my-16 px-6 2xl:w-9/12 mx-auto ">
      <div className="flex flex-col text-center gap-2">
        <p className="text-[#7854F7] font-semibold text-2xl">Our Services</p>
        <span className="text-[#272D4E] text-[17px] font-medium">
          We Provide Professional IT Solutions For Your Business
        </span>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-10  gap-y-40 my-32">
        {serviceData.map((item) => (
          <div
            key={item?.id}
            className="bg-white shadow-lg flex flex-col gap-10 justify-between items-center px-5 py-10   rounded-[16px] relative border border-gray-200"
          >
            <Image src={item.img} alt="" width={120} height={120} className="-mt-24 "/>
            <p className="text-lg text-center font-semibold text-[#272D4E] max-w-[264px]  ">
              {item.title}
            </p>
            <span className={` ${poppins.className} h-[132px] text-[14px] leading-6 text-[#696984] max-w-[289px]  text-center `}>{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
