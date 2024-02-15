import Image from "next/image";
import React from "react";
import img1 from "@/images/b5.png";

type Props = {};

const Ads2 = (props: Props) => {
  return (
    <div className="my-10">
      <Image src={img1} alt="" />
    </div>
  );
};

export default Ads2;
