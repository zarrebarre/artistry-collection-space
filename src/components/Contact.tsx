
import React from 'react';
import Container from './ui/Container';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <Container>
        <h2 className="text-3xl font-normal mb-6">Contact me</h2>
        
        <div className="mb-6">
          <a href="mailto:zacken@me.com" className="text-xl hover:underline block">
            zacken@me.com
          </a>
          <a href="tel:+46705212342" className="text-xl hover:underline block">
            +46705212342
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
