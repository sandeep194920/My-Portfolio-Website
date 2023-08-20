import { data } from '@/data'
import Link from 'next/link'
import React from 'react'
import {
  BsNewspaper,
  BsStackOverflow,
  BsLinkedin,
  BsMedium,
  BsGithub,
} from 'react-icons/bs'

import { BiBookAlt } from 'react-icons/bi'

interface IconMapping {
  [key: string]: JSX.Element // Define the index signature
}

const iconMapping: IconMapping = {
  BsNewspaper: <BsNewspaper size={18} />,
  BsStackOverflow: <BsStackOverflow size={18} />,
  BsMedium: <BsMedium size={18} />,
  BsLinkedin: <BsLinkedin size={15} />,
  BsGithub: <BsGithub size={18} />,
  BiBookAlt: <BiBookAlt size={18} />,
}

function getIcon(iconName: string) {
  return iconMapping[iconName]
}

function Footer() {
  return (
    <footer className="relative flex items-center justify-center bg-primary-clr bg-opacity-50 text-xs text-white sm:text-sm">
      {/* row */}
      <div className="m-auto mb-[3rem] mt-10 flex w-[90%] flex-col items-center justify-center gap-11 sm:mb-[3rem] sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-start lg:justify-center">
        {data.footerLinks.map((footerLink) => {
          const { name, icon, link } = footerLink
          return (
            <Link
              key={name}
              className="delay-400 mb-10 flex items-center space-x-3 hover:scale-110"
              href={link}
              target="_blank"
            >
              {getIcon(icon)}
              <span>{name}</span>
            </Link>
          )
        })}
      </div>
      <div className="absolute bottom-1 text-xs">
        &copy; Sandeep Amarnath, 2023
      </div>
    </footer>
  )
}

export default Footer
