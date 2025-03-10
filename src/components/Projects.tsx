
import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import RevealAnimation from './ui/RevealAnimation';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Minimalist Dashboard",
    description: "A clean and intuitive admin dashboard with a focus on usability and aesthetics.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    tags: ["UI/UX", "Frontend", "React"],
    link: "#"
  },
  {
    title: "E-commerce Redesign",
    description: "Reimagining the online shopping experience with a focus on simplicity and visual hierarchy.",
    image: "https://images.unsplash.com/photo-1592920448706-4b8989c10202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    tags: ["Web Design", "UX Research", "Prototyping"],
    link: "#"
  },
  {
    title: "Mobile Banking App",
    description: "A premium mobile banking experience focused on security and ease of use.",
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    tags: ["Mobile", "UI Design", "Swift"],
    link: "#"
  },
  {
    title: "Photography Portfolio",
    description: "A minimalist portfolio showcasing a photographer's work through thoughtful layout and typography.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    tags: ["Web Design", "Gallery", "Gridsome"],
    link: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <RevealAnimation delay={index * 100}>
      <motion.div 
        className="project-card overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={project.link} 
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            View Project
            <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M13 6L19 12M19 12L13 18M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </RevealAnimation>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-50">
      <Container>
        <RevealAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-black/5 text-black/80 rounded-full px-3 py-1 text-sm font-medium inline-block mb-4">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Selected Work
            </h2>
            <p className="text-muted-foreground">
              Here's a collection of my recent projects, showcasing my approach to design and development.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <RevealAnimation delay={300}>
          <div className="text-center mt-16">
            <a 
              href="#" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              View All Projects
              <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M13 6L19 12M19 12L13 18M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default Projects;
