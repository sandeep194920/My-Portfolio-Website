import React from 'react'
interface Props {
  products: [
    {
      name: string
      number: number
    }
  ]
}
function TableOfContents({ products }: Props) {
  return (
    <article className="hidden h-fit border border-gray-500 p-5 text-yellow-700 shadow-lg dark:border-dark-yellow dark:text-dark-yellow lg:block">
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
  )
}

export default TableOfContents
