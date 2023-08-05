import { Props } from '@/AppContext'
import React from 'react'

function Paragraph({ children }: Props) {
  return <p className="mb-10 leading-8">{children}</p>
}

export default Paragraph
