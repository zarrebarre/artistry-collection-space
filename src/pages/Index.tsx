
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { Toaster } from 'sonner';

const Index = () => {
  return (
    <div className="box-border px-10 py-9 m-0 min-h-screen bg-zinc-100 max-sm:px-5 max-sm:py-6">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <div className="inline-block overflow-hidden mb-24 text-6xl font-bold text-blue-700 uppercase whitespace-nowrap animate-marquee"></div>
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
