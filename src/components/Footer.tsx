
import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Link } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-portfolio-navy to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">Tulendra Chandrakar</h3>
            <p className="text-indigo-200 mt-2">Computer Science Engineer & Software Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/Tulendra1111" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/tulendra-chandrakar-095973223" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://leetcode.com/u/Tulendra2001/" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors" title="LeetCode">
              <Code className="h-5 w-5" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/tulendrachandrakar1111/?_gl=1*nv5t0u*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw8pKxBhD_ARIsAPrG45kqxnggL9a8En-NWacWeANBtYThWRuPWP83jMUPUvwtNvYkTgaascwaAomPEALw_wcB" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors" title="GeeksforGeeks">
              <Link className="h-5 w-5" />
            </a>
            <a href="mailto:tulendrachandrakar1111@gmail.com" className="text-indigo-200 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-center md:text-left">
            <a href="#about" className="text-indigo-200 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-indigo-200 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-indigo-200 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-indigo-200 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-indigo-200 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-indigo-800/50 mt-8 pt-8 text-center text-indigo-300 text-sm">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} Tulendra Chandrakar.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
