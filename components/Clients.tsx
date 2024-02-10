import Image from "next/image";
import React from "react";
import img1 from "@/images/client1.png"
import img2 from "@/images/client2.png"
import img3 from "@/images/client3.png"
import img4 from "@/images/client4.png"
import img5 from "@/images/client5.png"
import img6 from "@/images/circus.png"

type Props = {};

const Clients = (props: Props) => {
  return (
    <div className="my-40 w-5/6 mx-auto flex flex-col gap-10">
      <p className="text-center font-normal text-[#696984] text-base">Trusted By Our Clients...</p>
      <div className="grid grid-cols-4 lg:grid-cols-6 items-center justify-center gap-5 ">
        <Image src={img5} alt='' width={67} height={48}/>
        <Image src={img4} alt='' width={157} height={48}/>
        <Image src={img3} alt='' width={116} height={48}/>
        <Image src={img6} alt='' width={112} height={23}/>
        <Image src={img2} alt='' width={161} height={48}/>
        <Image src={img1} alt='' width={119} height={48}/>
      </div>
    </div>
  );
};

export default Clients;
