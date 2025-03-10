
import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex justify-between items-center mb-11 max-sm:flex-col max-sm:gap-5 max-sm:text-center">
      <h1 className="text-2xl font-bold uppercase">Zack lagerström</h1>
      <nav className="flex gap-14 max-sm:flex-row max-sm:gap-8 max-sm:justify-center max-sm:w-full">
        <a 
          href="#work" 
          onClick={scrollToSection('work')}
          className="text-2xl uppercase cursor-pointer max-sm:text-xl hover:text-blue-700 transition-colors"
        >
          Work
        </a>
        <a 
          href="#about" 
          onClick={scrollToSection('about')}
          className="text-2xl uppercase cursor-pointer max-sm:text-xl hover:text-blue-700 transition-colors"
        >
          About
        </a>
        <a 
          href="#contact" 
          onClick={scrollToSection('contact')}
          className="text-2xl uppercase cursor-pointer max-sm:text-xl hover:text-blue-700 transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
