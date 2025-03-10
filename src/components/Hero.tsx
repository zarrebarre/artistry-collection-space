
import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <Container className="relative flex flex-col items-center text-center">
        {/* Background subtle gradient element */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
        
        {/* Main heading with staggered animation */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter md:px-16 lg:px-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <span className="block">Hi, I'm</span>
          <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 animate-background-shine bg-[length:400%_100%]">
            Your Name
          </span>
        </motion.h1>
        
        {/* Subtitle with delayed animation */}
        <motion.p 
          className="mt-6 text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.4,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          I'm a passionate designer and developer creating minimalist and
          functional digital experiences.
        </motion.p>
        
        {/* Animated CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.6,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-12"
        >
          <a 
            href="#projects" 
            className="group relative overflow-hidden rounded-full bg-gray-900 px-8 py-3 text-white inline-flex"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute left-0 top-0 h-full w-0 bg-gray-800 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </span>
          </a>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: 1,
                  transition: { 
                    pathLength: { duration: 1, delay: 1.2 },
                    opacity: { duration: 0.4, delay: 1.2 }
                  }
                }}
              />
            </svg>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
