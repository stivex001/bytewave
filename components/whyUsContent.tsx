import React from "react";

type Props = {
  title: string;
  desc: string;
  count: string;
};

const WhyUsContent = ({ title, desc, count }: Props) => {
  return (
    <div className="flex gap-2">
      <p className="font-bold text-white text-base leading-4">{count}.</p>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-white text-base leading-4">{title} </p>
        <span className="text-base font-normal leading-5 text-white">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default WhyUsContent;
