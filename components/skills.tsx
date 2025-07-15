'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Java', color: 'bg-orange-500' },
  { name: 'JavaScript', color: 'bg-yellow-500' },
  { name: 'HTML', color: 'bg-orange-600' },
  { name: 'CSS', color: 'bg-blue-500' },
  { name: 'React', color: 'bg-cyan-500' },
  { name: 'Node.js', color: 'bg-green-500' },
  { name: 'Express.js', color: 'bg-gray-500' },
  { name: 'MongoDB', color: 'bg-green-600' },
  { name: 'Tailwind CSS', color: 'bg-teal-500' },
  { name: 'Email.js', color: 'bg-red-500' },
  { name: 'WebSocket', color: 'bg-purple-500' },
  { name: 'Figma', color: 'bg-pink-500' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="text-center">
                <div className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-300">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}