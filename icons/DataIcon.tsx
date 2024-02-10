import * as React from "react"
import { SVGProps } from "react"
export const DataIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={261}
    height={261}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <g filter="url(#b)">
        <circle cx={130.24} cy={126.49} r={35.49} fill="#5B72EE" />
      </g>
      <g clipPath="url(#c)">
        <path
          fill="#fff"
          d="M136.454 126.492h-11.712v4.081h11.712v-4.081Zm5.428-9.629-5.971-6.249a1.433 1.433 0 0 0-1.037-.447h-.372v8.163h7.807v-.389a1.56 1.56 0 0 0-.427-1.078Zm-9.332 1.977v-8.673h-12.199c-.812 0-1.464.683-1.464 1.531v29.588c0 .849.652 1.531 1.464 1.531h20.494c.812 0 1.464-.682 1.464-1.531V120.37h-8.295c-.805 0-1.464-.688-1.464-1.53Zm-9.76-4.081a.5.5 0 0 1 .488-.51h4.88c.27 0 .488.228.488.51v1.02c0 .282-.218.51-.488.51h-4.88a.5.5 0 0 1-.488-.51v-1.02Zm0 4.081a.5.5 0 0 1 .488-.51h4.88c.27 0 .488.228.488.51v1.02c0 .282-.218.51-.488.51h-4.88a.5.5 0 0 1-.488-.51v-1.02Zm15.615 19.386a.5.5 0 0 1-.488.51h-4.879a.5.5 0 0 1-.488-.51v-1.021c0-.282.218-.51.488-.51h4.879c.27 0 .488.228.488.51v1.021Zm0-12.754v6.122c0 .563-.436 1.02-.976 1.02h-13.663c-.539 0-.976-.457-.976-1.02v-6.122c0-.564.437-1.02.976-1.02h13.663c.54 0 .976.456.976 1.02Z"
        />
      </g>
    </g>
    <defs>
      <filter
        id="a"
        width={260.257}
        height={260.258}
        x={0.111}
        y={0.146}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.786} />
        <feGaussianBlur stdDeviation={47.32} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.356863 0 0 0 0 0.447059 0 0 0 0 0.933333 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4604_6373"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4604_6373"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={132.584}
        height={132.584}
        x={63.947}
        y={67.898}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={7.701} />
        <feGaussianBlur stdDeviation={15.401} />
        <feColorMatrix values="0 0 0 0 0.212 0 0 0 0 0.238778 0 0 0 0 0.533333 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4604_6373"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4604_6373"
          result="shape"
        />
      </filter>
      <clipPath id="c">
        <path fill="#fff" d="M118.887 110.168h23.422v32.65h-23.422z" />
      </clipPath>
    </defs>
  </svg>
)

