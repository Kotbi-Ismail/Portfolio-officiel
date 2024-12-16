import React from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Vue", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-600 dark:text-white hover:bg-blue-200 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
