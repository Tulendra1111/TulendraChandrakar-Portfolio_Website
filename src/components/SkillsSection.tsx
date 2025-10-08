
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy } from 'lucide-react';
import React from 'react';

const SkillsSection: React.FC = () => {
  const technicalSkills = {
    languages: ['C++', 'Python', 'Java', 'DSA', 'MySQL', 'HTML/CSS', 'JavaScript'],
    frameworks: ['React.js', 'React Router', 'Rest API', 'Node.js', 'Next.js', 'Express.js', 'Swing', 'Spring Boot'],
    tools: ['Git', 'Google Cloud Platform', 'Vercel', 'Netlify'],
    roles: ['Software Developer', 'Mern Stack Developer', 'Front end Developer']
  };

  const certifications = [
    { 
      name: 'High-performance Coding (DSA using C++)', 
      link: 'Verify',
      url: 'https://drive.google.com/file/d/15XwLEdMNoRpRTXh55w0rspovXuGtoH_J/view?usp=drivesdk'
    }
  ];
  const certification2 = [
    { 
      name: 'Google Cloud Digital Leader', 
      link: 'Verify',
      url: 'https://drive.google.com/file/d/1AK8asOp1uq_K5pK1Mm6EtEALdNqQNR-a/view?usp=drivesdk' // Replace with actual badge URL
    }
  ];

  return (
    <section id="skills" className="section-container bg-gradient-to-br from-portfolio-dark via-portfolio-dark-secondary to-portfolio-dark-accent pattern-bg">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-portfolio-indigo/20 text-portfolio-indigo hover:bg-portfolio-indigo/30 transition-colors border border-portfolio-indigo/30">My Expertise</Badge>
        <h2 className="section-title mx-auto text-center text-white">Skills & Certifications</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mt-4">
          A collection of my technical skills, tools, and professional certifications
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <Card className="glass-card h-full transform transition-all duration-300 hover:translate-y-[-5px]">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="bg-portfolio-indigo/20 p-2 rounded-full mr-3">
                <Trophy className="h-5 w-5 text-portfolio-indigo" />
              </span>
              Technical Skills
            </h3>
            
            <div className="mb-8">
              <h4 className="font-medium text-gray-300 mb-3 border-b border-gray-600 pb-1">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill, index) => (
                  <Badge key={index} variant="outline" className="hover:bg-gray-700/50 transition-colors py-1.5 border-gray-600 hover:border-portfolio-indigo/50 text-gray-300 font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium text-gray-300 mb-3 border-b border-gray-600 pb-1">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((skill, index) => (
                  <Badge key={index} variant="outline" className="hover:bg-gray-700/50 transition-colors py-1.5 border-gray-600 hover:border-portfolio-indigo/50 text-gray-300 font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium text-gray-300 mb-3 border-b border-gray-600 pb-1">Tools/OS</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill, index) => (
                  <Badge key={index} variant="outline" className="hover:bg-gray-700/50 transition-colors py-1.5 border-gray-600 hover:border-portfolio-indigo/50 text-gray-300 font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-300 mb-3 border-b border-gray-600 pb-1">Roles</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.roles.map((skill, index) => (
                  <Badge key={index} variant="outline" className="hover:bg-gray-700/50 transition-colors py-1.5 border-gray-600 hover:border-portfolio-indigo/50 text-gray-300 font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card h-full transform transition-all duration-300 hover:translate-y-[-5px]">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="bg-portfolio-indigo/20 p-2 rounded-full mr-3">
                <Award className="h-5 w-5 text-portfolio-indigo" />
              </span>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-gray-600 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <p className="text-gray-300 font-medium mb-2">{cert.name}</p>
                  <a 
                    href={cert.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-indigo hover:text-portfolio-accent text-sm font-medium transition-colors hover:underline"
                  >
                    {cert.link} →
                  </a>
                </div>
              ))}
              {certification2.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-gray-600 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <p className="text-gray-300 font-medium mb-2">{cert.name}</p>
                  <a 
                    href={cert.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-indigo hover:text-portfolio-accent text-sm font-medium transition-colors hover:underline"
                  >
                    {cert.link} →
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
