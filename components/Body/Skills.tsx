import React from 'react'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'
import { data } from '@/data'

function Skills() {
  return (
    <Wrapper title="My Skills">
      <Paragraph>{data.skills_section.intro}</Paragraph>
    </Wrapper>
  )
}

export default Skills
