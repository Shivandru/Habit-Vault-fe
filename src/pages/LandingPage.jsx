import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Feature'
import HowItWorks from '../components/sections/HowItWorks'
import CTA from '../components/sections/CTA'
import Footer from '../components/layout/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
