'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip
} from 'recharts';

const skillData = [
  { skill: 'React', proficiency: 85 },
  { skill: 'Node.js', proficiency: 80 },
  { skill: 'MongoDB', proficiency: 75 },
  { skill: 'JavaScript', proficiency: 90 },
  { skill: 'Express.js', proficiency: 78 },
  { skill: 'HTML', proficiency: 95 },
  { skill: 'CSS', proficiency: 88 },
  { skill: 'Figma', proficiency: 70 },
];

export default function SkillRadar() {
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
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 dark:text-white">
            My Skill Overview
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interactive radar chart showing my proficiency across different technologies.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: '#D1D5DB', fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: '#9CA3AF', fontSize: 10 }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="proficiency"
                  stroke="rgb(147, 51, 234)" // fallback purple-500
                  fill="rgb(147, 51, 234)"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6',
                  }}
                  formatter={(value) => [`${value}%`, 'Proficiency']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
