'use client';

import React from 'react';
import { X, GraduationCap, BookOpen, Award, Calendar, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface EducationModalProps {
  onClose: () => void;
}

const educationData = [
  {
    logo: '/bju-logo.png',
    institution: 'Bob Jones University',
    degree: 'B.S. in Computer Engineering',
    date: 'Aug 2023 - May 2027',
    location: 'Greenville, SC',
    status: 'Current',
    gpa: '3.8/4.0',
    description: 'A comprehensive program focusing on hardware-software integration, embedded systems, and emerging AI technologies.'
  },
  {
    logo: '/dps-logo.png',
    institution: 'Delhi Public School',
    degree: 'High School Diploma',
    date: 'Graduated Apr 2019',
    location: 'New Delhi, India',
    status: 'Graduated',
    description: 'A strong foundation in mathematics, sciences, and computer programming that first sparked my interest in engineering.'
  }
];

const coursesData = [
  { title: 'Object-Oriented Programming (Java)', code: 'CPS209', skills: ['OOP', 'Data Structures', 'Algorithms'] },
  { title: 'Object-Oriented Programming (Python)', code: 'CPS110', skills: ['Python', 'OOP Design', 'Problem Solving'] },
  { title: 'Digital Electronics', code: 'ELE110', skills: ['Digital Logic', 'Circuit Design', 'Microprocessors'] },
  { title: 'Calculus', code: 'MA200', skills: ['Mathematical Analysis', 'Engineering Math'] }
];

const honorsData = [
  { title: "Dean's List", issuer: 'Bob Jones University', description: 'Awarded for achieving a high GPA, demonstrating consistent academic excellence across multiple semesters.' }
];

const EducationModal = ({ onClose }: EducationModalProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="relative bg-gray-50 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-8 flex-shrink-0 text-center">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"><X className="w-5 h-5" /></button>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="inline-block p-4 bg-purple-100/50 rounded-2xl mb-4">
                <GraduationCap className="w-10 h-10 text-purple-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Education</h1>
              <p className="text-lg text-gray-600">My academic journey in computer engineering and AI.</p>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
              
              {/* Academic Journey Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Academic Journey</h2>
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gray-100 p-2 flex items-center justify-center flex-shrink-0">
                          <Image src={edu.logo} alt={`${edu.institution} logo`} width={48} height={48} className="object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{edu.institution}</h3>
                              <p className="text-gray-600 font-medium">{edu.degree}</p>
                            </div>
                            <div className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">{edu.status}</div>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-1 mb-3">
                            <div className="flex items-center gap-1.5"><Calendar size={14} /><span>{edu.date}</span></div>
                            <div className="flex items-center gap-1.5"><MapPin size={14} /><span>{edu.location}</span></div>
                            {edu.gpa && <div className="flex items-center gap-1.5"><Star size={14} /><span>GPA: {edu.gpa}</span></div>}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Coursework & Honors */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Relevant Coursework</h2>
                  <div className="space-y-4">
                    {coursesData.map((course, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-500 mb-2 font-mono">{course.code}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {course.skills.map(skill => (
                            <span key={skill} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md">{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Honors & Awards</h2>
                  <div className="space-y-4">
                    {honorsData.map((honor, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="p-2 bg-yellow-100/60 rounded-full"><Award size={16} className="text-yellow-600"/></div>
                          <h3 className="font-semibold text-gray-900">{honor.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 pl-11">{honor.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EducationModal;