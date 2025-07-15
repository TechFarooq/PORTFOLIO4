'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const techStacks = ['MERN', 'MEVN', 'JAMstack', 'LAMP'];

export default function TechStackSwitcher() {
  const [activeStack, setActiveStack] = useState('MERN');

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Tech Stack Switcher</h2>
      <div className="flex gap-4 mb-6">
        {techStacks.map((stack) => (
          <motion.button
            key={stack}
            onClick={() => setActiveStack(stack)}
            className={`px-4 py-2 rounded-lg ${
              activeStack === stack
                ? 'bg-primary-500 text-white'
                : 'bg-gray-700 text-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {stack}
          </motion.button>
        ))}
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-lg">You selected: <strong>{activeStack}</strong></p>
        <p className="mt-2 text-gray-400">
          {activeStack === 'MERN' && 'MongoDB, Express, React, Node.js'}
          {activeStack === 'MEVN' && 'MongoDB, Express, Vue, Node.js'}
          {activeStack === 'JAMstack' && 'JavaScript, APIs, and Markup'}
          {activeStack === 'LAMP' && 'Linux, Apache, MySQL, PHP'}
        </p>
      </div>
    </div>
  );
}
