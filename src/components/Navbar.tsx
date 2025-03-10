
import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-11 max-sm:flex-col max-sm:gap-5 max-sm:text-center">
      <h1 className="text-2xl font-bold uppercase">Zack lagerström</h1>
      <nav className="flex gap-14 max-sm:flex-row max-sm:gap-8 max-sm:justify-center max-sm:w-full">
        <a href="#work" className="text-2xl uppercase cursor-pointer max-sm:text-xl hover:text-blue-700 transition-colors">
          Work
        </a>
        <a href="#about" className="text-2xl uppercase cursor-pointer max-sm:text-xl hover:text-blue-700 transition-colors">
          About
        </a>
        <a href="#contact" className="text-2xl uppercase cursor-pointer max-sm:text-xl hover:text-blue-700 transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
