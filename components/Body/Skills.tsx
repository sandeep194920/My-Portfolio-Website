import React from 'react'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'
import { data } from '@/data'
import rings from '../../public/assets/images/skills/rings.svg'
import mongo from '../../public/assets/images/skills/backend/mongo-db.png'
import python from '../../public/assets/images/skills/backend/python.png'
import sql from '../../public/assets/images/skills/backend/sql.png'
import node from '../../public/assets/images/skills/backend/nodejs.png'
import html from '../../public/assets/images/skills/frontend/html.png'
import css from '../../public/assets/images/skills/frontend/css.png'
import sass from '../../public/assets/images/skills/frontend/sass.png'
import javascript from '../../public/assets/images/skills/frontend/javascript.png'
import jquery from '../../public/assets/images/skills/frontend/jquery.png'
import react from '../../public/assets/images/skills/frontend/react.png'
import tailwind from '../../public/assets/images/skills/frontend/tailwind.png'
import typescript from '../../public/assets/images/skills/frontend/typescript.png'
import Image from 'next/image'
import { GiBulletBill } from 'react-icons/gi'

function Skills() {
  return (
    <Wrapper title="My Skills">
      <div className="justify-center sm:flex-wrap xl:flex xl:space-x-6">
        <Paragraph>{data.skills_section.intro}</Paragraph>
        {/* rings image */}
        <div className="skill-graphic relative flex justify-center">
          <Image
            className="h-[35rem] w-[35rem] sm:max-w-sm lg:max-w-md xl:max-w-xl"
            src={rings}
            width={0}
            height={0}
            alt="skills"
          />
          {/* backend */}
          <div className="skill skill-be node">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={node}
              width={0}
              height={0}
              alt="node"
            />
          </div>
          <div className="skill skill-be sql">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={sql}
              width={0}
              height={0}
              alt="sql"
            />
          </div>
          <div className="skill skill-be python">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={python}
              width={0}
              height={0}
              alt="python"
            />
          </div>
          <div className="skill skill-be mongo">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={mongo}
              width={0}
              height={0}
              alt="mongo"
            />
          </div>
          <div className="skill skill-fe html">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={html}
              width={0}
              height={0}
              alt="html"
            />
          </div>

          <div className="skill skill-fe css">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={css}
              width={0}
              height={0}
              alt="css"
            />
          </div>

          <div className="skill skill-fe sass">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={sass}
              width={0}
              height={0}
              alt="sass"
            />
          </div>
          <div className="skill skill-fe js">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={javascript}
              width={0}
              height={0}
              alt="javascript"
            />
          </div>

          <div className="skill skill-fe jquery">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={jquery}
              width={0}
              height={0}
              alt="jquery"
            />
          </div>

          <div className="skill skill-fe tailwind">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={tailwind}
              width={0}
              height={0}
              alt="tailwind"
            />
          </div>

          <div className="skill skill-fe ts">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={typescript}
              width={0}
              height={0}
              alt="typescript"
            />
          </div>

          <div className="skill skill-fe react">
            <Image
              className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
              src={react}
              width={0}
              height={0}
              alt="react"
            />
          </div>
        </div>
      </div>
      {/* skills details */}
      <div className="mt-[5rem]">
        <div className="m-auto flex flex-wrap gap-[3.5rem]">
          {data.skills_section.skills.map(
            ({ heading, skills, animation }, index) => {
              // skill
              return (
                <div
                  data-aos={animation}
                  key={index}
                  className="space-6 min-w-[22rem] max-w-[22rem] space-y-6 rounded-lg bg-card_background p-8"
                >
                  <h3 className="text-start text-xl font-bold">{heading}</h3>
                  <ul className="space-y-5 pl-4">
                    {skills.map(({ skill, percent }) => (
                      <div className="flex items-center" key={skill}>
                        <div className="flex flex-1 items-center space-x-3">
                          <GiBulletBill color="#5CE1E6" />
                          <div className="flex">
                            <li className="w-[7rem]">{skill}</li>
                          </div>

                          {/* percentage */}
                          <div className="relative h-3 w-[7rem] overflow-hidden rounded-md bg-gray-200">
                            <div
                              className="absolute left-0 top-0 h-full bg-cyan-500 opacity-100"
                              style={{ width: `${percent}%` }}
                            ></div>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 transform text-sm font-bold text-white opacity-100">
                              {percent}%
                            </div>
                          </div>
                        </div>
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

export default Skills
