import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import profileImage from '@assets/deepak.jpg';

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const skills = [
    { 
      icon: faCode, 
      title: 'Frontend Development',
      description: 'Creating responsive, modern UIs with React, Next.js, and Tailwind CSS. Implementing interactive experiences using Framer Motion and Three.js.'
    },
    { 
      icon: faServer, 
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and Django. Designing RESTful APIs and implementing GraphQL.'
    },
    { 
      icon: faDatabase, 
      title: 'Database Management',
      description: 'Working with relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases. Experience with ORM tools like Prisma and Sequelize.'
    },
    { 
      icon: faMobileScreen, 
      title: 'Mobile Development',
      description: 'Creating cross-platform applications using React Native. Building native-like experiences with progressive web apps.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-light-bg dark:bg-dark-bg grid-bg transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl font-cyber mb-4 text-center neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          ABOUT <span className="text-light-accent2 dark:text-dark-accent2">ME</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-light-muted-foreground dark:text-dark-muted-foreground mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-light-accent2 dark:border-dark-accent2 shadow-lg mx-auto md:mx-0">
                <img 
                  src={profileImage} 
                  alt="Deepak Raj R" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 mt-3 md:mt-0">Who I Am</h3>
                <p className="text-sm sm:text-base text-light-muted-foreground dark:text-dark-muted-foreground">
                  I'm Deepak Raj R, a passionate full-stack developer and UI/UX enthusiast based in Chennai, India. With a strong foundation in both frontend and backend technologies, I craft efficient, scalable, and visually appealing digital solutions.
                </p>
              </div>
            </div>
            
            <p className="text-light-muted-foreground dark:text-dark-muted-foreground">
              I'm currently a CSE student, where I've been actively involved in various tech communities and hackathons. My goal is to create software that not only functions flawlessly but also provides an exceptional user experience.
            </p>
            <p className="text-light-muted-foreground dark:text-dark-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, designing UI concepts, or contributing to open-source projects. I'm always open to learning new skills and taking on challenging projects.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-accent1 dark:border-dark-accent1 hover:border-light-accent2 dark:hover:border-dark-accent2 transition-colors card-hover-effect"
                >
                  <div className="mb-4 text-light-accent2 dark:text-dark-accent2">
                    <FontAwesomeIcon icon={skill.icon} className="text-3xl" />
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
