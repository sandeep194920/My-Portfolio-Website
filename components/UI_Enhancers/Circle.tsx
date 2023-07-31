import React from 'react'

const Circle = ({ size }: { size?: string }) => {
  let circleStyles

  switch (size) {
    case 'sm':
      circleStyles = `absolute md:start-[0rem] md:top-[14rem] lg:start-[0rem] lg:top-[14rem] translateZ(0) rounded-[100%]
 bg-[radial-gradient(_64.18%_64.18%_at_71.16%_35.69%,#def9fa_0.89%,#bef3f5_17.23%,#9dedf0_42.04%,#7de7eb_55.12%,#5ce1e6_71.54%,#33bbcf_100%_)] shadow-[0px_4px_20px_rgba(0,0,0,0.1),0px_6px_6px_rgba(0,0,0,0.1),0px_8px_10px_rgba(0,0,0,0.1),0px_12px_18px_rgba(0,0,0,0.1)] w-[50px] h-[50px]`
      break
    case 'md':
      circleStyles = `absolute hidden lg:block lg:top-[13rem] lg:left-[29rem] translateZ(0) rounded-[100%]
 bg-[radial-gradient(_64.18%_64.18%_at_71.16%_35.69%,#def9fa_0.89%,#bef3f5_17.23%,#9dedf0_42.04%,#7de7eb_55.12%,#5ce1e6_71.54%,#33bbcf_100%_)] shadow-[0px_4px_20px_rgba(0,0,0,0.1),0px_6px_6px_rgba(0,0,0,0.1),0px_8px_10px_rgba(0,0,0,0.1),0px_12px_18px_rgba(0,0,0,0.1)] w-[75px] h-[75px]`
      break
    default:
      circleStyles = `absolute md:start-[10rem] md:top-[-6rem] lg:start-[10rem] lg:top-[-5rem]  translateZ(0) rounded-[100%]
 bg-[radial-gradient(_64.18%_64.18%_at_71.16%_35.69%,#def9fa_0.89%,#bef3f5_17.23%,#9dedf0_42.04%,#7de7eb_55.12%,#5ce1e6_71.54%,#33bbcf_100%_)] shadow-[0px_4px_20px_rgba(0,0,0,0.1),0px_6px_6px_rgba(0,0,0,0.1),0px_8px_10px_rgba(0,0,0,0.1),0px_12px_18px_rgba(0,0,0,0.1)] w-[90px] h-[90px]`
      break
  }

  return <div className={circleStyles}></div>
}

export default Circle
