import React, { ReactNode } from 'react'

interface BlurProps {
  children: ReactNode
}

const Blur: React.FC<BlurProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="bg-gradient-metal absolute inset-0"></div>
      <div className="h-[100vh] bg-image bg-cover bg-center">{children}</div>
    </div>
  )
}

export default Blur
