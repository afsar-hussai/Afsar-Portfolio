'use client'

import { motion } from 'framer-motion'

const skills = [
  { icon: '🐍', name: 'PYTHON' },
  { icon: '🐳', name: 'DOCKER' },
  { icon: '☸️', name: 'K8S' },
  { icon: '☁️', name: 'AWS' },
  { icon: '📜', name: 'BASH' },
  { icon: '⚙️', name: 'ANSIBLE' },
  { icon: '🔧', name: 'TERRAFORM' },
  { icon: '🔄', name: 'CI/CD' },
  { icon: '🐧', name: 'LINUX' },
  { icon: '📊', name: 'GRAFANA' },
  { icon: '🎯', name: 'HELM' },
  { icon: '🔍', name: 'PROMETHEUS' },
]

export default function Skills() {
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
          <span className="glow text-xl md:text-2xl">[ MODULES LOADED ]</span>
          <div className="flex gap-3">
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: '#00FF41',
                color: '#0D0208'
              }}
              className="border-2 border-phosphor-green bg-phosphor-green/10 p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-2">{skill.icon}</div>
              <div className="text-sm md:text-base text-center">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
