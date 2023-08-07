import { data } from '@/data'
import React from 'react'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'
import Cards from '../Cards'

function Services() {
  return (
    <>
      <Wrapper title="Software Services I offer">
        <Paragraph>{data.services_section.intro}</Paragraph>
      </Wrapper>

      {/* Service cards */}
      <Cards data={data.services_section.services} />
    </>
  )
}

export default Services
