
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-portfolio-dark via-portfolio-dark-secondary to-portfolio-dark-accent py-20 md:py-32 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-indigo/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-portfolio-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-200"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-portfolio-tertiary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-400"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f115_1px,transparent_1px),linear-gradient(to_bottom,#6366f115_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-32 left-20 text-4xl animate-float">⚛️</div>
        <div className="absolute top-48 right-32 text-3xl animate-float animation-delay-200">🚀</div>
        <div className="absolute bottom-32 left-32 text-4xl animate-float animation-delay-400">💻</div>
        <div className="absolute bottom-48 right-20 text-3xl animate-float animation-delay-600">⚡</div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Logo/Profile Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img src="\public\MyPhoto.jpg" alt="TC image" className="w-24 h-24 animate-glow" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-portfolio-dark flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          {/* Badge */}
          <div className="inline-block relative mb-6 p-2 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-indigo to-portfolio-accent rounded-lg opacity-75 blur"></div>
            <span className="relative bg-portfolio-dark-secondary/90 backdrop-blur-sm px-4 py-2 rounded-full text-portfolio-indigo text-sm font-medium border border-portfolio-indigo/30">
              Computer Science & Engineering
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white opacity-0 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-portfolio-indigo to-portfolio-accent">
            Tulendra Chandrakar
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl opacity-0 animate-fade-in-delay-1">
            A passionate <span className="text-portfolio-indigo font-semibold">Web Developer</span> and <span className="text-portfolio-accent font-semibold">Full Stack Engineer</span> crafting beautiful and functional digital experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-10 justify-center opacity-0 animate-fade-in-delay-2">
            <Button variant="outline" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all duration-300 bg-portfolio-dark-secondary/80 backdrop-blur-sm hover:bg-portfolio-dark-secondary/90 group border-portfolio-indigo/30" asChild>
              <a href="mailto:tulendrachandrakar1111@gmail.com">
                <Mail className="h-4 w-4 mr-2 text-portfolio-indigo group-hover:text-portfolio-accent transition-colors" />
                Contact
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all duration-300 bg-portfolio-dark-secondary/80 backdrop-blur-sm hover:bg-portfolio-dark-secondary/90 group border-portfolio-indigo/30" asChild>
              <a href="https://www.linkedin.com/in/tulendra-chandrakar-095973223" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2 text-portfolio-indigo group-hover:text-portfolio-accent transition-colors" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all duration-300 bg-portfolio-dark-secondary/80 backdrop-blur-sm hover:bg-portfolio-dark-secondary/90 group border-portfolio-indigo/30" asChild>
              <a href="https://github.com/Tulendra1111" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2 text-portfolio-indigo group-hover:text-portfolio-accent transition-colors" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all duration-300 bg-portfolio-dark-secondary/80 backdrop-blur-sm hover:bg-portfolio-dark-secondary/90 group border-portfolio-indigo/30" asChild>
              <a href="https://docs.google.com/document/d/17o_YFjCY2xklzpnKCDp3PBRUFxAHUZNgIKm4p5uFoBo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2 text-portfolio-indigo group-hover:text-portfolio-accent transition-colors" />
                Resume
              </a>
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-12 w-full max-w-md justify-center opacity-0 animate-fade-in-delay-3">
            <Button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View My Projects
            </Button>
            <Button variant="outline" className="btn-outline" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-16 animate-float opacity-0 animate-fade-in-delay-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full border border-gray-600 p-3 text-gray-400 hover:text-portfolio-indigo hover:border-portfolio-indigo/50" 
              onClick={() => scrollToSection('about')}
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
