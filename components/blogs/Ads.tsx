import Image from 'next/image'
import React from 'react'
import img1 from "@/images/b3.png"

type Props = {}

const Ads = (props: Props) => {
  return (
    <div>
        <Image src={img1} alt='' />
    </div>
  )
}

export default Ads