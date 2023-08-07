import React from 'react'
import Services from './Services'
import Skills from './Skills'
import Projects from './Projects'

function Body() {
  return (
    <section className="bg-body_background text-white">
      <Services />
      <Skills />
      <Projects />
    </section>
  )
}

export default Body
