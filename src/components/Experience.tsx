import React from 'react';

const experiences = [
  {
    company: "Alpha Networks",
    position: "Software Developer Intern",
    period: "July 2024 - August 2024",
    description: "Learned Vue, Kotlin, and Swift while contributing to a checkout form project using Vue. Collaborated with the team to meet project goals efficiently."
  }
];

const education = [
  {
    institution: "High School",
    program: "Baccalauréat",
    period: "September 2022 - June 2023",
    description: "Completed high school studies."
  },
  {
    institution: "OFPPT",
    program: "Vocational Training in Web Development - Year 1",
    period: "September 2023 - June 2024",
    description: "Built foundational skills in web development, focusing on HTML, CSS, and JavaScript,PHP and SQl."
  },
  {
    institution: "OFPPT",
    program: "Vocational Training in Web Development - Year 2",
    period: "September 2024 - Present",
    description: "Focused on full-stack web development, learning technologies like ExpressJs, NodeJs, ReactJs, and Laravel."
  }
];


const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">{exp.position}</h3>
                <div className="text-gray-600 dark:text-gray-400">{exp.period}</div>
              </div>
              <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">{edu.program}</h3>
                <div className="text-gray-600 dark:text-gray-400">{edu.period}</div>
              </div>
              <div className="text-blue-600 font-medium mb-2">{edu.institution}</div>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
