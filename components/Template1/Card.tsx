import Image from 'next/image'
import { BsCheck } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

interface Props {
  name: string
  image: string
  price: string
  cardFeatures: {
    pros: string[]
    cons: string[]
  }
  bestOverall?: boolean
}

function Card({ name, image, cardFeatures, bestOverall, price }: Props) {
  console.log('The card features', name, image, bestOverall)
  return (
    <div className="mt-7 min-w-max max-w-sm">
      {bestOverall && <BestOverall />}

      <div className="mb-6 flex max-w-sm flex-col overflow-hidden rounded-md shadow-xl dark:bg-gradient-to-br dark:from-dark-card dark:to-blue-800">
        <header className="w-full bg-custom-blue p-1 text-center  text-white dark:bg-transparent dark:text-white">
          <h3 className="text-lg">{name}</h3>
        </header>
        <div className="max-h-[60rem] min-h-[60rem] overflow-auto">
          <Image
            src={image}
            height={644}
            width={644}
            alt="Apple"
            className="h-[34rem]"
          />

          <div className="text-center">
            <h5 className="font-semibold text-orange-700 shadow-2xl dark:text-orange-200">
              US ${price}
            </h5>
          </div>

          <div className="ml-8 mt-2">
            {/* PROS */}
            <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">
              Positives
            </h4>
            <ul>
              {cardFeatures.pros.map((pro, index) => {
                return (
                  <li key={index} className="flex items-center space-x-2">
                    <BsCheck className="text-green-700 dark:text-green-300" />
                    <p>{pro}</p>
                  </li>
                )
              })}
            </ul>
            {/* CONS */}
            <h4 className="text-lg font-semibold text-red-700 dark:text-red-300">
              Negatives
            </h4>

            <ul>
              {cardFeatures.cons.map((con, index) => {
                return (
                  <li key={index} className="flex items-center space-x-2">
                    <FiX className="text-base text-red-700 dark:text-red-300" />
                    <p>{con}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <a href="">
          <div className="text:white mx-auto my-2 max-w-90 cursor-pointer rounded-md bg-orange-300 py-1 text-center dark:text-dark-blue">
            View Product
          </div>
        </a>
      </div>
    </div>
  )
}

export default Card

const BestOverall = () => {
  return (
    <div className="mb-1 flex items-center">
      <hr className="mx-auto my-4 w-1/5 border-t-2 border-green-900 dark:border-green-300" />
      <div className="flex items-center space-x-2 text-green-900 dark:text-green-300">
        <AiFillStar />
        <p>Best Overall</p>
      </div>
      <hr className="mx-auto my-4 w-1/5 border-t-2 border-green-900 dark:border-green-300" />
    </div>
  )
}
