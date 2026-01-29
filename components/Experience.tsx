'use client'

import { motion } from 'framer-motion'

export default function Experience() {
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
          <span className="glow text-xl md:text-2xl">[ ACTIVE MISSION LOGS ]</span>
          <div className="flex gap-3">
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ x: 10, boxShadow: '-5px 5px 0 #00FF41' }}
          className="border-2 border-phosphor-green p-6 bg-phosphor-green/5 transition-all duration-300"
        >
          <p className="glow text-2xl mb-4">▶ MISSION: MultiCloud Engineer</p>
          <p className="text-lg mb-2">&gt; ORGANIZATION: Cognizant</p>
          <p className="text-lg mb-2">&gt; TIMELINE: May 2025 – ACTIVE</p>
          <p className="text-lg mb-4">
            &gt; STATUS: <span className="text-phosphor-green animate-blink">● ONLINE</span>
          </p>
          
          <div className="space-y-2 text-base md:text-lg mt-6 border-t-2 border-phosphor-green/30 pt-4">
            <p>&gt; Collaborate within agile teams to deliver high-quality software solutions</p>
            <p>&gt; Maintain GitHub Actions pipelines and automate deployment tasks</p>
            <p>&gt; Leverage Bash and Python scripting to automate workflows</p>
            <p>&gt; Work with cloud-native architecture and DevOps practices</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
