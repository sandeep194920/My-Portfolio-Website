import React, { ReactNode } from 'react'

interface BlurProps {
  children: ReactNode
}

const Blur: React.FC<BlurProps> = ({ children }) => {
  return <div className="bg-gradient-metal">{children}</div>
}

export default Blur
