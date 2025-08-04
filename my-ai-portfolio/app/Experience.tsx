'use client';

import React from 'react';
import { X, MapPin, Calendar, Building2, Users, Award, Briefcase, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ExperienceModalProps {
  onClose: () => void;
}

const experienceData = [
  {
    logo: '/forage-logo.png', 
    company: 'Forage',
    title: 'Virtual Job Simulation',
    date: 'June 2025 - Present',
    duration: '6 months',
    type: 'Virtual Experience',
    location: 'Remote',
    isCurrent: true,
    highlights: [
      { company: 'Walmart Global Tech', program: 'Advanced Software Engineering Virtual Experience', focus: 'Backend Systems & Architecture' },
      { company: 'Datacom', program: 'Software Development Virtual Experience', focus: 'Full-Stack Development' },
      { company: 'Tata', program: 'GenAI Powered Data Analytics Virtual Experience', focus: 'AI/ML Applications' },
      { company: 'Deloitte', program: 'Technology Consulting Virtual Experience', focus: 'Enterprise Solutions' }
    ],
    skills: ['Software Engineering', 'Data Analytics', 'GenAI', 'Consulting']
  },
  {
    logo: '/bju-logo.png',
    company: 'Bob Jones University',
    title: 'IT AV Technician',
    date: 'May 2025 - Present',
    duration: '7 months',
    type: 'Part-time',
    location: 'Greenville, SC',
    isCurrent: true,
    description: [
      'Provide on-site technical support for campus-wide Audio/Visual systems',
      'Troubleshoot hardware and software issues to ensure successful event execution',
      'Maintain and configure AV equipment for academic and administrative events'
    ],
    skills: ['Technical Support', 'Hardware Troubleshooting', 'AV Systems', 'Problem Solving']
  },
  {
    logo: '/bju-logo.png',
    company: 'Bob Jones University',
    title: 'Training Assistant - Arduino Computer Engineering',
    date: 'July 2025',
    duration: '1 month',
    type: 'Teaching Assistant',
    location: 'Greenville, SC',
    isCurrent: false,
    description: [
      'Instructed a cohort of 15+ middle and high school students in Arduino programming fundamentals',
      'Guided students through hands-on projects to improve practical understanding of computer engineering',
      'Developed curriculum materials and provided one-on-one mentoring support'
    ],
    skills: ['Teaching', 'Arduino', 'Computer Engineering', 'Mentoring'],
    impact: '15+ students trained in embedded systems programming'
  }
];

const ExperienceModal = ({ onClose }: ExperienceModalProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                <Briefcase className="w-10 h-10 text-blue-400" />
                Experience
              </h1>
              <p className="text-gray-300 text-lg">Building expertise through hands-on learning and real-world application</p>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[70vh]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300"></div>

              <div className="space-y-8">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-6">
                      <div className={`w-4 h-4 rounded-full border-4 border-white ${
                        exp.isCurrent ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-400'
                      }`}></div>
                    </div>

                    {/* Experience Card */}
                    <div className="ml-16 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-100 p-2 ${
                          exp.isCurrent ? 'ring-2 ring-blue-500 shadow-lg' : ''
                        }`}>
                          <Image 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            width={64} 
                            height={64} 
                            className="w-full h-full object-contain"
                          />
                          {exp.isCurrent && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                              <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                            </div>
                            {exp.isCurrent && (
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Current
                              </span>
                            )}
                          </div>

                          {/* Meta Information */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {exp.type}
                            </div>
                          </div>

                          {/* Special handling for Forage highlights */}
                          {exp.highlights ? (
                            <div className="space-y-3 mb-4">
                              {exp.highlights.map((highlight, idx) => (
                                <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Award className="w-4 h-4 text-blue-600" />
                                    <span className="font-semibold text-blue-900">{highlight.company}</span>
                                  </div>
                                  <p className="text-gray-700 text-sm mb-1">{highlight.program}</p>
                                  <p className="text-blue-700 text-xs font-medium">Focus: {highlight.focus}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-2 mb-4">
                              {exp.description?.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Impact */}
                          {exp.impact && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                              <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-green-600" />
                                <span className="text-green-900 font-medium text-sm">{exp.impact}</span>
                              </div>
                            </div>
                          )}

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <span 
                                key={idx} 
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm">
                🚀 Continuously learning and growing through diverse experiences
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Users className="w-4 h-4" />
                <span>Ready for new challenges</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExperienceModal;