import React from 'react'
import { Roboto_Slab } from 'next/font/google'
import Card from '../common/Card'
import SingleProduct from './SingleProduct'
import TableOfContents from '../common/TableOfContents'
import PostDetails from '../common/PostDetails'
// If loading a variable font, you don't need to specify the font weight
const inter = Roboto_Slab({
  subsets: ['latin'],
})

function Template1({ data }) {
  const { products, heading, intro } = data
  return (
    <main className={'mx-6 flex  text-base md:mx-9'}>
      <article className="mx-0  leading-10 md:mx-10 lg:max-w-[75%]">
        <h1
          dangerouslySetInnerHTML={{ __html: heading }}
          className={`mb-3 text-3xl font-semibold uppercase leading-10 tracking-wide ${inter.className} `}
        ></h1>
        {/* Post Details */}
        <PostDetails lastUpdated="March 3, 2022" />
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
              number,
              features,
              summary,
              images: { all },
            } = product
            return (
              <SingleProduct
                key={index}
                description={description}
                heading={heading}
                link={link}
                name={name}
                number={number}
                features={features}
                pros={pros}
                cons={cons}
                summary={summary}
                separator={index === products.length - 1 ? false : true}
                images={all}
              />
            )
          })}
        </main>
      </article>
      <TableOfContents products={products} />
    </main>
  )
}

export default Template1
