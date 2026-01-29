'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Automated Cloud Resource Tracker',
    tech: 'Bash, AWS CLI, LocalStack, Cron',
    timeline: 'January 2026',
    status: 'COMPLETED',
    description: [
      'Engineered Bash-based automation tool for AWS resource auditing (EC2, S3, Lambda, IAM)',
      'Integrated LocalStack for cost-effective cloud environment simulation',
      'Implemented automated reporting via Cron jobs with JSON/text outputs'
    ],
    link: 'https://github.com/afsar-hussai/automated-cloud-resource-tracker'
  },
  {
    title: '100 Days of DevOps Challenge',
    tech: 'Linux, Docker, Kubernetes, Ansible, Python',
    timeline: 'January 2025 – ONGOING',
    status: 'IN_PROGRESS',
    description: [
      'Daily documentation of technical journey covering cloud architecture',
      'Building mini-projects with Docker networking and K8s pod management',
      'Sharing insights on LinkedIn and X to contribute to DevOps community'
    ],
    link: 'https://github.com/afsar-hussai/100-Days-of-Devops-Challenge'
  }
]

export default function Projects() {
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
          <span className="glow text-xl md:text-2xl">[ PROJECT DATABASE ]</span>
          <div className="flex gap-3">
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
            <div className="w-3 h-3 border-2 border-phosphor-green"></div>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ x: 10, boxShadow: '-5px 5px 0 #00FF41' }}
              className="border-2 border-phosphor-green p-6 bg-phosphor-green/5 transition-all duration-300"
            >
              <p className="glow text-xl md:text-2xl mb-4">▶ {project.title}</p>
              <p className="text-base md:text-lg mb-2">&gt; TECH_STACK: {project.tech}</p>
              <p className="text-base md:text-lg mb-2">&gt; TIMELINE: {project.timeline}</p>
              <p className="text-base md:text-lg mb-4">
                &gt; STATUS: {project.status === 'IN_PROGRESS' ? (
                  <span className="text-phosphor-green animate-blink">● {project.status}</span>
                ) : project.status}
              </p>
              
              <div className="space-y-2 mt-6 border-t-2 border-phosphor-green/30 pt-4">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-sm md:text-base">&gt; {desc}</p>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 border-2 border-phosphor-green bg-transparent text-phosphor-green hover:bg-phosphor-green hover:text-dark-bg transition-all duration-300 hover:animate-glitch"
              >
                VIEW_ON_GITHUB
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
