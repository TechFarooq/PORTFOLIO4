'use client';

import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Umar Farooq. All rights reserved.</p>

        <div className="flex space-x-5">
          <a
            href="https://github.com/TechFarooq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/umar-farooq-s-b8819b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/_farooq_.6?igsh=d3MzdTNqcGZvbDd1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/FAROOQ0917?t=7fMfTg-1IUOYyxzdP3TlNw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
