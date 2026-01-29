'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "User: Afsar Hussain | Role: Software Engineer | System Status: ONLINE"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full border-2 border-phosphor-green p-8 md:p-12 bg-dark-bg/90 backdrop-blur-sm glow-box"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b-2 border-phosphor-green pb-4 mb-8">
          <span className="glow text-xl md:text-2xl">SYSTEM INITIALIZED</span>
          <div className="flex gap-3">
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
          </div>
        </div>

        {/* ASCII Art */}
        <pre className="glow text-[6px] md:text-[8px] mb-8 overflow-x-auto leading-tight">
{` █████╗ ███████╗███████╗ █████╗ ██████╗    ███████╗██╗   ██╗███████╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗   ██╔════╝╚██╗ ██╔╝██╔════╝
███████║█████╗  ███████╗███████║██████╔╝   ███████╗ ╚████╔╝ ███████╗
██╔══██║██╔══╝  ╚════██║██╔══██║██╔══██╗   ╚════██║  ╚██╔╝  ╚════██║
██║  ██║██║     ███████║██║  ██║██║  ██║██╗███████║   ██║   ███████║
╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   ╚══════╝`}
        </pre>

        {/* Typewriter Text */}
        <div className="text-xl md:text-2xl lg:text-3xl space-y-2 glow font-vt323">
          <p>&gt; INITIALIZING SYSTEM...</p>
          <p>&gt; LOADING USER PROFILE...</p>
          <div className="mt-4">
            <p>
              {displayText}
              {showCursor && <span className="inline-block w-2 h-5 bg-phosphor-green ml-1 animate-blink"></span>}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
