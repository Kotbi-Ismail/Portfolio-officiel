import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Introduction */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-200 mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kotbi Ismail</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Full Stack Developer passionate about creating beautiful and functional web applications
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/Kotbi-Ismail"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ismail-kotbi-43a010330/"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kotbi.ismail1@gmail.com"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Section: Profile Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src="../photo moi.jpg"
              alt="Kotbi Ismail Profile Picture"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
