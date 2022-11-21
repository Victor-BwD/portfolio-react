import React from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { HeroSectionGeneral } from '../components/HeroSectionGeneral/HeroSectionGeneral'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionGeneral heading="CONTACT" text="Let's have a chat..."/>
      <Footer />
    </div>
  )
}

export default Contact
