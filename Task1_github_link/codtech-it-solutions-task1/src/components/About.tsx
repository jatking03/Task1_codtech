
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <h2 className="numbered-heading mb-10" data-number="01.">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-portfolio-text-secondary mb-4">
            Hello! My name is Jatin and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try customizing 
            a Tumblr theme — turns out hacking together a custom reblog button taught me a lot 
            about HTML & CSS!
          </p>
          <p className="text-portfolio-text-secondary mb-4">
            Fast-forward to today, and I've had the privilege of working at an 
            <span className="text-portfolio-text"> advertising agency</span>,
            a <span className="text-portfolio-text">start-up</span>,
            a <span className="text-portfolio-text">huge corporation</span>,
            and a <span className="text-portfolio-text">student-led design studio</span>.
          </p>
          <p className="text-portfolio-text-secondary mb-8">
            My main focus these days is building accessible, inclusive products and digital 
            experiences at <span className="text-portfolio-text">Upstatement</span> for a variety of clients.
          </p>

          <p className="text-portfolio-text-secondary mb-4">
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm text-portfolio-text-secondary">
            <li className="flex items-center">
              <span className="text-portfolio-accent mr-2">▹</span> JavaScript (ES6+)
            </li>
            <li className="flex items-center">
              <span className="text-portfolio-accent mr-2">▹</span> TypeScript
            </li>
            <li className="flex items-center">
              <span className="text-portfolio-accent mr-2">▹</span> React
            </li>
            <li className="flex items-center">
              <span className="text-portfolio-accent mr-2">▹</span> Node.js
            </li>
            <li className="flex items-center">
              <span className="text-portfolio-accent mr-2">▹</span> Next.js
            </li>
            <li className="flex items-center">
              <span className="text-portfolio-accent mr-2">▹</span> Tailwind CSS
            </li>
          </ul>
        </div>

        <div className="relative group">
          <div className="relative w-full h-80 md:h-full rounded-md overflow-hidden">
            <div className="absolute w-full h-full bg-portfolio-accent/20 z-10 group-hover:bg-transparent"></div>
            <div className="absolute inset-0 border-2 border-portfolio-accent rounded-md translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-md z-1 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
