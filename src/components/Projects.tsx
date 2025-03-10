
import React from 'react';

const projects = [
  {
    id: 1,
    image: "/path/to/your/first-image.jpg", // Replace with your uploaded image path
    title: "Work sample 1"
  },
  {
    id: 2,
    image: "/path/to/your/second-image.jpg", // Replace with your uploaded image path
    title: "Work sample 2"
  },
  {
    id: 3,
    image: "/path/to/your/third-image.jpg", // Replace with your uploaded image path
    title: "Work sample 3"
  },
  {
    id: 4,
    image: "/path/to/your/fourth-image.jpg", // Replace with your uploaded image path
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
