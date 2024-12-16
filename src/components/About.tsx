import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Hi, I'm Ismail, a web developer who enjoys building and exploring web technologies. 
            I’ve always been passionate about solving problems through clean, functional design and efficient code.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Outside of web development, I run a small bookstore where I offer school supplies and internet services. 
            This entrepreneurial venture has taught me the importance of balancing technical skills with practical needs.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            When I’m not working, I enjoy discovering new anime, brainstorming creative ideas, and staying curious about how technology can make everyday life easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
