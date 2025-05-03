
import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  externalLink: string;
  githubLink: string;
  image: string;
  reversed?: boolean;
}

const FeaturedProject = ({
  title,
  description,
  tech,
  externalLink,
  githubLink,
  image,
  reversed = false,
}: ProjectProps) => {
  return (
    <div className={`relative grid md:grid-cols-12 gap-4 md:gap-10 items-center my-16 ${reversed ? 'md:text-right' : ''}`}>
      {/* Project Image (left on regular, right on reversed) */}
      <a 
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`md:col-span-7 relative ${reversed ? 'md:order-last' : ''}`}
      >
        <div className="relative group overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-portfolio-accent/20 group-hover:bg-transparent z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full rounded-md group-hover:scale-105"
          />
        </div>
      </a>

      {/* Project Content */}
      <div className={`md:col-span-5 ${reversed ? 'md:text-right' : ''}`}>
        <p className="text-portfolio-accent font-mono mb-1">Featured Project</p>
        <h3 className="text-portfolio-text text-2xl font-semibold mb-4">
          <a 
            href={externalLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-portfolio-accent"
          >
            {title}
          </a>
        </h3>
        
        <div className="bg-portfolio-light-blue p-6 rounded-md mb-4 shadow-xl">
          <p className="text-portfolio-text-secondary">{description}</p>
        </div>
        
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-6 font-mono text-sm text-portfolio-text-secondary ${reversed ? 'md:justify-end' : ''}`}>
          {tech.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        
        <div className={`flex items-center gap-4 text-portfolio-text ${reversed ? 'md:justify-end' : ''}`}>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
          <a 
            href={externalLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent"
            aria-label="External Link"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform built with React and Node.js. Features include user authentication, product filtering, cart functionality, and secure checkout with Stripe.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      externalLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Content Management System",
      description: "A custom CMS built for content creators that allows easy management of articles, media, and user permissions with a modern, intuitive interface.",
      tech: ["TypeScript", "Next.js", "GraphQL", "PostgreSQL", "AWS"],
      externalLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      reversed: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interfaces, and team collaboration features.",
      tech: ["React", "Redux", "Socket.io", "Node.js", "MongoDB"],
      externalLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <h2 className="numbered-heading mb-10" data-number="03.">
        Some Things I've Built
      </h2>

      <div>
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            externalLink={project.externalLink}
            githubLink={project.githubLink}
            image={project.image}
            reversed={project.reversed}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <Button className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 py-6 px-8 text-base font-mono">
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;
