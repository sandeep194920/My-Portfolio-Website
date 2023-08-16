import { Fragment, useState } from 'react'
import Header from '@/components/Header'
import Body from '@/components/Body'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
import Head from 'next/head'
import Footer from '@/components/Footer'
export default function Home() {
  const [isNavigationChecked, setIsNavigationChecked] = useState(false)

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Sandeep Amarnath</title>
      </Head>
      <Header setIsNavigationChecked={setIsNavigationChecked} />
      {isNavigationChecked && (
        <>
          <Body isNavigationChecked={isNavigationChecked} />
          <Footer />
        </>
      )}
    </Fragment>
  )
}
