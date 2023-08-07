import { Props } from '@/AppContext'
import React from 'react'

function Paragraph({ children }: Props) {
  return (
    <p className="mb-5 text-sm leading-8 sm:mb-7 sm:leading-9 md:text-base md:leading-10">
      {children}
    </p>
  )
}

export default Paragraph
