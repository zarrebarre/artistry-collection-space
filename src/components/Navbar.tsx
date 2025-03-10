
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import { cn } from '@/lib/utils';

interface NavItemProps {
  text: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, href, active }) => {
  return (
    <li>
      <a 
        href={href} 
        className={cn(
          'relative px-3 py-2 transition-colors duration-300',
          active ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
        )}
      >
        {active && (
          <motion.span 
            layoutId="navbar-indicator"
            className="absolute inset-0 rounded-md z-[-1]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
          />
        )}
        {text}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Projects', href: '#projects' },
    { text: 'Skills', href: '#skills' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex justify-between items-center">
        <motion.a 
          href="#" 
          className="font-medium tracking-tight text-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Portfolio
        </motion.a>
        <nav>
          <motion.ul 
            className="flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <NavItem 
                key={index} 
                text={item.text} 
                href={item.href} 
                active={activeSection === item.href.substring(1)}
              />
            ))}
          </motion.ul>
        </nav>
      </Container>
    </motion.header>
  );
};

export default Navbar;
