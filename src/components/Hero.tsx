
import React from 'react';

const Hero = () => {
  return (
    <section className="relative mb-24 max-sm:mb-16">
      <h2 className="mb-5 font-black text-center text-blue-700 text-[200px] max-md:text-9xl max-sm:text-7xl">
        ZACK
      </h2>
      <p className="mb-10 text-5xl text-center text-blue-700 max-md:text-4xl max-sm:text-2xl">
        Creative Designer
      </p>
      <div className="flex justify-center mb-16">
        <a 
          href="#contact" 
          className="px-6 py-3.5 text-4xl font-bold bg-blue-700 cursor-pointer text-stone-100 max-sm:px-5 max-sm:py-2.5 max-sm:text-2xl"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
