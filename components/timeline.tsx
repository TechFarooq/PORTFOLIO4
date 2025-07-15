'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: ' 2022',
    title: 'Started B.E. CSE',
    description: 'Joined Dhaanish Ahmed College of Engineering to pursue Computer Science Engineering.'
  },
  {
    year: ' 2023',
    title: 'Built First Full Stack Project',
    description: 'Developed a CRUD app using MERN stack with authentication and validation.'
  },
  {
    year: ' 2024',
    title: 'Internship at Prodigy InfoTech',
    description: 'Worked on real-time chat app, e-commerce, and CRUD dashboard.'
  },
  {
    year: ' 2025',
    title: 'Final Year Projects & Portfolios',
    description: 'Focusing on AI chatbot, study coach tools, and preparing for placements.'
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Journey
        </h2>
        <div className="relative border-l border-gray-700 pl-6 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-3 top-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-gray-800 shadow-md" />

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  <span className="text-orange-400">{item.year}</span> — {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
