import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Circle from '../UI_Enhancers/Circle'
import { data } from '../../data'
import { GiHamburgerMenu } from 'react-icons/gi'
import robotHand from '../../public/assets/images/robot_hand.png'

function Header() {
  return (
    <section className="header-bg text-white">
      <nav className="m-auto mt-9 flex max-w-[90%] items-center justify-between sm:max-w-[83%] md:max-w-[85%] lg:max-w-70">
        <div className="flex items-center">
          <Image alt="logo" src="./assets/logo.svg" width={30} height={30} />
          <p className="ml-1 text-sm font-extrabold tracking-wider">
            Sandeep<span className="text-primary-clr">Amarnath</span>
          </p>
        </div>
        <div className="hidden space-x-[2rem] text-sm sm:flex md:space-x-10">
          <Link href="www.google.com">Resume</Link>
          <Link href="www.google.com">Skills</Link>
          <Link href="www.google.com">Projects</Link>
          <Link href="www.google.com">Contact me</Link>
        </div>
        <div className="cursor-pointer sm:hidden">
          <GiHamburgerMenu size={22} />
        </div>
      </nav>
      {/* after nav */}
      <article className="mt-[7rem] flex items-end pl-[4%] sm:mt-[10rem] sm:pl-[9%] md:pl-[7%] lg:pl-[15%]">
        {/* left section */}
        <div className="mx-2 flex-1 pb-[7rem] md:mx-auto">
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

          <p className="mb-10 leading-8 text-gray-300 sm:max-w-[90%] md:max-w-[80%]">
            {data?.info?.header_sub_text[0]},{' '}
            <span className="bg-gradient bg-clip-text font-extrabold text-transparent">
              {data?.info?.header_sub_text[1]}{' '}
            </span>
            {data?.info?.header_sub_text[2]}
          </p>

          <div className="flex flex-row space-x-10">
            <Link target="_blank" href={data?.links?.resume}>
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
        <div className="relative">
          {/* circles - absolute */}
          <div className="absolute">
            <Circle size="sm" />
            <Circle size="lg" />
            <Circle size="md" />
          </div>
          {/* resume - absolute */}
          <div className="absolute md:start-[8rem] md:top-[-4rem] lg:start-[10rem] lg:top-[-5rem] ">
            <Link href={data?.links?.resume}>
              <Image
                src="./assets/images/view_resume.svg"
                width={180}
                height={580}
                alt="resume"
              />
            </Link>
          </div>
          {/* robot hand */}
          <div className="hidden sm:hidden md:block">
            <Image
              className="h-[30rem] w-[40rem] sm:max-w-sm lg:max-w-md xl:max-w-xl"
              src={robotHand}
              width={0}
              height={0}
              alt="robot-hand"
            />
          </div>
        </div>
      </article>
      {/* after main content in header */}
      <div className="text-md m-auto mt-[3.2rem] flex max-w-[90%] flex-wrap items-center justify-between gap-4 bg-orange-900 leading-7 tracking-widest sm:max-w-[83%] md:max-w-[85%] lg:max-w-70">
        <div className="m-auto flex flex-auto items-center justify-center space-x-12 bg-green-700">
          <div className="flex min-w-[12rem] items-center bg-orange-400">
            <h2 className="text-2xl">4+ &nbsp;</h2>
            <h3 className="max-w-[7rem] bg-gradient bg-clip-text text-transparent">
              YEARS OF FULL-STACK
            </h3>
          </div>

          <div>|</div>

          <div className="flex min-w-[12rem] items-center bg-orange-400">
            <h2 className="text-2xl">4+ &nbsp;</h2>
            <h3 className="max-w-[8rem] bg-gradient bg-clip-text text-transparent">
              YEARS OF FRONT-END
            </h3>
          </div>
        </div>
        {/* center divider */}
        <div>|</div>
        <div className="m-auto flex flex-auto items-center justify-center space-x-12 bg-red-400">
          <div className="flex min-w-[12rem] items-center bg-orange-400">
            <h2 className="text-2xl">2+ &nbsp;</h2>
            <h3 className="max-w-[7rem] bg-gradient bg-clip-text text-transparent">
              YEARS OF BACK-END
            </h3>
          </div>

          <div>|</div>

          <div className="flex min-w-[12rem] items-center bg-orange-400">
            <h2 className="text-2xl">4+ &nbsp;</h2>
            <h3 className="max-w-[7rem] bg-gradient bg-clip-text text-transparent">
              YEARS OF MOBILE
            </h3>
          </div>
        </div>
        {/* end divider - hide it*/}
        <div className="invisible">|</div>
      </div>
    </section>
  )
}

export default Header
