'use client';

import React from 'react';
import { X, Calendar, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface EducationModalProps {
  onClose: () => void;
}

const educationData = [
  {
    logo: '/bju-logo.png',
    institution: 'BOB JONES UNIVERSITY',
    degree: 'B.S. in Computer Engineering',
    date: 'AUG 2023 - MAY 2027',
    location: 'Greenville, SC',
    status: 'CURRENT',
    gpa: '3.8/4.0',
    description: 'Comprehensive program focusing on hardware-software integration, embedded systems, and emerging AI technologies. Emphasis on practical application of engineering principles and cutting-edge research in computer systems.'
  },
  {
    logo: '/dps-logo.png',
    institution: 'DELHI PUBLIC SCHOOL',
    degree: 'High School Diploma',
    date: 'GRADUATED APR 2019',
    location: 'New Delhi, India',
    status: 'GRADUATED',
    description: 'Strong foundation in mathematics, sciences, and computer programming that first sparked interest in engineering and technology. Focus on analytical thinking and problem-solving methodologies.'
  }
];

const coursesData = [
  { 
    title: 'Object-Oriented Programming (Java)', 
    code: 'CPS209', 
    skills: ['Object-Oriented Design', 'Data Structures', 'Algorithm Analysis', 'Software Engineering Principles'] 
  },
  { 
    title: 'Object-Oriented Programming (Python)', 
    code: 'CPS110', 
    skills: ['Python Programming', 'OOP Concepts', 'Problem Solving', 'Code Optimization'] 
  },
  { 
    title: 'Digital Electronics', 
    code: 'ELE110', 
    skills: ['Digital Logic Design', 'Circuit Analysis', 'Microprocessor Systems', 'Hardware Integration'] 
  },
  { 
    title: 'Calculus', 
    code: 'MA200', 
    skills: ['Mathematical Analysis', 'Engineering Mathematics', 'Differential Equations', 'Applied Mathematics'] 
  }
];

const honorsData = [
  { 
    title: "Dean's List Recognition", 
    issuer: 'Bob Jones University', 
    description: 'Awarded for achieving academic excellence with high GPA, demonstrating consistent performance and dedication to scholarly pursuits across multiple academic semesters.' 
  }
];

const EducationModal = ({ onClose }: EducationModalProps) => {
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
          className="relative bg-white rounded-none shadow-2xl max-w-5xl w-full h-[95vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-y-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-12 space-y-12 min-h-full"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="space-y-4 text-center">
                <div className="space-y-1">
                  <h1 className="text-4xl font-light tracking-tight text-gray-900 leading-tight">
                    ACADEMIC BACKGROUND
                  </h1>
                  <div className="h-px bg-gray-900 w-32 mx-auto"></div>
                </div>
                <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
                  EDUCATIONAL JOURNEY + ACADEMIC EXCELLENCE
                </p>
              </motion.div>

              {/* Academic Institutions */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 tracking-wide mb-8">
                    ACADEMIC INSTITUTIONS
                  </h2>
                </div>
                
                <div className="space-y-12">
                  {educationData.map((edu, index) => (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      className="space-y-6"
                    >
                      {/* Institution Header */}
                      <div className="space-y-4 pb-6 border-b border-gray-200">
                        <div className="flex items-start gap-6">
                          <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 bg-gray-100 rounded-none flex items-center justify-center">
                              <Image 
                                src={edu.logo} 
                                alt={`${edu.institution} logo`} 
                                width={48} 
                                height={48} 
                                className="object-contain" 
                              />
                            </div>
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <h3 className="text-2xl font-light text-gray-900 tracking-wide">
                                  {edu.degree}
                                </h3>
                                <h4 className="text-lg font-medium text-gray-600 tracking-wider">
                                  {edu.institution}
                                </h4>
                              </div>
                              <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1 tracking-wider">
                                {edu.status}
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span className="font-light tracking-wide">{edu.date}</span>
                              </div>
                              <span className="hidden sm:block">•</span>
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span className="font-light tracking-wide">{edu.location}</span>
                              </div>
                              {edu.gpa && (
                                <>
                                  <span className="hidden sm:block">•</span>
                                  <div className="flex items-center gap-1.5">
                                    <Star className="w-4 h-4" />
                                    <span className="font-light tracking-wide">GPA: {edu.gpa}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-700 font-light leading-relaxed text-lg max-w-4xl">
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Academic Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
                {/* Coursework */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    RELEVANT COURSEWORK
                  </h3>
                  <div className="space-y-6">
                    {coursesData.map((course, index) => (
                      <div key={index} className="space-y-3 pb-4 border-b border-gray-100">
                        <div className="space-y-1">
                          <h4 className="font-medium text-gray-900">
                            {course.title}
                          </h4>
                          <p className="text-sm font-light text-gray-500 tracking-wide">
                            {course.code}
                          </p>
                        </div>
                        <div className="text-sm font-light text-gray-600 leading-relaxed">
                          {course.skills.join(' • ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Honors & Awards */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    ACADEMIC HONORS
                  </h3>
                  <div className="space-y-6">
                    {honorsData.map((honor, index) => (
                      <div key={index} className="space-y-3">
                        <div className="space-y-1">
                          <h4 className="font-medium text-gray-900">
                            {honor.title}
                          </h4>
                          <p className="text-sm font-light text-gray-500 tracking-wide">
                            {honor.issuer}
                          </p>
                        </div>
                        <p className="text-sm font-light text-gray-600 leading-relaxed">
                          {honor.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Academic Philosophy */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-none p-8 text-center">
                  <p className="text-gray-700 font-light text-lg leading-relaxed max-w-4xl mx-auto">
                    My academic journey reflects a commitment to excellence in computer engineering, 
                    with a focus on bridging theoretical knowledge and practical application. Through 
                    rigorous coursework and consistent academic performance, I continue to build a 
                    strong foundation for innovation in technology and engineering.
                  </p>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span>ACADEMIC RECORD 2019-2027</span>
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

export default EducationModal;