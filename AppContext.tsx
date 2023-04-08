import React, { createContext, ReactNode, useContext, useState } from 'react'

interface Props {
  children: ReactNode
}

const AppContext = createContext({ theme: 'light', changeTheme: () => {} })

const AppContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  const contextValues = {
    theme,
    changeTheme,
  }
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export default AppContextProvider
