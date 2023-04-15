import Header from '@/components/common/Header'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sandeep Amarnath&rsquo;s Blog</title>
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
      <main className={'mx-6 text-base md:mx-[7%]'}>
        <p>
          Welcome to my blog, where I share my thoughts and ideas on a variety
          of topics, including the best headphones, managing finances, and more.
          I hope you find the information here useful and informative.
        </p>
        <section className="mt-7">
          <Link
            href={'/info/tech/top-5-headphones-2023'}
            className="text-dark-yellow underline underline-offset-4"
          >
            1. 5 best wireless over ear headphones to buy in 2023
          </Link>
        </section>
      </main>
    </Fragment>
  )
}
