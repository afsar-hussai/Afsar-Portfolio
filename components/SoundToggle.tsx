'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      onClick={() => setSoundEnabled(!soundEnabled)}
      className="fixed bottom-6 right-6 z-[1001] bg-dark-bg border-2 border-phosphor-green px-4 py-2 text-phosphor-green font-vt323 text-lg hover:bg-phosphor-green hover:text-dark-bg transition-all duration-300"
    >
      {soundEnabled ? '🔊 SOUND: ON' : '🔇 SOUND: OFF'}
    </motion.button>
  )
}
