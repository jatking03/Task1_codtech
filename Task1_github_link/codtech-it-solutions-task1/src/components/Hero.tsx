
import { Button } from "@/components/ui/button";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32 relative overflow-hidden">
      <HeroBackground />
      <div className="max-w-4xl z-10 relative">
        <p className="text-portfolio-accent font-mono mb-5">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-portfolio-text">
          <span className="font-typewriter typewriter">Jatin Gupta (jatking03).</span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-text-secondary mb-6">
          I build things for the web.
        </h2>
        <p className="text-portfolio-text-secondary max-w-xl text-lg mb-12">
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <Button 
          onClick={handleScrollToProjects}
          className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 py-6 px-8 text-base font-mono"
        >
          Check out my work!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
