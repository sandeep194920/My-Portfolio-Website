import React from 'react'
import { GiBulletBill } from 'react-icons/gi'

interface Item {
  skill: string
  percent: number
}

interface CardData {
  heading: string
  items: string[] | Item[]
  animation: string
}

interface Props {
  data: CardData[]
}

function isStringArray(arr: string[] | Item[]): arr is string[] {
  return typeof arr[0] === 'string'
}

function Cards({ data }: Props) {
  return (
    <section className="max-w-100 mx-auto overflow-hidden pt-[1rem] tracking-wide sm:max-w-[83%] sm:pt-[1.5rem] md:max-w-[85%] lg:max-w-70">
      <div className="flex flex-wrap justify-center gap-[2rem] sm:justify-start sm:gap-6  md:gap-12  lg:gap-16  xl:gap-14 ">
        {data.map(({ heading, items, animation }, index) => {
          return (
            <div
              data-aos={animation}
              key={index}
              className="min-w-[19rem] max-w-[19rem] space-y-6 rounded-lg bg-card_background p-4 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] sm:min-w-[20rem] sm:max-w-[20rem] sm:p-8 md:min-w-[22rem] md:max-w-[22rem]"
            >
              <h3 className="text-start text-lg font-bold md:text-xl">
                {heading}
              </h3>
              {!isStringArray(items) ? (
                <ul className="space-y-5">
                  {items.map(({ skill, percent }) => (
                    <div
                      className="flex items-center text-xs sm:text-sm md:text-base"
                      key={skill}
                    >
                      <div className="flex flex-1 items-center space-x-3">
                        <GiBulletBill color="#5CE1E6" />
                        <div className="flex">
                          <li className="w-[7rem]">{skill}</li>
                        </div>

                        <div className="relative h-3 w-[7rem] overflow-hidden rounded-md bg-gray-200">
                          <div
                            className="absolute left-0 top-0 h-full bg-cyan-500 opacity-100"
                            style={{ width: `${percent}%` }}
                          ></div>
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xs font-bold text-white opacity-100 sm:text-sm">
                            {percent}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-5">
                  {items.map((link) => (
                    <div
                      className="flex flex-1 items-center space-x-3 text-xs sm:text-sm md:text-base"
                      key={link}
                    >
                      <GiBulletBill color="#5CE1E6" />
                      <li>{link}</li>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Cards
