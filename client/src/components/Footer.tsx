import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="py-12 bg-light-surface dark:bg-dark-surface text-light-foreground dark:text-dark-foreground border-t border-light-accent1 dark:border-dark-accent1 border-opacity-20 dark:border-opacity-20 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#main" className="text-2xl font-cyber text-light-accent2 dark:text-dark-accent2 neon-text">
              D<span className="text-light-accent1 dark:text-dark-accent1">R</span>
            </a>
            <p className="mt-4 text-light-muted-foreground dark:text-dark-muted-foreground">
              Building modern, interactive web applications with cutting-edge technologies.
              Let's create something amazing together.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/deepaklog2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} className="text-light-accent2 dark:text-dark-accent2" />
              </a>
              <a 
                href="https://www.linkedin.com/in/deepak-raj-r-290856235/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-light-accent2 dark:text-dark-accent2" />
              </a>
              <a 
                href="https://www.instagram.com/dee_pakrajr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-light-accent2 dark:text-dark-accent2" />
              </a>
              <a 
                href="https://www.youtube.com/@dpstudio4474" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-light-accent2 dark:text-dark-accent2" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display mb-4 border-b border-light-accent1 dark:border-dark-accent1 border-opacity-20 dark:border-opacity-20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors">Projects</a></li>
              <li><a href="#resume" className="hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors">Resume</a></li>
              <li><a href="#blog" className="hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display mb-4 border-b border-light-accent1 dark:border-dark-accent1 border-opacity-20 dark:border-opacity-20 pb-2">Contact</h3>
            <ul className="space-y-2">
              <li>Royapuram, Chennai, India</li>
              <li><a href="mailto:teaksmile30@gmail.com" className="hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors">teaksmile30@gmail.com</a></li>
              <li>+91 6381687588 (WhatsApp only)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-light-accent1 dark:border-dark-accent1 border-opacity-20 dark:border-opacity-20 text-center text-light-muted-foreground dark:text-dark-muted-foreground">
          <p>© {new Date().getFullYear()} Deepak Raj R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}