import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Volunteer | Meta stack",
      date: "January 2025 - February 2025",
      demoLink: "https://mern-stack-volunteer.vercel.app/",
      githubLink: "https://github.com/Tulendra1111/MERN-STACK-VOLUNTEER-WebSite.git",
      description: "Designed and implemented a volunteer and donation platform to connect donors, volunteers, and nonprofits.",
      features: [
        "Developed structured workflows for users to donate funds, contribute resources, and register for volunteering.",
        "Provided nonprofits with tools for campaign management, donation tracking, and volunteer coordination.",
        "Created an intuitive and accessible interface to enhance user engagement and improve interaction across stakeholders.",
        "Optimized platform performance and scalability to ensure real-time updates and efficient handling of a growing user base."
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      title: "Job Sewa",
      date: "September 2024 - October 2024",
      demoLink: "https://job-sewa.vercel.app/",
      githubLink: "https://github.com/Tulendra1111/JOB_SEWA.git",
      description: "Developed a comprehensive job portal to connect skilled workers with employers and optimize hiring.",
      features: [
        "Implemented features for workers to create profiles, highlight expertise, and track applications in real time.",
        "Designed a structured system for employers to post jobs, filter candidates, and manage applications efficiently.",
        "Addressed key industry challenges by enhancing job accessibility and improving recruitment efficiency.",
        "Delivered a secure, scalable, and user-friendly solution with advanced search functionalities and seamless deployment."
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Git"]
    },
    {
      title: "Speech Synthesis Application",
      date: "July 2024 - August 2024",
      demoLink: "https://text-to-speech-synthesis-application.vercel.app/",
      githubLink: "https://github.com/Tulendra1111/Text_to_Speech_Synthesis_Application.git",
      description: "Designed and developed a web application for speech synthesis using the Web Speech API.",
      features: [
        "Implemented features for users to control playback, adjust parameters like volume, pitch, and rate, and select different voices for customization.",
        "Enhanced user engagement by creating an intuitive and responsive interface using HTML, CSS, and JavaScript.",
        "Integrated customizable playback controls, leading improvement in user retention by enhancing personalization options.",
        "Added multilingual support to expand usability for diverse user groups."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Web Speech API"]
    }
  ];

  return (
    <section id="projects" className="section-container bg-gradient-to-br from-portfolio-dark via-portfolio-dark-secondary to-portfolio-dark-accent pattern-bg overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f115_1px,transparent_1px),linear-gradient(to_bottom,#6366f115_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="text-center mb-12 relative z-10">
        <Badge className="mb-4 bg-gradient-to-r from-portfolio-indigo/20 to-portfolio-accent/20 text-portfolio-indigo hover:from-portfolio-indigo/30 hover:to-portfolio-accent/30 transition-all duration-300 backdrop-blur-sm border border-portfolio-indigo/30 px-4 py-2">
          My Work
        </Badge>
        <h2 className="section-title mx-auto text-center text-white">Featured Projects</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          A selection of my recent work, personal projects and client collaborations
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card flex flex-col h-full hover:shadow-2xl transition duration-500 group overflow-hidden transform hover:scale-[1.02] border border-white/10">
            <div className="h-2 bg-gradient-to-r from-portfolio-indigo via-portfolio-accent to-portfolio-tertiary"></div>
            <CardContent className="flex-grow p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-gradient-to-br from-portfolio-indigo/20 to-portfolio-accent/20 rounded-lg group-hover:from-portfolio-indigo/30 group-hover:to-portfolio-accent/30 transition-all duration-300">
                  <Folder className="h-6 w-6 text-portfolio-indigo group-hover:text-portfolio-accent transition-colors" />
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">
                  {project.date}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-portfolio-indigo transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mt-2 mb-4">
                <h4 className="font-medium text-gray-200 text-sm mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 pl-4 border-l border-gray-700/50 hover:border-portfolio-indigo/50 hover:text-gray-200 transition-colors">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="text-xs border-portfolio-indigo/30 text-portfolio-indigo hover:border-portfolio-indigo/50 hover:bg-portfolio-indigo/10 transition-all bg-gray-800/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="border-t border-gray-700/50 flex justify-between p-4 bg-gray-900/30">
              <Button variant="outline" size="sm" className="text-xs hover:bg-portfolio-indigo/20 hover:text-portfolio-indigo transition-all duration-300 backdrop-blur-sm group border-gray-600 text-gray-300 hover:border-portfolio-indigo/50" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1 text-portfolio-indigo group-hover:text-portfolio-accent transition-colors" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" className="text-xs hover:bg-portfolio-indigo/20 hover:text-portfolio-indigo transition-all duration-300 backdrop-blur-sm group border-gray-600 text-gray-300 hover:border-portfolio-indigo/50" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1 text-portfolio-indigo group-hover:text-portfolio-accent transition-colors" />
                  Source Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
