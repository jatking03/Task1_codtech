
import { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      name: "Backend Development",
      skills: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"]
    },
    {
      name: "Tools & Methods",
      skills: ["Git", "GitHub Actions", "Jest", "Docker", "Agile", "CI/CD"]
    },
    {
      name: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <h2 className="numbered-heading mb-10" data-number="02.">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-portfolio-light-blue border-portfolio-accent/10 overflow-hidden hover:border-portfolio-accent/30">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-portfolio-text mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-portfolio-blue/60 text-portfolio-text px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm border border-portfolio-accent/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
