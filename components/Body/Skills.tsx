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
import Cards from '../Cards'

function Skills() {
  return (
    <>
      <Wrapper title="My Skills">
        <Paragraph>{data.skills_section.intro}</Paragraph>
        <div className="mb-8 justify-center sm:flex-wrap xl:flex xl:space-x-6">
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
      </Wrapper>
      <Cards data={data.skills_section.skills} />
    </>
  )
}

export default Skills
