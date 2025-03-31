import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'RESUME', href: '#resume' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-30 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-light-surface dark:bg-dark-surface bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm border-light-accent1 dark:border-dark-accent1 border-opacity-30 dark:border-opacity-30' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#main" className="text-xl font-cyber text-light-accent2 dark:text-dark-accent2 neon-text">
              D<span className="text-light-accent1 dark:text-dark-accent1">R</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="nav-link relative overflow-hidden px-2 py-1 hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-light-accent2 dark:bg-dark-accent2 transform scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
                </a>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-light-foreground dark:text-dark-foreground hover:text-light-accent2 dark:hover:text-dark-accent2 focus:outline-none z-50"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              )}
            </button>
            
            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`fixed inset-0 bg-light-bg dark:bg-dark-bg bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm z-40 md:hidden flex flex-col items-center justify-center space-y-6`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          y: mobileMenuOpen ? 0 : -50,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none' 
        }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="text-xl hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors"
            onClick={closeMobileMenu}
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </>
  );
}
