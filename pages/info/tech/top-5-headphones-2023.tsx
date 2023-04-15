import React, { Fragment } from 'react'
import { data } from '@/data/info/tech/top-5-headphones-2023'
import Header from '@/components/common/Header'
import Head from 'next/head'
// import Template1 from '@/components/template1/Template1'

function TopHeadphones() {
  return (
    <Fragment>
      <Head>
        <title>
          The 5 Best Headphones in 2023 - Our Top Picks for Audio Quality and
          Comfort
        </title>
        <meta
          name="description"
          content="Discover the 5 best headphones of 2023 - handpicked by our experts for their superior sound quality, comfortable design, and cutting-edge features. Read our in-depth reviews and find the perfect headphones for you."
        />
        <meta
          name="keywords"
          content="headphones, wireless headphones, best headphones, top headphones, 2023 headphones, audio quality, comfortable design, noise-cancelling headphones, bluetooth headphones"
        />
        <meta name="author" content="Sandeep Amarnath" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com/best-headphones-2023" />
        <meta property="og:title" content="The 5 Best Headphones in 2023" />
        <meta
          property="og:description"
          content="Discover the top 5 headphones of 2023 - handpicked by our experts for audio quality and comfort."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0A1929" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <Header />
      {/* <Template1 data={data} /> */}
    </Fragment>
  )
}

export default TopHeadphones
