import React from 'react'

const Circle = ({ size }: { size?: string }) => {
  let circleStyles

  switch (size) {
    case 'sm':
      circleStyles =
        'md:start-[0rem] hidden md:block md:top-[14rem] lg:start-[0rem] lg:top-[14rem] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] circle'
      break

    case 'md':
      circleStyles =
        'hidden lg:top-[13rem] lg:left-[29rem] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] circle'
      break
    default:
      circleStyles =
        'md:start-[10rem] md:top-[-6rem] lg:start-[10rem] lg:top-[-5rem] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] circle'
      break
  }

  return <div className={circleStyles}></div>
}

export default Circle
