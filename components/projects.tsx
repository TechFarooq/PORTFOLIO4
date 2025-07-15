'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Website',
    image: 'https://tse3.mm.bing.net/th/id/OIP.lsndKSe-9cza8tRr-wPUvQHaE8?pid=Api&P=0&h=220',
    link: 'http://recycling-app-i699.vercel.app',
    github: 'https://github.com/TechFarooq/recycling-app',
  },
  {
    title: 'Portfolio',
    image: 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/539/2024/10/pexels-ann-h-45017-14936128-1024x683.jpg',
    link: 'https://portfolio3-hazel.vercel.app',
    github: 'https://github.com/TechFarooq/portfolio2',
  },
  {
    title: 'Smart Cart',
    image: 'https://img.freepik.com/premium-photo/smart-cart-online-shop-logo-design-ecommerce-concept_664969-1260.jpg',
    link: 'https://smart-cart-ai-2bib.vercel.app/',
    github: 'https://github.com/TechFarooq/SmartCart-AI',
  },
  {
    title: 'MERN Food App',
    image: 'https://geekbea.com/wp-content/uploads/2023/07/Food-Delivery-App.jpg',
    link: 'https://portfolio-3-three-tau.vercel.app/',
    github: 'https://github.com/TechFarooq/MERN',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-400"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white"
                      title="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
