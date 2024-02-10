import * as React from "react";
const FormCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={101} height={92} fill="none">
    <rect
      width={32.793}
      height={32.793}
      x={9.542}
      y={0.317}
      fill="#9E96FF"
      opacity={0.5}
      rx={6.362}
    />
    <rect
      width={18.679}
      height={18.679}
      x={82.04}
      y={21.23}
      fill="#9E96FF"
      opacity={0.5}
      rx={6.362}
    />
    <rect
      width={20.062}
      height={20.062}
      x={0.603}
      y={47.951}
      fill="#DEDBFF"
      opacity={0.5}
      rx={5.09}
    />
    <rect
      width={23.282}
      height={23.282}
      x={73.314}
      y={68.279}
      fill="#DEDBFF"
      opacity={0.5}
      rx={5.09}
    />
    <circle cx={53.712} cy={50.182} r={38.173} fill="#903FDA" />
    <g filter="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5.09}
        d="m39.26 52.246 8.258 8.259 20.647-20.647"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={72.169}
        height={63.91}
        x={17.628}
        y={20.772}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.545} />
        <feGaussianBlur stdDeviation={9.543} />
        <feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 0.3 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_305_3166"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_305_3166"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default FormCheckIcon;
