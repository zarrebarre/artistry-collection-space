
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mb-24 max-sm:mb-16">
      <h2 className="mb-10 text-6xl font-medium max-sm:text-4xl">Contact me</h2>
      <address className="text-6xl max-sm:text-2xl not-italic">
        <p className="mb-5">
          <a href="mailto:zacken@me.com" className="hover:text-blue-700 transition-colors">
            zacken@me.com
          </a>
        </p>
        <p className="mb-5">
          <a href="tel:+46705212342" className="hover:text-blue-700 transition-colors">
            +46705212342
          </a>
        </p>
      </address>
    </section>
  );
};

export default Contact;
