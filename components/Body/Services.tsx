import { data } from '@/data'
import React from 'react'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'
import Cards from '../Cards'

function Services() {
  return (
    <>
      <Wrapper title="Software Services I offer">
        <Paragraph>
          As a passionate software engineer with years of experience, I take
          pride in offering a range of top-notch software services to meet your
          business needs. Whether you are a startup looking to build a
          cutting-edge application or an established company seeking to optimize
          your processes, I have got you covered.
        </Paragraph>
      </Wrapper>

      {/* Service cards */}
      <Cards data={data.services_section.services} />
    </>
  )
}

export default Services
