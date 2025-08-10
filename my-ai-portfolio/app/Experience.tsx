'use client';

import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ExperienceModalProps {
  onClose: () => void;
}

const experienceData = [ 
  {
    logo: '/forage-logo.png', 
    company: 'FORAGE',
    title: 'Virtual Job Simulation',
    date: 'JUNE 2024 - PRESENT',
    type: 'VIRTUAL EXPERIENCE',
    isCurrent: true,
    description: 'Completed comprehensive virtual work experiences across multiple technology companies, gaining exposure to enterprise-level software engineering practices and methodologies.',
    responsibilities: [
      'Walmart Global Tech: Executed backend software engineering tasks, focusing on systems architecture and performance optimization',
      'Datacom: Engaged in full-stack software development lifecycle, building and deploying production features',
      'Tata: Applied generative AI and data analytics techniques to derive actionable insights from large datasets',
      'Deloitte: Gained experience in technology consulting methodologies and enterprise solution design frameworks'
    ],
    skills: ['Software Engineering', 'Data Analytics', 'GenAI', 'Technology Consulting', 'Backend Development', 'Full-Stack Development']
  },
  {
    logo: '/bju-logo.png',
    company: 'BOB JONES UNIVERSITY',
    title: 'IT AV Technician',
    date: 'MAY 2024 - PRESENT',
    type: 'PART-TIME POSITION',
    isCurrent: true,
    description: 'Provide critical technical support for campus-wide audio/visual infrastructure, ensuring seamless operation of technology systems during academic and administrative events.',
    responsibilities: [
      'Provide on-site technical support for over 50 campus-wide Audio/Visual systems during live events and presentations',
      'Troubleshoot complex hardware and software issues under pressure to ensure successful event execution',
      'Maintain and configure diverse range of AV equipment for academic lectures and administrative functions'
    ],
    skills: ['Technical Support', 'Hardware Troubleshooting', 'AV Systems Management', 'Problem Solving']
  },
  {
    logo: '/bju-logo.png',
    company: 'BOB JONES UNIVERSITY',
    title: 'Training Assistant - Arduino Computer Engineering',
    date: 'JULY 2024',
    type: 'TEACHING ASSISTANT',
    isCurrent: false,
    description: 'Led educational initiatives in computer engineering fundamentals, mentoring students in practical application of embedded systems and programming concepts.',
    responsibilities: [
      'Instructed cohort of 15+ middle and high school students in Arduino programming fundamentals and circuit design',
      'Guided students through hands-on projects to improve practical understanding of computer engineering principles',
      'Developed curriculum materials and provided individualized mentoring support for diverse learning needs'
    ],
    skills: ['Teaching', 'Arduino Programming', 'Embedded Systems', 'Curriculum Development', 'Mentoring']
  }
];

const ExperienceModal = ({ onClose }: ExperienceModalProps) => {
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
                    PROFESSIONAL EXPERIENCE
                  </h1>
                  <div className="h-px bg-gray-900 w-40 mx-auto"></div>
                </div>
                <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
                  BUILDING EXPERTISE THROUGH PRACTICAL APPLICATION
                </p>
              </motion.div>

              {/* Experience Entries */}
              <div className="space-y-12">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="space-y-6"
                  >
                    {/* Company & Role Header */}
                    <div className="space-y-4 pb-6 border-b border-gray-200">
                      <div className="flex items-start gap-6">
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 bg-gray-100 rounded-none flex items-center justify-center">
                            <Image 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              width={48} 
                              height={48} 
                              className="object-contain"
                            />
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <h2 className="text-2xl font-light text-gray-900 tracking-wide">
                                {exp.title}
                              </h2>
                              <h3 className="text-lg font-medium text-gray-600 tracking-wider">
                                {exp.company}
                              </h3>
                            </div>
                            {exp.isCurrent && (
                              <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1 tracking-wider">
                                CURRENT
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                            <span className="font-light tracking-wide">{exp.date}</span>
                            <span className="hidden sm:block">•</span>
                            <span className="font-light tracking-wide uppercase text-xs">{exp.type}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 font-light leading-relaxed text-lg max-w-4xl">
                        {exp.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                        KEY RESPONSIBILITIES
                      </h4>
                      <div className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="text-gray-700 font-light leading-relaxed">
                              {responsibility}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                        TECHNOLOGIES & SKILLS
                      </h4>
                      <div className="text-gray-700 font-light leading-relaxed">
                        {exp.skills.join(' • ')}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Professional Summary */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-none p-8 text-center">
                  <p className="text-gray-700 font-light text-lg leading-relaxed max-w-4xl mx-auto">
                    Through diverse experiences in virtual work simulations, technical support, and educational leadership, 
                    I have developed a comprehensive understanding of professional software development practices, 
                    technical problem-solving, and effective communication in technology environments.
                  </p>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span>PROFESSIONAL HISTORY 2024-2025</span>
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

export default ExperienceModal;