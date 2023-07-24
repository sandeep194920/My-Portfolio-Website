import { data } from '@/data'
import React from 'react'
import { GiBulletBill } from 'react-icons/gi'

function Services() {
  return (
    <article className="m-auto w-[70%] pt-16">
      <h2 className="mb-4 text-4xl font-extrabold tracking-wider">
        Software Services I offer
      </h2>

      {/* services cards */}
      <div className="mt-[4rem]">
        <div className="m-auto flex flex-wrap gap-[3.75rem]">
          {data.services.map(({ heading, services }, index) => {
            return (
              <div
                key={index}
                className="space-6 min-w-[22rem] max-w-[22rem] space-y-6 rounded-lg bg-card_background p-8"
              >
                <h3 className="text-center text-xl font-bold">{heading}</h3>
                <ul className="space-y-3 pl-4">
                  {services.map((link) => (
                    <div className="flex space-x-4" key={link}>
                      <GiBulletBill color="#5CE1E6" />
                      <li>{link}</li>
                    </div>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default Services
