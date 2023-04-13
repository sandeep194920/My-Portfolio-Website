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
    <main className={'mx-6 flex  text-base md:mx-9'}>
      <article className="mx-0  leading-10 md:mx-10 md:max-w-[75%]">
        <h1
          dangerouslySetInnerHTML={{ __html: heading }}
          className={`mb-3 text-3xl font-semibold uppercase leading-10 tracking-wide ${inter.className} `}
        ></h1>

        <p dangerouslySetInnerHTML={{ __html: intro }}></p>
        {/* CARDS */}
        <div className="grid-auto-rows-min grid max-h-full justify-center justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
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
      <article className="dark:border-dark-yellow dark:text-dark-yellow h-fit border border-gray-500 p-5 text-yellow-700 shadow-lg">
        <nav className="mx-auto">
          <h2 className="mb-4 text-2xl font-bold text-custom-blue dark:text-white">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {products.map((product) => (
              <li
                key={product.name}
                className={
                  'font-semibold transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200'
                }
              >
                <a href={`#`}>
                  {product.number} {product.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  )
}

export default Template1
