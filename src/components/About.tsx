
import React from 'react';
import Container from './ui/Container';

const About = () => {
  return (
    <section id="about" className="py-20">
      <Container>
        <h2 className="text-3xl font-normal mb-6">Get to know me</h2>
        
        <div className="max-w-3xl">
          <p className="mb-4">
            Zack Lagerström is a dedicated UX design student currently pursuing a 
            degree in Interaction Design, set to graduate in 2026.
          </p>
          
          <p className="mb-4">
            With a strong background in photography, videography, and other 
            graphical work, Zack brings a versatile skill set to the table, specializing 
            in computer-assisted design. His portfolio includes notable projects 
            such as an advertisement film for a school and a short ad for Svenska 
            Kyrkan, showcasing his ability to create impactful content that aligns 
            with his clients' objectives.
          </p>
          
          <p className="mb-4">
            Based in Uppsala, Sweden, Zack is motivated by a passion for creating 
            and designing content that helps individuals and companies achieve 
            their goals. Open to both remote and in-house opportunities, he values 
            collaboration and enjoys working in teams to bring creative visions to 
            life. When he's not immersed in design work, Zack enjoys skiing, 
            blending his love for the outdoors with his creative pursuits.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
