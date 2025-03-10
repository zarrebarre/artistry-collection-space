
import React from 'react';
import Container from './ui/Container';

const Hero = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[80px] font-bold text-blue-600 mb-1 leading-none">
              ZACK
            </h1>
            <p className="text-blue-600 text-xl mb-10">
              Creative Designer
            </p>
            
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 text-sm"
            >
              Get in touch
            </a>
          </div>
          
          <div className="relative">
            <div className="w-full h-[200px] bg-gray-200"></div>
            <div className="absolute bottom-[-30px] left-[-30px] text-blue-600">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-xs text-gray-700">This is you</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
