import React from 'react'
import Services from './Services'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './Contact'

function Body() {
  return (
    <section className="bg-body_background text-white">
      <Services />
      <Skills />
      <Projects />
      <ContactMe />
    </section>
  )
}

export default Body
