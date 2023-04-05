import Image from 'next/image'

function Header() {
  return (
    <header className="mb-10 bg-gradient-to-r from-dark-primary to-dark-primary-1 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/svg/logo-no-background.svg"
            alt="my-info-tech logo"
            width={100}
            height={75}
          />
        </div>
        <div>Theme</div>
      </div>
    </header>
  )
}

export default Header
