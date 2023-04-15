import React from 'react'
import { Link } from 'react-scroll'

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
    <article className="hidden h-fit border border-gray-500 p-5 font-light text-custom-blue shadow-sm dark:border-dark-yellow dark:text-dark-yellow lg:block">
      <nav className="mx-auto">
        <h2 className="mb-4 text-2xl font-bold text-custom-blue dark:text-white">
          Table of Contents
        </h2>
        <ul className="space-y-2">
          {products.map((product) => (
            <li
              key={product.name}
              className={
                'transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200'
              }
            >
              <Link
                href="#"
                className="cursor-pointer"
                offset={5}
                duration={500}
                spy
                smooth
                to={product.name}
              >
                {product.number} {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  )
}

export default TableOfContents
