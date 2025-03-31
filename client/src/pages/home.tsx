import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Resume } from '@/components/Resume';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    console.log("Home component mounted - full portfolio");
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href');
        
        // Skip if href is just "#" with nothing after it
        if (id === "#") return;
        
        try {
          const element = document.querySelector(id as string);
          
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80, // 80px offset for header
              behavior: 'smooth'
            });

            // Update URL without scrolling
            window.history.pushState(null, '', id);
          }
        } catch (error) {
          console.error("Error with selector:", error);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
