import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { Footer } from '../components/Footer/Footer'
import { TopProjects } from '../components/Work/TopProjects'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopProjects />
      <Footer />
    </div>
  )
}

export default Home;