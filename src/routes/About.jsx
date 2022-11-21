import React from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { HeroSectionGeneral } from '../components/HeroSectionGeneral/HeroSectionGeneral'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionGeneral heading="ABOUT" text="I'm a friendly front-end developer"/>
      <Footer />
    </div>
  )
}

export default About
