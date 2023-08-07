import React from 'react'
import Image from 'next/image'
import github from '../public/assets/github1.png'
import web from '../public/assets/web.png'
import Link from 'next/link'

interface Props {
  name: string
  projectLink: string
  code: string
  coverImage: string
  techStack: string[]
  animation: string
}

const ProjectCard = (props: Props) => {
  const { name, code, projectLink, animation, coverImage, techStack } = props

  return (
    <div
      data-aos={animation}
      className="min-w-[19rem] max-w-[19rem] space-y-6 rounded-lg bg-card_background text-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] sm:min-w-[20rem] sm:max-w-[20rem] md:min-w-[22rem] md:max-w-[22rem]"
    >
      <div
        className="clip-path relative h-[22rem] rounded-tl-lg rounded-tr-lg bg-cover backdrop-blur-none"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'screen',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute bottom-3 flex w-full rotate-[-5deg] items-center justify-between bg-black bg-opacity-70">
          <Link href={code} target="_blank">
            <Image
              className="h-[2.2rem] w-[2.2rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem] lg:h-[3rem] lg:w-[3rem]"
              src={github}
              width={0}
              height={0}
              alt="github"
            />
          </Link>
          <Link href={projectLink} target="_blank">
            <Image
              className="h-[2.8rem] w-[2.8rem] sm:h-[3.5rem] sm:w-[3.5rem] md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem]"
              src={web}
              width={0}
              height={0}
              alt="web"
            />
          </Link>
        </div>
        <h4 className="absolute right-[0rem] top-[0rem] text-right text-xl font-thin uppercase sm:text-3xl">
          <span className="bg-black px-4 py-1">{name}</span>
        </h4>
      </div>
      <ul className="space-y-5 pb-2">
        {techStack.map((item) => (
          <div
            className="space-y-[1rem] text-xs sm:text-sm md:text-base"
            key={item}
          >
            <li className="mx-12">{item}</li>
            <div className="mx-auto w-[70%] border border-b-[1px] border-dashed border-gray-900"></div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ProjectCard
