
import React from 'react';
import Container from './ui/Container';

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Run App"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Location App"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Banking App"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Svenska Kyrkan"
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-20">
      <Container>
        <h2 className="text-3xl font-normal mb-10">Selected Work</h2>
        
        <div className="grid grid-cols-2 gap-2">
          {projects.map((project) => (
            <div key={project.id} className="bg-white">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
