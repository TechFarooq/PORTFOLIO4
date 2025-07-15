'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 dark:text-white">
            Resume
          </h2>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements.
          </p>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <motion.div
                className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FileText className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Resume
              </h3>

              <p className="text-gray-300 mb-8">
                Get a comprehensive overview of my technical skills, education, projects, and professional journey as a Full Stack Developer.
              </p>
            </div>

            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/Resume1.pdf', '_blank')}

            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
