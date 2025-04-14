
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, User, Github, Linkedin, Twitter, Youtube } from "lucide-react";

const GlitchText = ({ children }) => (
  <span className="glitch">
    {children}
    <span aria-hidden="true">{children}</span>
    <span aria-hidden="true">{children}</span>
  </span>
);

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/00851b56-2538-4db0-a65e-3b9bc68eb5c7/f1c3d1540e000383723daf45e73e3dad.png" 
                 alt="LearningOldCyber Logo" 
                 className="h-10 w-10" />
            <GlitchText>LearningOldCyber</GlitchText>
          </Link>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/blog">
                <Button variant="ghost" className="glitch">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Blog</span>
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="glitch">
                  <User className="h-4 w-4 mr-2" />
                  <span>Sobre</span>
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/seu-canal" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
