import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SkillType } from '../lib/types';
import { otherSkills } from '../lib/constants';

// Directly define skills to avoid import issues
const skillsData = {
  frontend: [
    { name: 'HTML5/CSS3', level: 92 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Vue.js', level: 75 },
    { name: 'Tailwind CSS', level: 88 },
  ],
  mobile: [
    { name: 'React Native', level: 78 },
    { name: 'Flutter', level: 72 },
  ],
  backend: [
    { name: 'Node.js', level: 83 },
    { name: 'Python', level: 79 },
    { name: 'Express.js', level: 81 },
    { name: 'MongoDB', level: 75 },
  ],
  ai: [
    { name: 'TensorFlow', level: 70 },
    { name: 'PyTorch', level: 65 },
    { name: 'NLP', level: 72 },
  ]
};

export function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-light-bg dark:bg-dark-bg grid-bg transition-colors duration-300 relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl font-cyber mb-12 text-center neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          TECH <span className="text-light-accent2 dark:text-dark-accent2">SKILLS</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-display mb-6 border-b border-light-accent1 dark:border-dark-accent1 pb-2">Frontend Development</h3>
            
            {skillsData.frontend.map((skill) => (
              <motion.div key={skill.name} className="mb-4" variants={itemVariants}>
                <div className="flex justify-between mb-1">
                  <span className="font-mono">{skill.name}</span>
                  <span className="text-light-accent2 dark:text-dark-accent2">{skill.level}%</span>
                </div>
                <div className="w-full bg-light-surface dark:bg-dark-surface rounded-full h-2.5">
                  <div 
                    className="bg-light-accent2 dark:bg-dark-accent2 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
            
            <h3 className="text-xl font-display mt-10 mb-6 border-b border-light-accent1 dark:border-dark-accent1 pb-2">Mobile Development</h3>
            
            {skillsData.mobile.map((skill) => (
              <motion.div key={skill.name} className="mb-4" variants={itemVariants}>
                <div className="flex justify-between mb-1">
                  <span className="font-mono">{skill.name}</span>
                  <span className="text-light-accent2 dark:text-dark-accent2">{skill.level}%</span>
                </div>
                <div className="w-full bg-light-surface dark:bg-dark-surface rounded-full h-2.5">
                  <div 
                    className="bg-light-accent2 dark:bg-dark-accent2 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-display mb-6 border-b border-light-accent1 dark:border-dark-accent1 pb-2">Backend Development</h3>
            
            {skillsData.backend.map((skill) => (
              <motion.div key={skill.name} className="mb-4" variants={itemVariants}>
                <div className="flex justify-between mb-1">
                  <span className="font-mono">{skill.name}</span>
                  <span className="text-light-accent2 dark:text-dark-accent2">{skill.level}%</span>
                </div>
                <div className="w-full bg-light-surface dark:bg-dark-surface rounded-full h-2.5">
                  <div 
                    className="bg-light-accent2 dark:bg-dark-accent2 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
            
            <h3 className="text-xl font-display mt-10 mb-6 border-b border-light-accent1 dark:border-dark-accent1 pb-2">AI & Machine Learning</h3>
            
            {skillsData.ai.map((skill) => (
              <motion.div key={skill.name} className="mb-4" variants={itemVariants}>
                <div className="flex justify-between mb-1">
                  <span className="font-mono">{skill.name}</span>
                  <span className="text-light-accent2 dark:text-dark-accent2">{skill.level}%</span>
                </div>
                <div className="w-full bg-light-surface dark:bg-dark-surface rounded-full h-2.5">
                  <div 
                    className="bg-light-accent2 dark:bg-dark-accent2 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Additional skills as tags */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-display mb-6 text-center">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {otherSkills.map((skill, index) => (
              <motion.span 
                key={skill} 
                className="px-3 py-1 bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.05) }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
