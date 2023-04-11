import React from 'react'
import { Roboto_Slab } from 'next/font/google'
import SingleProduct from './SingleProduct'
import Card from './Card'
// If loading a variable font, you don't need to specify the font weight
const inter = Roboto_Slab({
  subsets: ['latin'],
})

function Template1({ data }) {
  const { products, heading, intro } = data
  return (
    <section className={'mx-6 text-base  md:mx-8'}>
      <article className="mx-0  leading-10 md:mx-24 md:max-w-[72%]">
        <h1
          dangerouslySetInnerHTML={{ __html: heading }}
          className={`mb-3 text-3xl font-semibold uppercase leading-10 tracking-wide ${inter.className} `}
        ></h1>

        <p dangerouslySetInnerHTML={{ __html: intro }}></p>
        {/* CARDS */}
        <div className="grid-auto-rows-min grid max-h-full justify-center justify-items-center gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {products.map((product) => {
            console.log('The product is', product)
            const {
              number,
              cardFeatures,
              images: { card },
              name,
              bestOverall,
              price,
            } = product
            return (
              <div key={number} className="mt-4">
                <Card
                  cardFeatures={cardFeatures}
                  image={card}
                  name={name}
                  bestOverall={bestOverall}
                  price={price}
                />
              </div>
            )
          })}
        </div>
        {/* Products */}
        <main>
          {products.map((product, index) => {
            const {
              name,
              heading,
              link,
              description,
              pros,
              cons,
              features,
              summary,
            } = product
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
                separator={index === products.length - 1 ? false : true}
              />
            )
          })}
        </main>
      </article>
    </section>
  )
}

export default Template1
