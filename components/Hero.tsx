import Image from "next/image";
import React from "react";
import herobg from "@/images/Group 39686.png";
import { nunito } from "@/app/fonts";
import absImg from "@/images/cut.svg";
import decoy from "@/images/Decore.png";

type Props = {};

// bg-hero-section h-screen bg-center bg-no-repeat bg-cover w-full min-h-[35vh]

export const Hero = (props: Props) => {
	return (
		<section className="relative bg-[#E9F1FF] w-full">
			<Image src={absImg} alt="" className=" absolute bottom-0 left-0  w-full z-[999] " />
			<div className="max-w-[1440px] px-6 md:px-16  min-h-[700px] hero  mx-auto  py-5 lg:py-20  bg-hero bg-bottom lg:bg-right bg-no-repeat bg-contain lg:min-h-[660px] z-10 relative">
				<div className="flex flex-col z-50 mt-10 ">
					<h1
						className="text-xl mb-4 md:text-4xl 2xl:text-4xl max-w-[788px]  font-bold text-[#272D4E] lg:w-[50%] "
						style={{ lineHeight: "1.5" }}
					>
						Building a truly{" "}
						<div className="relative  inline-block">
							<div className="z-10">modern</div>
							<Image
								src={decoy}
								alt=""
								className="absolute bottom-1 lg:bottom-3 h-3 w-full -z-10"
							/>
						</div>{" "}
						Africa by Africans; One byte at a time.
					</h1>
					<p
						className={`text-sm lg:text-2xl md:3xl text-[#272D4E]/90 mt-5 ${nunito.className} font-bold`}
					>
						{" "}
						Where Vision Meets Execution
					</p>
					<span
						className={`text-sm lg:text-lg lg:max-w-[600px] text-[#272D4E]/90 mt-5 ${nunito.className} `}
					>
						Our mission is to transform challenges into opportunities by designing, developing, and
						reply tech solutions from simple to complex; to improve the quality of life in Africa.
						We believe in harnessing the power of technology to create a brighter, more connected,
						and highly productive Africa and deploying tech solutions.
					</span>
				</div>
				{/* <div className=" relative w-[365px] h-full lg:hidden ">
          <Image src={herobg} alt="hero" className=" object-cover "/>
          
        </div> */}
			</div>
		</section>
	);
};
