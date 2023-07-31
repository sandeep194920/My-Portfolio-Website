import React from 'react'
import { Props } from '../../../AppContext'

function Wrapper({ children, title }: Props) {
  console.log('Children', children)
  return (
    <article className="pt-[6rem] m-auto w-[70%] tracking-wide">
      <h2 className="mb-[3rem] text-4xl font-extrabold tracking-wider">
        {title}
      </h2>
      {children}
    </article>
  )
}

export default Wrapper
