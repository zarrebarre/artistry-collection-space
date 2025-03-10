
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { Toaster } from 'sonner';

const Index = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
