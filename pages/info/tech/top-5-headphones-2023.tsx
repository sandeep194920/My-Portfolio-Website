import React, { Fragment } from 'react'
import Template1 from '@/components/template1'
import { data } from '@/data/info/tech/top-5-headphones-2023'
import Header from '@/components/common/Header'

function TopHeadphones() {
  return (
    <Fragment>
      <Header />
      <Template1 data={data} />
    </Fragment>
  )
}

export default TopHeadphones
