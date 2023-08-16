import React from 'react'

interface NavbuttonProps {
  setIsNavigationChecked: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbutton({ setIsNavigationChecked }: NavbuttonProps) {
  const handleButtonClick: React.MouseEventHandler<HTMLLabelElement> = () => {
    setIsNavigationChecked((prev: boolean) => !prev)
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
        {/* <span className="navigation__icon">&nbsp;</span> */}
        <div className="w-6 cursor-pointer flex-col space-y-1 ease-in-out hover:space-y-2">
          <div className="h-0.5 origin-center bg-white"></div>
          <div className="h-0.5 bg-white"></div>
          <div className="h-0.5 origin-center bg-white"></div>
        </div>
      </label>
      {/* white circular bg for navigation icon to sit on  */}
      <div className="navigation__background">&nbsp;</div>
      {/* navigation__nav is the huge element that occupies the screen when the navigation__button is clicked  */}
      <nav className="navigation__nav">
        {/* navitoggle button */}
        <label
          htmlFor="navi-toggle"
          className="navigation__button absolute right-10 top-10"
          onClick={handleButtonClick}
        >
          {/* <span className="navigation__icon">&nbsp;</span> */}
          <div className="relative w-6 cursor-pointer flex-col items-center justify-center">
            <div className="top-0 h-0.5 rotate-45  bg-red-400"></div>
            <div className="-mt-0.5 h-0.5 -rotate-45 bg-red-400"></div>
          </div>
        </label>

        {/*  */}
        {/* <ul className="navigation__list m-auto justify-center bg-red-400"> */}
        <ul className="navigation__list flex h-[100%] flex-col items-center justify-center">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Resume
            </a>
          </li>

          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Services
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Skills
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbutton
