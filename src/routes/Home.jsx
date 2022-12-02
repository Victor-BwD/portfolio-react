import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { Footer } from '../components/Footer/Footer'
import { Work } from '../components/Work/Work'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Work />
      <Footer />
    </div>
  )
}

export default Home;