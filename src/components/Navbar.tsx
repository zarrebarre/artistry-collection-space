
import React from 'react';
import Container from './ui/Container';

const Navbar = () => {
  return (
    <header className="py-6">
      <Container>
        <div className="flex justify-between items-center">
          <a href="/" className="font-medium text-sm uppercase">
            Zack Lagerström
          </a>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#work" className="text-sm uppercase">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm uppercase">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm uppercase">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
