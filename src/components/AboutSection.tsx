
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container pattern-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-indigo/20 to-portfolio-secondary/30 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4338ca1a_1px,transparent_1px),linear-gradient(to_bottom,#4338ca1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-portfolio-indigo/20 text-portfolio-indigo hover:bg-portfolio-indigo/30 transition-colors border border-portfolio-indigo/30">About Me</Badge>
          <h2 className="section-title mx-auto text-center text-white">Get to Know Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            A passionate developer with a focus on creating beautiful, functional, and user-friendly applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <Card className="col-span-2 glass-card group hover:border-portfolio-secondary overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-portfolio-indigo transition-colors">Professional Profile</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I am a Computer Science and Engineering graduate from Vellore Institute of Technology, with a passion for building 
                innovative web applications. With experience in full-stack development, I focus on creating responsive, accessible 
                and user-friendly interfaces.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My development approach combines modern technologies with robust engineering practices to deliver high-performance, 
                scalable solutions. I enjoy collaborating with cross-functional teams to optimize code quality and enhance user experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card group hover:border-portfolio-secondary transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-portfolio-indigo transition-colors">Education</h3>
              <div className="mb-6 p-4 border border-portfolio-secondary/30 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 hover:shadow-md transition-all duration-300 group-hover:border-portfolio-accent/50">
                <p className="font-medium text-white">Vellore Institute of Technology, Bhopal</p>
                <p className="text-sm text-gray-400">Bachelor of Technology in Computer Science and Engineering</p>
                <div className="flex justify-between mt-2">
                  <p className="text-sm text-gray-400">Aug. 2021 - Present</p>
                  <p className="text-sm font-medium text-portfolio-indigo">CGPA: 7.79</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-4 text-white group-hover:text-portfolio-indigo transition-colors">Additional Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-2 group-hover:animate-pulse"></span>
                  <span className="text-gray-300">Member at Microsoft Technical Club, VIT Bhopal</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-portfolio-indigo rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300">Member at Web Development Club, VIT Bhopal</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-portfolio-indigo rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-300">Hacker rank C++ 3 star, GFG</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
