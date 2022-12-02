import React from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { HeroSectionGeneral } from '../components/HeroSectionGeneral/HeroSectionGeneral'
import { AboutContent } from '../components/About/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionGeneral heading="ABOUT" text="I'm a friendly developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
