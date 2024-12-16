import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Kotbi-Ismail/Task-Management-App/",
    live: "https://task-manager-ismail.netlify.app/"
  },
  {
    title: "Weather App",
    description: "A weather dashboard",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Kotbi-Ismail/wetherApp",
    live: "https://ismail-wetherapp.netlify.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">
          Projects
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4 justify-center">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
