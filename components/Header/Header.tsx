import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BGGradient from '../UI_Enhancers/MetallicBGGradient'
import Circle from '../UI_Enhancers/Circle'

function Header() {
  return (
    <section className="text-white">
      <BGGradient>
        <nav className="m-auto flex max-w-70 items-center justify-between pt-4">
          <div className="flex items-center">
            <Image alt="logo" src="./assets/logo.svg" width={30} height={30} />
            <p className="ml-1 text-sm font-extrabold tracking-wider">
              Sandeep<span className="text-primary-clr">Amarnath</span>
            </p>
          </div>
          <div className="flex space-x-7 text-sm">
            <Link href="www.google.com">Resume</Link>
            <Link href="www.google.com">Skills</Link>
            <Link href="www.google.com">Projects</Link>
            <Link href="www.google.com">Contact me</Link>
          </div>
        </nav>
        {/* after nav */}
        <article className="ml-[15%] mt-[9rem] flex">
          {/* left section */}
          <div className="mx-auto flex-1">
            <p className="mb-4 w-fit rounded-lg bg-grey_gradient px-2 py-1 text-sm">
              A versatile full stack web and mobile developer
            </p>

            <h1 className="mb-4 w-10 text-7xl font-semibold leading-snug tracking-wider">
              Sandeep{' '}
              <span className="bg-gradient bg-clip-text text-transparent">
                Amarnath
              </span>
            </h1>

            <p className="mb-10 max-w-90 leading-8">
              As an experienced Full Stack Developer,{' '}
              <span className="bg-gradient bg-clip-text font-extrabold text-transparent">
                I thrive on transforming ideas into fully functional
                applications
              </span>
              . With a holistic approach and proficiency in frontend and backend
              technologies, I create captivating user interfaces, architect
              robust backend systems, and seamlessly integrate them to deliver
              exceptional end-to-end solutions.
            </p>

            <button className="rounded-lg bg-gradient px-6 py-2 font-semibold text-black">
              View Resume
            </button>
          </div>

          {/* right section */}
          <div className="relative ml-auto">
            <Circle size="sm" />
            <Circle size="lg" />
            <Circle size="md" />
            <div className="absolute start-[20rem] top-[-3rem]">
              <Image
                src="./assets/images/view_resume.svg"
                width={180}
                height={580}
                alt="robot-hand"
              />
            </div>
            <Image
              src="./assets/images/robot_hand.svg"
              width={800}
              height={800}
              alt="robot-hand"
            />
          </div>
        </article>
      </BGGradient>
    </section>
  )
}

export default Header
