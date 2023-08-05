import React from 'react'
import { Props } from '../../../AppContext'

function Wrapper({ children, title }: Props) {
  return (
    <article className="mx-auto max-w-90 pt-[3rem] tracking-wide sm:max-w-[83%] sm:pt-[5rem] md:max-w-[85%] lg:max-w-70">
      <h2 className="mb-8 text-2xl font-bold leading-snug tracking-wider sm:text-4xl">
        {title}
      </h2>
      {children}
    </article>
  )
}

export default Wrapper
