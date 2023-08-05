import React from 'react'

const Circle = ({ size }: { size?: string }) => {
  let circleStyles

  switch (size) {
    case 'sm':
      circleStyles =
        'start-[0rem] hidden lg:block lg:top-[14rem] lg:start-[0rem] lg:top-[14rem] lg:w-[50px] lg:h-[50px] circle'
      break

    case 'md':
      circleStyles =
        'hidden xl:block xl:top-[13rem] xl:left-[28rem] xl:w-[75px] xl:h-[75px] circle'
      break
    default:
      circleStyles =
        'start-[10rem] hidden lg:block lg:start-[10rem] lg:top-[-5rem] lg:w-[90px] lg:h-[90px] circle'
      break
  }

  return <div className={circleStyles}></div>
}

export default Circle
