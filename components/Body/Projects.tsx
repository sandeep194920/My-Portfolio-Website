import React, { Fragment } from 'react'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'
import { data } from '@/data'
import ProjectCards from '../ProjectCards'

function Projects() {
  return (
    <div id="projects">
      <Wrapper title="My Projects">
        <Paragraph>
          {data.projects_section.intro.map((text, index) => {
            return (
              <Fragment key={index}>
                {text}
                <br></br>
              </Fragment>
            )
          })}
        </Paragraph>
      </Wrapper>
      <ProjectCards />
    </div>
  )
}

export default Projects
