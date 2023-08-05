import { Fragment } from 'react'
import Header from '@/components/Header'
import Body from '@/components/Body'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Fragment>
      <Header />
      <Body />
    </Fragment>
  )
}
