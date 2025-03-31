import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences, education, awards } from '../lib/constants';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useToast } from '@/hooks/use-toast';

export function Resume() {
  const sectionRef = useRef(null);
  const resumeContentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
  
  // Function to generate and download PDF resume
  const generatePDF = async () => {
    if (!resumeContentRef.current) return;
    
    try {
      setIsGeneratingPdf(true);
      
      // Show notification
      toast({
        title: "Generating PDF",
        description: "Please wait while we prepare your resume...",
      });
      
      // Get the content element
      const element = resumeContentRef.current;
      
      // Create PDF with correct styling
      await createResumePDF(element);
      
      // Show success notification
      toast({
        title: "Success!",
        description: "Your resume has been downloaded successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Show error notification
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  // Helper function to create and style the PDF
  const createResumePDF = async (element: HTMLElement) => {
    // Save current theme state
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Temporarily force light theme for better PDF output (if in dark mode)
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    }
    
    try {
      // Apply a temporary class for better PDF styling
      element.classList.add('pdf-rendering');
      
      // Capture the content as canvas with appropriate settings
      const canvas = await html2canvas(element, {
        scale: 2,  // Higher resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        allowTaint: true,
        foreignObjectRendering: false,
      });
      
      // Create a new PDF with appropriate format
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // Calculate dimensions to fit content properly
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add title and metadata
      pdf.setProperties({
        title: 'Deepak Raj - Resume',
        subject: 'Resume/CV',
        author: 'Deepak Raj R',
        keywords: 'resume, curriculum vitae, portfolio',
        creator: 'Portfolio Website PDF Generator'
      });
      
      // Calculate if we need multiple pages
      let heightLeft = imgHeight;
      let position = 0;
      
      // Add first page
      pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      // Add subsequent pages if content is too long
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      // Download the PDF
      pdf.save('deepak-raj-resume.pdf');
    } finally {
      // Remove temporary class
      element.classList.remove('pdf-rendering');
      
      // Restore dark mode if it was active
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      }
    }
  };

  return (
    <section 
      id="resume" 
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
          MY <span className="text-light-accent2 dark:text-dark-accent2">RESUME</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={resumeContentRef}>
          {/* Experience */}
          <motion.div 
            className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-accent1 dark:border-dark-accent1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-display mb-8 pb-2 border-b border-light-accent1 dark:border-dark-accent1 inline-block">
              <i className="fas fa-briefcase mr-2 text-light-accent2 dark:text-dark-accent2"></i> Experience
            </h3>
            
            {/* Experience Timeline */}
            <motion.div 
              className="relative border-l-2 border-light-accent1 dark:border-dark-accent1 pl-8 ml-4 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {experiences.map((exp) => (
                <motion.div key={exp.id} className="relative" variants={itemVariants}>
                  <div className="absolute -left-11 top-0 w-7 h-7 bg-light-bg dark:bg-dark-bg border-2 border-light-accent2 dark:border-dark-accent2 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-light-accent2 dark:bg-dark-accent2 rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-display mb-1">{exp.title}</h4>
                  <p className="text-sm text-light-accent2 dark:text-dark-accent2 mb-2">{exp.period}</p>
                  <p className="text-light-muted-foreground dark:text-dark-muted-foreground text-sm">{exp.description}</p>
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-light-accent2 dark:text-dark-accent2 text-sm hover:underline mt-1 inline-block"
                    >
                      {exp.linkText}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Education & Awards */}
          <div>
            {/* Education */}
            <motion.div 
              className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-accent1 dark:border-dark-accent1 mb-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-display mb-8 pb-2 border-b border-light-accent1 dark:border-dark-accent1 inline-block">
                <i className="fas fa-graduation-cap mr-2 text-light-accent2 dark:text-dark-accent2"></i> Education
              </h3>
              
              {/* Education Timeline */}
              <motion.div 
                className="relative border-l-2 border-light-accent1 dark:border-dark-accent1 pl-8 ml-4 space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {education.map((edu) => (
                  <motion.div key={edu.id} className="relative" variants={itemVariants}>
                    <div className="absolute -left-11 top-0 w-7 h-7 bg-light-bg dark:bg-dark-bg border-2 border-light-accent2 dark:border-dark-accent2 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-light-accent2 dark:bg-dark-accent2 rounded-full"></div>
                    </div>
                    <h4 className="text-lg font-display mb-1">{edu.degree}</h4>
                    <p className="text-sm text-light-accent2 dark:text-dark-accent2 mb-2">{edu.institution}</p>
                    <p className="text-light-muted-foreground dark:text-dark-muted-foreground text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Awards */}
            <motion.div 
              className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg border border-light-accent1 dark:border-dark-accent1"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-display mb-8 pb-2 border-b border-light-accent1 dark:border-dark-accent1 inline-block">
                <i className="fas fa-trophy mr-2 text-light-accent2 dark:text-dark-accent2"></i> Awards & Achievements
              </h3>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {awards.map((award) => (
                  <motion.li key={award.id} className="flex items-start space-x-3" variants={itemVariants}>
                    <div className="text-light-accent2 dark:text-dark-accent2 mt-1">
                      <i className={`fas fa-${award.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-display">{award.title}</h4>
                      <p className="text-light-muted-foreground dark:text-dark-muted-foreground text-sm">{award.description}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            onClick={generatePDF}
            disabled={isGeneratingPdf}
            className={`inline-block px-8 py-3 bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg font-bold rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:-translate-y-1 ${isGeneratingPdf ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isGeneratingPdf ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                GENERATING...
              </>
            ) : (
              <>
                <i className="fas fa-download mr-2"></i> DOWNLOAD FULL RESUME
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
