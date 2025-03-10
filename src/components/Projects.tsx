
import React from 'react';

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Work sample 1"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Work sample 2"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Work sample 3"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Work sample 4"
  }
];

const Projects = () => {
  return (
    <section id="work" className="mb-24 max-sm:mb-16">
      <h2 className="mb-10 text-6xl font-medium max-sm:text-4xl">Selected Work</h2>
      <div className="grid gap-3 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr] max-sm:gap-6">
        {projects.map((project) => (
          <div key={project.id}>
            <img 
              src={project.image} 
              alt={project.title}
              className="object-cover w-full h-[399px] max-sm:h-[200px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
