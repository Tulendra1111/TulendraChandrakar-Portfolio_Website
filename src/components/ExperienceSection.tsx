
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Link } from 'lucide-react';
import React from 'react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Web development Intern (Remote)",
      company: "COGNFYZ TECHNOLOGIES",
      duration: "June 2024 - August 2024",
      companyLink: "Link",
      responsibilities: [
        "Developed and enhanced the front-end of multiple web applications, ensuring a seamless and visually appealing user experience.",
        "Implemented responsive and accessible UI designs, enhancing cross-device compatibility and user interaction.",
        "Collaborated with cross-functional teams to refine user interfaces, optimize performance, and maintain high code quality.",
        "Utilized modern front-end technologies and frameworks to build dynamic, interactive, and scalable web solutions.",
        "Conducted thorough code reviews and provided constructive feedback, fostering best practices and improving overall development efficiency."
      ],
      technologies: ["Web Development", "UI/UX", "Frontend"]
    }
  ];

  return (
    <section id="experience" className="section-container bg-gradient-to-br from-portfolio-dark via-portfolio-dark-secondary to-portfolio-dark-accent pattern-bg">
      <div className="text-center mb-12 " >
        <Badge className="mb-4 bg-portfolio-indigo/20 text-portfolio-indigo hover:bg-portfolio-indigo/30 transition-colors border border-portfolio-indigo/30">My Journey</Badge>
        <h2 className="section-title mx-auto text-center text-white">Professional Experience</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          A timeline of my professional career and experiences in the tech industry
        </p>
      </div>
      
      <div className="mt-12 space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="glass-card overflow-hidden transform transition-all duration-300 hover:translate-y-[-5px]">
            <div className="h-2 bg-gradient-to-r from-portfolio-indigo to-purple-500"></div>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="bg-portfolio-indigo/20 p-2 rounded-full mr-3">
                      <Briefcase className="h-4 w-4 text-portfolio-indigo" />
                    </span>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  <div className="flex items-center text-gray-300 mt-1">
                    <span className="font-medium">{exp.company}</span>
                    <a href="https://drive.google.com/file/d/1K1py-dt9GyfUtmRBAq7SctcqkDO3QQCd/view?usp=sharing" className="ml-2 inline-flex items-center text-portfolio-indigo hover:text-portfolio-accent hover:underline text-sm">
                      <Link className="h-3 w-3 mr-1" /> {exp.companyLink}
                    </a>
                  </div>
                </div>
                <span className="text-sm text-gray-300 bg-gray-800/50 px-4 py-1.5 rounded-full inline-block font-medium border border-gray-600">
                  {exp.duration}
                </span>
              </div>
              
              <div className="space-y-3 mt-6">
                <h4 className="font-medium text-gray-300 mb-2">Key Responsibilities:</h4>
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="pl-4 border-l-2 border-portfolio-indigo/30 hover:border-portfolio-indigo transition-colors">
                    <p className="text-gray-300">{resp}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-portfolio-indigo/20 text-portfolio-indigo hover:bg-portfolio-indigo/30 transition-colors border border-portfolio-indigo/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
