'use client';

import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillsModalProps {
  onClose: () => void;
}

const coreStrengths = [
  {
    title: 'PROGRAMMING LANGUAGES',
    description: 'Core programming languages with practical application experience.',
    skills: ['Python', 'Java']
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    description: 'Data science and development frameworks for building applications.',
    skills: ['Hugging Face', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'JavaFX']
  }
];

const additionalExpertise = [
  {
    category: 'DEVELOPMENT TOOLS',
    skills: ['Docker', 'Git', 'Jupyter', 'GitHub Actions', 'Streamlit', 'Core Flask']
  },
  {
    category: 'LANGUAGES',
    skills: ['Telugu (Native)', 'Hindi (Native)', 'English (Full Professional)', 'Arabic (Elementary)']
  }
];

const SkillsModal = ({ onClose }: SkillsModalProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="absolute inset-0" 
          onClick={onClose} 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="relative bg-white rounded-none shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="h-full overflow-y-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-12 space-y-12"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="space-y-4 text-center">
                <div className="space-y-1">
                  <h1 className="text-4xl font-light tracking-tight text-gray-900 leading-tight">
                    TECHNICAL EXPERTISE
                  </h1>
                  <div className="h-px bg-gray-900 w-32 mx-auto"></div>
                </div>
                <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
                  COMPREHENSIVE SKILLS + EMERGING TECHNOLOGIES
                </p>
              </motion.div>

              {/* Core Competencies */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 tracking-wide mb-8">
                    CORE COMPETENCIES
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {coreStrengths.map((strength, index) => (
                    <motion.div 
                      key={strength.title}
                      variants={itemVariants}
                      className="space-y-4 pb-8 border-b border-gray-100"
                    >
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-900 tracking-wider">
                          {strength.title}
                        </h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                          {strength.description}
                        </p>
                      </div>
                      
                      <div className="space-y-1">
                        {strength.skills.map((skill, skillIndex) => (
                          <div key={skill} className="text-gray-700 text-sm font-light">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Expertise */}
              <motion.div variants={itemVariants} className="space-y-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 tracking-wide mb-8">
                    ADDITIONAL SKILLS
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {additionalExpertise.map((category, index) => (
                    <motion.div 
                      key={category.category}
                      variants={itemVariants}
                      className="space-y-4"
                    >
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-2">
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skill} className="text-gray-700 text-sm font-light">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Proficiency Statement */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-none p-8 text-center">
                  <p className="text-gray-700 font-light text-lg leading-relaxed max-w-4xl mx-auto">
                    Currently pursuing Computer Engineering studies with focus on practical application 
                    of programming languages and data science frameworks. Continuously learning and 
                    expanding technical knowledge through coursework and personal projects.
                  </p>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span>TECHNICAL SKILLS 2025</span>
                  <span>DAVID M. GEDDAM</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SkillsModal;