import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Circle from '../UI_Enhancers/Circle'
import { data } from '../../data'

function Header() {
  return (
    <section className="header-bg text-white">
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
            {data?.info?.header_pre_text}{' '}
          </p>
          <div className="relative flex flex-row">
            <h1 className="mb-4 w-10 text-7xl font-semibold leading-snug tracking-wider">
              Sandeep{' '}
              <span className="bg-gradient bg-clip-text text-transparent">
                Amarnath
              </span>
            </h1>
          </div>

          <p className="mb-10 max-w-90 leading-8 text-gray-300">
            {data?.info?.header_sub_text[0]},{' '}
            <span className="bg-gradient bg-clip-text font-extrabold text-transparent">
              {data?.info?.header_sub_text[1]}{' '}
            </span>
            {data?.info?.header_sub_text[2]}
          </p>

          <div className="flex flex-row space-x-10">
            <Link target="_blank" href={data?.links?.resume}>
              {/* <button className="rounded-lg bg-gradient px-6 py-2 font-semibold text-black"> */}
              <button className="items-center justify-center rounded-lg border-0 border-primary-clr bg-gradient px-4 py-2 text-black">
                View Resume
              </button>
            </Link>

            <button className="items-center justify-center rounded-lg border-2 border-primary-clr px-4 py-2">
              <div>
                Get in touch <span className="text-primary-clr"> &#8599; </span>
              </div>
            </button>
          </div>
        </div>

        {/* right section */}
        <div className="relative ml-auto">
          <Circle size="sm" />
          <Circle size="lg" />
          <Circle size="md" />
          <div className="absolute start-[20rem] top-[-3rem]">
            <Link href={data?.links?.resume}>
              <Image
                src="./assets/images/view_resume.svg"
                width={180}
                height={580}
                alt="resume"
              />
            </Link>
          </div>
          <Image
            src="./assets/images/robot_hand.svg"
            width={800}
            height={800}
            alt="robot-hand"
          />
        </div>
      </article>
      {/* after main content in header */}
      <div className="flex"></div>
    </section>
  )
}

export default Header
