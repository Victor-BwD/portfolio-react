import React from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { HeroSectionGeneral } from '../components/HeroSectionGeneral/HeroSectionGeneral'
import { WorkCard } from '../components/WorkCards/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionGeneral heading="PROJECTS" text="Some of my recent works"/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Project;
