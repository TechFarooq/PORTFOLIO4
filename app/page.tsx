'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import SkillRadar from '@/components/skill-radar';
import TechStackSwitcher from '@/components/tech-stack-switcher';
import Projects from '@/components/projects';
import Timeline from '@/components/timeline';
import Resume from '@/components/resume';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Chatbot from '@/components/chatbot';
import { motion } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <SkillRadar />
        <TechStackSwitcher />
        <Projects />
        <Timeline />
        <CodePlayground />
        <Resume />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </div>
  );
}
