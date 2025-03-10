
import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import RevealAnimation from './ui/RevealAnimation';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <Container>
        <RevealAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="bg-black/5 text-black/80 rounded-full px-3 py-1 text-sm font-medium inline-block mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Passionate about creating beautiful, functional experiences.
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a multidisciplinary designer and developer with a focus on creating 
                  minimalist and intuitive user experiences. My approach combines design
                  thinking with technical expertise to build products that are both beautiful
                  and functional.
                </p>
                <p>
                  With a background in both design and development, I understand the entire
                  product creation process from concept to deployment. I'm passionate about
                  the details that make great products stand out.
                </p>
                <p>
                  When I'm not designing or coding, you can find me exploring photography,
                  reading about design systems, or experimenting with new creative tools.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 transform rotate-6 opacity-70"></div>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl"></div>
              <div className="relative z-10 p-6 rounded-xl border border-gray-100 bg-white/90 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold block mb-1">5+</span>
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                  </div>
                  <div className="p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold block mb-1">50+</span>
                    <span className="text-sm text-muted-foreground">Projects Completed</span>
                  </div>
                  <div className="p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold block mb-1">30+</span>
                    <span className="text-sm text-muted-foreground">Happy Clients</span>
                  </div>
                  <div className="p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold block mb-1">12+</span>
                    <span className="text-sm text-muted-foreground">Design Awards</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-medium mb-2">Core Values</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Simplicity in design
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Attention to detail
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      User-centered approach
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Continuous learning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
};

export default About;
