import Image from 'next/image'
import { BiRightArrow } from 'react-icons/bi'

interface Props {
  description: string[]
  heading: string
  link: string
  number: number
  name: string
  features?: string[]
  pros?: string[]
  cons?: string[]
  summary: string
  separator?: boolean
  images?: string[]
}

function SingleProduct(props: Props) {
  const {
    description,
    heading,
    link,
    name,
    features,
    pros,
    cons,
    summary,
    separator,
    images,
    number,
  } = props
  return (
    <article className="mb-10 mt-6">
      {/* heading */}
      <h2 id={name} className="mb-2 text-2xl font-semibold">
        <a target="_blank" href={link}>
          {number}. {heading}
        </a>
      </h2>
      {/* description */}
      <div className="space-y-2">
        {description.map((desc) => (
          <p dangerouslySetInnerHTML={{ __html: desc }} key={desc}></p>
        ))}
      </div>
      {/* images */}
      <div className="my-3 flex space-x-9">
        {images &&
          images.map((img, index) => {
            return (
              <Image
                src={img}
                height={444}
                width={455}
                key={index}
                alt="headphone"
              />
            )
          })}
      </div>

      {/* features */}
      {features && (
        <div className="my-5 space-y-2">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400">
            Features of {name}
          </h3>
          <ul className="ml-3 space-y-2">
            {features.map((feature, index) => {
              return (
                <div key={index}>
                  <BiRightArrow className="mr-1 inline text-lg" />
                  <li
                    className="inline"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  />
                </div>
              )
            })}
          </ul>
        </div>
      )}

      {/* Pros */}
      {pros && (
        <div className="my-5 space-y-2">
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
            Pros of {name}
          </h3>
          <ul className="ml-3  space-y-2">
            {pros.map((pro, index) => {
              return (
                <div key={index}>
                  <BiRightArrow className="mr-1 inline text-lg" />
                  <li
                    className="inline"
                    dangerouslySetInnerHTML={{ __html: pro }}
                  />
                </div>
              )
            })}
          </ul>
        </div>
      )}

      {/* Cons */}
      {cons && (
        <div className="my-5 space-y-2">
          <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">
            Cons of {name}
          </h3>
          <ul className="ml-3 space-y-2">
            {cons.map((con, index) => {
              return (
                <div key={index}>
                  <BiRightArrow className="mr-1 inline text-lg" />
                  <li
                    className="inline"
                    dangerouslySetInnerHTML={{ __html: con }}
                  />
                </div>
              )
            })}
          </ul>
        </div>
      )}
      {/* Summary */}
      <div className="mb-4 italic">
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      </div>
      {/* Call to action button */}
      <a href={link} target="_blank">
        <div className="my-5 inline-block rounded-md bg-blue-800 px-4 py-1 text-white hover:bg-dark-yellow">
          Checkout {name}
        </div>
      </a>
      {separator && (
        <div className="border border-b-gray-500 dark:border-b-yellow-100"></div>
      )}
    </article>
  )
}

export default SingleProduct
