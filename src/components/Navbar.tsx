
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-portfolio-dark/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-portfolio-indigo to-portfolio-accent rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              Pf
            </div>
            <span className="text-white font-display font-bold text-xl md:text-2xl">
              <span className="text-portfolio-indigo">.</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-portfolio-indigo font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-indigo to-portfolio-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-gray-300 hover:text-portfolio-indigo font-medium transition-colors duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-indigo to-portfolio-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#experience" className="text-gray-300 hover:text-portfolio-indigo font-medium transition-colors duration-300 relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-indigo to-portfolio-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-portfolio-indigo font-medium transition-colors duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-indigo to-portfolio-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-portfolio-indigo font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-indigo to-portfolio-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          {/* Download CV Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-portfolio-indigo to-portfolio-accent hover:from-portfolio-indigo/90 hover:to-portfolio-accent/90 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-portfolio-dark-secondary/95 backdrop-blur-xl absolute top-full left-0 right-0 py-6 px-4 shadow-2xl border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-300 hover:text-portfolio-indigo py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-portfolio-indigo py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-gray-300 hover:text-portfolio-indigo py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-portfolio-indigo py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-portfolio-indigo py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-portfolio-indigo to-portfolio-accent hover:from-portfolio-indigo/90 hover:to-portfolio-accent/90 text-white w-full py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 border-0">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
