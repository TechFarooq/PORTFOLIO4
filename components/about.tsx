'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 dark:text-white">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-300 dark:border-gray-700 shadow-md transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm <span className="text-purple-600 dark:text-purple-400 font-semibold">Umar Farooq</span>, a passionate Full Stack Developer specializing in the MERN stack.
                Currently pursuing my B.E. in Computer Science Engineering (2022–2026) from
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> Dhaanish Ahmed College of Engineering, Chennai</span>.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                As a fresher and departmental representative, I bring enthusiasm and dedication to every project.
                I'm an enthusiastic learner who stays updated with the latest technologies and best practices in web development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { label: '2022–2026', desc: 'B.E. CSE Student' },
                  { label: 'MERN', desc: 'Stack Developer' },
                  { label: 'Chennai', desc: 'Based in India' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-4 bg-white/30 dark:bg-gray-900/50 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

