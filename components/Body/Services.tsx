import { data } from '@/data'
import React from 'react'
import { GiBulletBill } from 'react-icons/gi'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'

function Services() {
  return (
    <Wrapper title="Software Services I offer">
      <Paragraph>
        As a passionate software engineer with years of experience, I take pride
        in offering a range of top-notch software services to meet your business
        needs. Whether you are a startup looking to build a cutting-edge
        application or an established company seeking to optimize your
        processes, I have got you covered.
      </Paragraph>

      {/* Skill cards */}
      <div>
        <div className="m-auto flex flex-wrap gap-[3.5rem]">
          {data.services_section.services.map(
            ({ heading, services, animation }, index) => {
              return (
                <div
                  data-aos={animation}
                  key={index}
                  className="space-6 min-w-[22rem] max-w-[22rem] space-y-6 rounded-lg bg-card_background p-8"
                >
                  <h3 className="text-start text-xl font-bold">{heading}</h3>
                  <ul className="space-y-3 pl-4">
                    {services.map((link) => (
                      <div className="flex items-center space-x-4" key={link}>
                        <GiBulletBill color="#5CE1E6" />
                        <li>{link}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              )
            }
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Services
