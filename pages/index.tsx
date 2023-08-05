import { Fragment } from 'react'
import Header from '@/components/Header'
import Body from '@/components/Body'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
import Head from 'next/head'
export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Sandeep Amarnath</title>
      </Head>
      <Header />
      <Body />
    </Fragment>
  )
}
