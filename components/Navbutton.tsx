import { data } from '@/data'
import Link from 'next/link'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { scroller } from 'react-scroll'

interface NavbuttonProps {
  setIsNavigationChecked: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbutton({ setIsNavigationChecked }: NavbuttonProps) {
  const handleButtonClick: React.MouseEventHandler<HTMLElement> = () => {
    setIsNavigationChecked((prev: boolean) => !prev)
  }

  function handleScroll(to: string) {
    // Call the scrollTo function to scroll to a specific section
    // timeout added here so that the element is visible once the link is clicked. This is required because the link-click enables hidden checkbox check, which then should enable this scroll (otherwise the "element not found" happens and won't scroll to the location)
    setTimeout(() => {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
      })
    }, 400)
  }

  /* Mobile navigation */
  return (
    <div className="navigation">
      {/* hidden checkbox which is necessary as this is done in css way. When hamburger button is clicked then this checkbox is clicked and css styles apply (look at css checkbox selected one) */}
      <input
        type="checkbox"
        className="navigation__checkbox invisible absolute top-0"
        id="navi-toggle"
      />

      <label
        htmlFor="navi-toggle"
        className="navigation__button"
        onClick={handleButtonClick}
      >
        <div className="w-6 cursor-pointer flex-col space-y-1 ease-in-out hover:space-y-2">
          <div className="h-0.5 origin-center bg-white"></div>
          <div className="h-0.5 bg-white"></div>
          <div className="h-0.5 origin-center bg-white"></div>
        </div>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        {/* navitoggle button */}
        <label
          htmlFor="navi-toggle"
          className="navigation__button absolute right-10 top-10"
          onClick={handleButtonClick}
        >
          <div className="relative w-6 cursor-pointer flex-col items-center justify-center">
            <div className="top-0 h-0.5 rotate-45 bg-red-400"></div>
            <div className="-mt-0.5 h-0.5 -rotate-45 bg-red-400"></div>
          </div>
        </label>

        {/* navlinks for small screen */}
        <ul className="navigation__list flex h-[100%] flex-col items-center justify-center">
          <li className="navigation__item">
            <Link
              href={data.navlinks[0].link}
              target="_blank"
              className="navigation__link"
            >
              Resume
            </Link>
          </li>

          {data.navlinks.slice(1).map((navLink) => {
            const { name, link } = navLink
            return (
              <li
                key={name}
                className="navigation__item"
                onClick={() => handleScroll(link)}
              >
                <label
                  htmlFor="navi-toggle"
                  className="navigation__button navigation__link"
                  onClick={(e) => {
                    handleButtonClick(e)
                    handleScroll(link)
                  }}
                >
                  {name}
                </label>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbutton
