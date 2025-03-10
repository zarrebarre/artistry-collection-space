
import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import RevealAnimation from './ui/RevealAnimation';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Design",
    items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Design Systems", "Figma", "Adobe XD", "Sketch"]
  },
  {
    category: "Frontend",
    items: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "NextJS", "Animation"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase", "Authentication"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "VS Code", "Terminal", "CI/CD", "Performance Optimization", "Accessibility", "SEO", "Analytics"]
  }
];

const SkillCategory: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <RevealAnimation delay={index * 100}>
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, i) => (
            <motion.span 
              key={i}
              className="skill-card px-3 py-1.5 bg-secondary rounded-full text-sm transition-transform duration-300 inline-block"
              whileHover={{ y: -3 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <Container>
        <RevealAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-black/5 text-black/80 rounded-full px-3 py-1 text-sm font-medium inline-block mb-4">
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              My Expertise
            </h2>
            <p className="text-muted-foreground">
              A comprehensive collection of my technical skills and areas of expertise.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCategory key={index} skill={skill} index={index} />
          ))}
        </div>

        <RevealAnimation delay={300}>
          <div className="mt-16 p-6 rounded-xl bg-gray-50 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Looking for my complete resume?</h3>
                <p className="text-muted-foreground">
                  Download my full resume to get more details about my experience and qualifications.
                </p>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
              >
                Download Resume
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V16M12 16L7 11M12 16L17 11M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default Skills;
