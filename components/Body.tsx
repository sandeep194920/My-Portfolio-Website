import React from 'react'
import { Roboto_Slab } from 'next/font/google'
import { data } from '@/data/info/tech/best-headphones-2023'
import SingleProduct from './SingleProduct'
// If loading a variable font, you don't need to specify the font weight
const inter = Roboto_Slab({
  subsets: ['latin'],
})

function Body() {
  const { headPhones, heading, intro } = data
  return (
    <section className={`mx-3 flex max-w-7xl space-x-3 leading-7 text-black`}>
      <article className="ml-3 text-lg md:ml-8 lg:ml-16">
        <h1
          className={`mb-3 text-2xl font-semibold uppercase leading-10 tracking-wide ${inter.className} `}
        >
          {heading}
        </h1>

        <p>{intro}</p>
        {/* CARDS */}
        <div className="mt-5"></div>

        {/* Products */}
        {headPhones.map((headPhone, index) => {
          const {
            name,
            heading,
            link,
            description,
            pros,
            cons,
            features,
            summary,
          } = headPhone
          return (
            <SingleProduct
              key={index}
              description={description}
              heading={heading}
              link={link}
              name={name}
              features={features}
              pros={pros}
              cons={cons}
              summary={summary}
            />
          )
        })}
      </article>
    </section>
  )
}

export default Body
