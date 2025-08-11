
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileText, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-portfolio-dark via-portfolio-dark-secondary to-portfolio-dark-accent pattern-bg">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-portfolio-indigo/20 text-portfolio-indigo hover:bg-portfolio-indigo/30 transition-colors border border-portfolio-indigo/30">Contact Me</Badge>
        <h2 className="section-title mx-auto text-center text-white">Get In Touch</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          Have a question or want to work together? I'd love to hear from you!
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 glass-card">
          <CardContent className="p-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="input-enhanced" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="input-enhanced" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject of your message" 
                  className="input-enhanced" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5} 
                  className="input-enhanced resize-none" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-600/30">
                <Mail className="h-5 w-5 text-portfolio-indigo mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-gray-300">Email</h4>
                  <a href="mailto:tulendrachandrakar1111@gmail.com" className="text-portfolio-indigo hover:text-portfolio-accent hover:underline transition-colors">
                    tulendrachandrakar1111@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-600/30">
                <Linkedin className="h-5 w-5 text-portfolio-indigo mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-gray-300">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/tulendra-chandrakar-095973223" className="text-portfolio-indigo hover:text-portfolio-accent hover:underline transition-colors">
                    linkedin.com/in/tulendra
                  </a>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-600/30">
                <Github className="h-5 w-5 text-portfolio-indigo mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-gray-300">GitHub</h4>
                  <a href="https://github.com/Tulendra1111" className="text-portfolio-indigo hover:text-portfolio-accent hover:underline transition-colors">
                    github.com/tulendra
                  </a>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-600/30">
                <FileText className="h-5 w-5 text-portfolio-indigo mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-gray-300">Resume</h4>
                  <a href="https://docs.google.com/document/d/17o_YFjCY2xklzpnKCDp3PBRUFxAHUZNgIKm4p5uFoBo/edit?usp=sharing" className="text-portfolio-indigo hover:text-portfolio-accent hover:underline transition-colors">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-5 rounded-lg border border-gray-600 bg-gray-800/50">
              <h4 className="font-medium text-white mb-2 text-sm flex items-center">
                <MapPin className="h-4 w-4 text-portfolio-indigo mr-1" /> Location
              </h4>
              <p className="text-gray-300">Raipur, Chhattisgarh, India</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
