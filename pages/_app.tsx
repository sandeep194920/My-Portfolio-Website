import AppContextProvider from '@/AppContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
// import { Poppins, Roboto } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
// const poppins = Poppins({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// })

// const roboto = Roboto({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeProvider>
  )
}
