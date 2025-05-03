
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://github.com/jatking03" 
            className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jatin-gupta-388901248/" 
            className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com/Jatking03" 
            className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://www.instagram.com/jatingupta6699/" 
            className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
          </a>
        </div>
        
        <p className="font-mono text-xs text-portfolio-text-secondary">
          Designed & Built by Jatin Gupta
        </p>
        
        <p className="font-mono text-xs text-portfolio-text-secondary mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
