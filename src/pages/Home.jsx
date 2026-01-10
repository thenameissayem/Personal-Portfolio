import React from 'react'
import ThemeToggle from '@/Components/ThemeToggle'
import StarBackground from '@/Components/StarBackground'
import Navbar from '@/Components/Navbar'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='min-h-dvh bg-background text-foreground overflow-x-hidden'>
    {/*Theme Toggle*/}
    <ThemeToggle />
    {/*BAckground effects*/}
    <StarBackground />
    {/* Navbar */}
    <Navbar />
    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
    {/* Footer */}
    <Footer />
    </div>
  )
}

export default Home