import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import profileImage from '@assets/deepak.jpg';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-light-bg dark:bg-dark-bg grid-bg transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
          {/* Mobile profile image (shown only on small screens) */}
          <motion.div 
            className="w-full md:hidden flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-light-accent1 to-light-accent2 dark:from-dark-accent1 dark:to-dark-accent2 opacity-20 blur-xl"></div>
              <div className="absolute inset-3 rounded-full border-2 border-light-accent2 dark:border-dark-accent2 border-dashed animate-spin-slow"></div>
              <img 
                src={profileImage} 
                alt="Deepak Raj R" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-light-accent2 dark:border-dark-accent2"
              />
            </div>
          </motion.div>

          <div className="w-full md:w-3/5 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h4 className="text-base sm:text-lg font-mono tracking-wide text-light-accent1 dark:text-dark-accent1">
                Hello, I'm
              </h4>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cyber font-bold leading-tight relative">
                <span className="text-light-foreground dark:text-dark-foreground">Deepak Raj</span>
                <span className="text-light-accent2 dark:text-dark-accent2 neon-text"> R</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display text-light-muted-foreground dark:text-dark-muted-foreground">
                Full Stack Developer & AI Specialist
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-light-muted-foreground dark:text-dark-muted-foreground">
                I build modern, interactive web applications with cutting-edge technologies. 
                Passionate about creating beautiful, functional, and accessible digital experiences.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                <motion.a 
                  href="#projects" 
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg font-bold rounded-md flex items-center gap-2 hover:bg-opacity-80 transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View My Work
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </motion.a>
                
                <motion.a 
                  href="#contact" 
                  className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-light-accent1 dark:border-dark-accent1 text-light-accent1 dark:text-dark-accent1 font-bold rounded-md hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Desktop profile image (hidden on small screens) */}
          <motion.div 
            className="hidden md:flex w-full md:w-2/5 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-light-accent1 to-light-accent2 dark:from-dark-accent1 dark:to-dark-accent2 opacity-20 blur-xl"></div>
              <div className="absolute inset-4 rounded-full border-2 border-light-accent2 dark:border-dark-accent2 border-dashed animate-spin-slow"></div>
              <img 
                src={profileImage} 
                alt="Deepak Raj R" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-light-accent2 dark:border-dark-accent2"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground mb-1 sm:mb-2">Scroll Down</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
      
      {/* Tech particles background (simulated) - reduced quantity for mobile */}
      <div className="absolute inset-0 z-0 opacity-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-light-accent2 dark:bg-dark-accent2"
            initial={{ 
              x: Math.random() * 100 - 50 + '%', 
              y: Math.random() * 100 - 50 + '%', 
              scale: Math.random() * 0.8 + 0.2,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              x: [
                Math.random() * 100 - 50 + '%', 
                Math.random() * 100 - 50 + '%', 
                Math.random() * 100 - 50 + '%'
              ],
              y: [
                Math.random() * 100 - 50 + '%', 
                Math.random() * 100 - 50 + '%', 
                Math.random() * 100 - 50 + '%'
              ]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'reverse', 
              duration: Math.random() * 20 + 20, 
              ease: 'easeInOut' 
            }}
          />
        ))}
      </div>
    </section>
  );
}