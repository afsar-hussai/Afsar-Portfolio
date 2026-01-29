'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import CRTOverlay from '@/components/CRTOverlay'
import ProgressBar from '@/components/ProgressBar'
import SoundToggle from '@/components/SoundToggle'
import ThreeBackground from '@/components/ThreeBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CRTOverlay />
      <ProgressBar />
      <SoundToggle />
      <ThreeBackground />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 py-8 mb-12"
        >
          <div className="border-2 border-phosphor-green p-6 text-center bg-dark-bg/90 backdrop-blur-sm">
            <p className="glow text-xl mb-4">════════════════════════════════════════════</p>
            <p className="text-lg mb-2">SYSTEM.VERSION: 1.0.0 | BUILD_DATE: 2026.01.29</p>
            <p className="text-base">© 2026 AFSAR.SYS | ALL RIGHTS RESERVED</p>
            <p className="glow text-xl mt-4">════════════════════════════════════════════</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
