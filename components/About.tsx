'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

export default function About() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto border-2 border-phosphor-green p-8 md:p-12 bg-dark-bg/90 backdrop-blur-sm glow-box"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b-2 border-phosphor-green pb-4 mb-8">
          <span className="glow text-xl md:text-2xl">[ SYSTEM SPECIFICATIONS ]</span>
          <div className="flex gap-3">
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
          </div>
        </div>

        <motion.div variants={itemVariants} className="space-y-3 text-lg md:text-xl">
          <p>&gt; <span className="glow">USER_ID:</span> Mohd Afsar Hussain</p>
          <p>&gt; <span className="glow">CLASSIFICATION:</span> Software Engineer</p>
          <p>&gt; <span className="glow">EDUCATION_UNIT:</span> V.N.R VJIET College, Hyderabad</p>
          <p>&gt; <span className="glow">DEGREE:</span> B.Tech in Electronics and Communication Engineering</p>
          <p>&gt; <span className="glow">PERFORMANCE_INDEX:</span> 8.46 CGPA [2020-2024]</p>
          <p>&gt; <span className="glow">CURRENT_MISSION:</span> MultiCloud Engineer @ Cognizant</p>
          <p>&gt; <span className="glow">SPECIALIZATION:</span> Cloud & DevOps Infrastructure</p>
          
          <motion.div variants={itemVariants} className="pt-6 opacity-80 border-t-2 border-phosphor-green/30 mt-6">
            <p className="leading-relaxed">
              Detail-oriented Software Engineer with a strong foundation in automation and infrastructure. 
              Currently specializing in Cloud & DevOps through a rigorous "100 Days of DevOps" challenge. 
              Proficient in Python, Bash, and Linux, with hands-on experience in Docker, Kubernetes, and AWS. 
              Passionate about building automated, scalable systems and streamlining CI/CD workflows to enhance deployment efficiency.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
