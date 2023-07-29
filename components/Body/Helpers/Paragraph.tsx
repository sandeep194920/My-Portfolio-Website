import { Props } from '@/AppContext'
import React from 'react'

function Paragraph({ children }: Props) {
  return <p className="pb-[4rem] text-[1.05rem] leading-[2rem]">{children}</p>
}

export default Paragraph
