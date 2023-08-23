import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Circle from './UI_Enhancers/Circle'
import { data } from '../data'
import robotHand from '../public/assets/images/robot_hand.png'
import { Link as ScrollLink } from 'react-scroll'
import Navbutton from './Navbutton'

interface HeaderProps {
  setIsNavigationChecked: React.Dispatch<React.SetStateAction<boolean>>
}
function Header({ setIsNavigationChecked }: HeaderProps) {
  return (
    <section className="relative bg-black">
      <div className="header-bg mx-auto text-white">
        <nav className="mx-auto flex max-w-90 items-center justify-between   pt-9 sm:max-w-[83%]  md:max-w-[85%] lg:max-w-70">
          <div className="flex items-center">
            {/* Logo */}
            <Image alt="logo" src="./assets/logo.svg" width={30} height={30} />
            <p className="ml-1 text-sm font-extrabold tracking-wider">
              Sandeep<span className="text-primary-clr">Amarnath</span>
            </p>
          </div>

          {/* nav links medium screen size and up*/}
          <div className="hidden items-center space-x-[2rem] text-sm md:flex md:space-x-10">
            <Link href={data.navlinks[1].link} target="_blank">
              <p>Github</p>
            </Link>

            {data.navlinks.slice(2).map((navLink) => {
              const { name, link } = navLink
              return (
                <ScrollLink key={name} to={link} smooth={true} duration={500}>
                  <p className="cursor-pointer">{name}</p>
                </ScrollLink>
              )
            })}
          </div>

          {/* navigation for small screen*/}
          <div className="flex items-center space-x-10 text-sm md:hidden">
            <Navbutton setIsNavigationChecked={setIsNavigationChecked} />
          </div>
        </nav>
        {/* after nav */}
        <article className="mx-auto mt-[7rem] flex max-w-90 items-end sm:mt-[10rem] sm:max-w-[83%]  md:max-w-[85%] lg:max-w-70">
          {/* left section */}
          <div data-aos="fade-right" className="mb-[5rem] flex-1 md:mx-auto">
            <p className="mb-5 max-w-fit rounded-lg bg-grey_gradient px-2 py-1 text-xs sm:mb-8 sm:text-sm">
              {data?.info?.header_pre_text}{' '}
            </p>
            <div className="relative flex flex-row">
              <h1 className="mb-6 w-10 text-5xl font-semibold leading-snug tracking-wider sm:mb-10 sm:text-6xl md:text-7xl">
                Sandeep{' '}
                <span className="bg-gradient bg-clip-text text-transparent">
                  Amarnath
                </span>
              </h1>
            </div>

            <p className="mb-10 text-sm leading-8 text-gray-300  sm:leading-9 md:max-w-[100%] md:text-base md:leading-10 lg:max-w-[58%]">
              {data?.info?.header_sub_text[0]},{' '}
              <span className="bg-gradient bg-clip-text font-extrabold text-transparent">
                {data?.info?.header_sub_text[1]}{' '}
              </span>
              {data?.info?.header_sub_text[2]}
            </p>

            <div className="flex flex-row space-x-10">
              <Link target="_blank" href={data.navlinks[0].link}>
                <button className="items-center justify-center rounded-lg bg-gradient px-4 py-2 text-xs text-black sm:text-sm md:text-base">
                  View Resume
                </button>
              </Link>

              <ScrollLink to="contact-section" smooth={true} duration={500}>
                <button className="delay-10 items-center justify-center rounded-lg border border-primary-clr px-4 py-2 text-xs transition hover:bg-gradient hover:text-black sm:text-sm md:text-base">
                  <div>
                    Get in touch{' '}
                    <span className="text-primary-clr"> &#8599; </span>
                  </div>
                </button>
              </ScrollLink>
            </div>
          </div>

          {/* right section */}
          <div data-aos="fade-left" className="absolute end-0 hidden lg:block">
            {/* circles - absolute */}
            <div className="absolute">
              <Circle size="sm" />
              <Circle size="lg" />
              <Circle size="md" />
            </div>
            {/* resume - absolute */}
            <div className="absolute lg:start-[10rem] lg:top-[-5rem]">
              <Link href={data.navlinks[0].link} target="_blank">
                <Image
                  src="./assets/images/view_resume.svg"
                  width={180}
                  height={580}
                  alt="resume"
                />
              </Link>
            </div>
            {/* robot hand */}
            <div className="lg:block">
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
        <div
          data-aos="fade-up"
          className="md:text-md m-auto mt-[2rem] flex max-w-[95%] flex-wrap items-center justify-center gap-7 pb-10 text-center leading-7 tracking-widest sm:mt-[5rem] sm:max-w-[83%] sm:justify-between sm:pb-10 md:mt-[6rem] md:max-w-[85%] lg:mt-[7rem] lg:max-w-70"
        >
          <div className="flex min-w-[15rem] items-center">
            <h2 className="text-xl sm:text-2xl">4+&nbsp;</h2>
            <h3 className="bg-gradient bg-clip-text text-sm text-transparent sm:max-w-[15rem] sm:text-sm md:text-base">
              YEARS OF FULL-STACK
            </h3>
          </div>

          <div className="flex min-w-[15rem] items-center">
            <h2 className="text-xl sm:text-2xl">4+&nbsp;</h2>
            <h3 className="bg-gradient bg-clip-text text-sm text-transparent sm:max-w-[15rem] sm:text-sm md:text-base">
              YEARS OF FRONT-END
            </h3>
          </div>

          <div className="flex min-w-[15rem] items-center">
            <h2 className="text-xl sm:text-2xl">2+&nbsp;</h2>
            <h3 className="bg-gradient bg-clip-text text-sm text-transparent sm:max-w-[15rem] sm:text-sm md:text-base">
              YEARS OF BACK-END
            </h3>
          </div>

          <div className="flex min-w-[15rem] items-center">
            <h2 className="text-xl sm:text-2xl">2+&nbsp;</h2>
            <h3 className="bg-gradient bg-clip-text text-sm text-transparent sm:max-w-[15rem] sm:text-sm md:text-base">
              YEARS OF MOBILE
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
