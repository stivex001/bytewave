import * as React from "react"
import { SVGProps } from "react"
export const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M6.423.993a.823.823 0 0 1 .268 1.345L3.154 5.873h20.23a.823.823 0 1 1 0 1.647H3.153l3.537 3.535a.825.825 0 1 1-1.167 1.166L.583 7.279a.824.824 0 0 1 0-1.166l4.941-4.941a.824.824 0 0 1 .9-.18Z"
      clipRule="evenodd"
      opacity={0.3}
    />
  </svg>
)

export const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={20}
      fill="none"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M29.463.401a1.343 1.343 0 0 0-.83 1.243 1.344 1.344 0 0 0 .394.95l5.765 5.764H1.815a1.343 1.343 0 0 0 0 2.685h32.977l-5.765 5.763a1.344 1.344 0 1 0 1.901 1.901l8.056-8.056a1.342 1.342 0 0 0 0-1.901L30.928.693a1.343 1.343 0 0 0-1.465-.292Z"
        clipRule="evenodd"
      />
    </svg>
  )
