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
        <article className="m-auto mt-[8rem] flex">
          <div className="mx-auto">
            <h1 className="w-10 text-6xl font-semibold leading-snug tracking-wider">
              Sandeep{' '}
              <span className="bg-gradient bg-clip-text text-transparent">
                Amarnath
              </span>
            </h1>
          </div>
          <div className="relative ml-auto">
            <Circle size="sm" />
            <Circle size="md" />
            <Circle size="lg" />

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
