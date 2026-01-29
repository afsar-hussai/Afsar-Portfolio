'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('> MESSAGE_TRANSMITTED\n> STATUS: SUCCESS\n> RESPONSE_EXPECTED: 24-48 HOURS')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a')
    link.href = '/Mohd_Afsar_Hussain.pdf'
    link.download = 'Mohd_Afsar_Hussain_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto border-2 border-phosphor-green p-8 md:p-12 bg-dark-bg/90 backdrop-blur-sm glow-box"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b-2 border-phosphor-green pb-4 mb-8">
          <span className="glow text-xl md:text-2xl">[ TRANSMIT SIGNAL ]</span>
          <div className="flex gap-3">
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-lg">
          <div>
            <label className="glow block mb-2">&gt; INPUT_NAME:</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-2 border-phosphor-green text-phosphor-green p-3 font-vt323 text-lg focus:outline-none focus:shadow-[0_0_10px_#00FF41] transition-all"
            />
          </div>

          <div>
            <label className="glow block mb-2">&gt; INPUT_EMAIL:</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-2 border-phosphor-green text-phosphor-green p-3 font-vt323 text-lg focus:outline-none focus:shadow-[0_0_10px_#00FF41] transition-all"
            />
          </div>

          <div>
            <label className="glow block mb-2">&gt; INPUT_MESSAGE:</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-2 border-phosphor-green text-phosphor-green p-3 font-vt323 text-lg focus:outline-none focus:shadow-[0_0_10px_#00FF41] transition-all resize-vertical"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-phosphor-green bg-transparent text-phosphor-green hover:bg-phosphor-green hover:text-dark-bg transition-all duration-300 hover:animate-glitch"
          >
            TRANSMIT_MESSAGE
          </motion.button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t-2 border-phosphor-green">
          <p className="glow text-xl md:text-2xl mb-6">&gt; COMMUNICATION_CHANNELS:</p>
          <div className="space-y-2 text-base md:text-lg">
            <p>
              &gt; EMAIL: <a href="mailto:afsarhussain2200@gmail.com" className="underline hover:glow transition-all">afsarhussain2200@gmail.com</a>
            </p>
            <p>&gt; PHONE: <span>8374470432</span></p>
            <p>
              &gt; LINKEDIN: <a href="https://linkedin.com/in/mohdafsarhussain" target="_blank" rel="noopener noreferrer" className="underline hover:glow transition-all">linkedin.com/in/mohdafsarhussain</a>
            </p>
            <p>
              &gt; GITHUB: <a href="https://github.com/afsar-hussai" target="_blank" rel="noopener noreferrer" className="underline hover:glow transition-all">github.com/afsar-hussai</a>
            </p>
          </div>

          {/* Download Resume Button */}
          <div className="mt-8">
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-phosphor-green bg-transparent text-phosphor-green hover:bg-phosphor-green hover:text-dark-bg transition-all duration-300 hover:animate-glitch text-lg"
            >
              📄 DOWNLOAD_RESUME.PDF
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
