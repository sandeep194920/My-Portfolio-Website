import { useTheme } from 'next-themes'
import Image from 'next/image'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useState, useEffect } from 'react'

function Header() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return (
        <BsSun
          className="cursor-pointer text-2xl text-dark-secondary"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <BsMoon
          className="cursor-pointer text-2xl text-white"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return (
    <header className="mb-10 bg-gradient-to-r from-dark-primary to-blue-800 p-6">
      <div className="flex items-center justify-between md:mx-28">
        <div>
          <Image
            src="/svg/logo-no-background.svg"
            alt="my-info-tech logo"
            width={100}
            height={75}
          />
        </div>
        {renderThemeChanger()}
      </div>
    </header>
  )
}

export default Header
