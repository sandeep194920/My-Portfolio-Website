import { data } from '@/data'
import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

function ProjectCards() {
  return (
    <section className="max-w-100 mx-auto overflow-hidden pt-[1rem] tracking-wide sm:max-w-[83%] sm:pt-[1.5rem] md:max-w-[85%] lg:max-w-70">
      <div className="flex flex-wrap justify-center gap-[4rem] sm:justify-start sm:gap-6  md:gap-12  lg:gap-16  xl:gap-14 ">
        {data.projects_section.projects.map((project) => {
          return <ProjectCard key={project.name} {...project} />
        })}
      </div>
      <div className="mt-[3rem] flex justify-center">
        <Link target="_blank" href={'https://github.com/sandeep194920/'}>
          <button className="items-center justify-center rounded-lg border border-primary-clr px-6 py-3 text-xs sm:text-sm md:text-base">
            <div>View More Projects</div>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default ProjectCards
