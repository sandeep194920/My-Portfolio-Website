import { Props } from '@/AppContext'
import React from 'react'

function Paragraph({ children }: Props) {
  return <p className="mb-10 text-sm leading-8 md:text-base">{children}</p>
}

export default Paragraph
