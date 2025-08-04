'use client';

import React from 'react';
import { X, Calendar, Briefcase, Award } from 'lucide-react';
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
    date: 'June 2024 - Present',
    type: 'Virtual Experience',
    isCurrent: true,
    responsibilities: [
      'Walmart Global Tech: Executed backend software engineering tasks, focusing on systems architecture and performance.',
      'Datacom: Engaged in a full-stack software development lifecycle, building and deploying features.',
      'Tata: Applied GenAI and data analytics techniques to derive insights from large datasets.',
      'Deloitte: Gained experience in technology consulting methodologies and enterprise solution design.'
    ],
    skills: ['Software Engineering', 'Data Analytics', 'GenAI', 'Consulting', 'Backend', 'Full-Stack']
  },
  {
    logo: '/bju-logo.png',
    company: 'Bob Jones University',
    title: 'IT AV Technician',
    date: 'May 2024 - Present',
    type: 'Part-time',
    isCurrent: true,
    responsibilities: [
      'Provide on-site technical support for over 50 campus-wide Audio/Visual systems during live events.',
      'Troubleshoot hardware and software issues under pressure to ensure successful event execution.',
      'Maintain and configure a diverse range of AV equipment for academic and administrative functions.'
    ],
    skills: ['Technical Support', 'Hardware Troubleshooting', 'AV Systems', 'Problem Solving']
  },
  {
    logo: '/bju-logo.png',
    company: 'Bob Jones University',
    title: 'Training Assistant - Arduino Computer Engineering',
    date: 'July 2024',
    type: 'Teaching Assistant',
    isCurrent: false,
    responsibilities: [
      'Instructed a cohort of 15+ middle and high school students in Arduino programming fundamentals.',
      'Guided students through hands-on projects to improve practical understanding of computer engineering.',
      'Developed curriculum materials and provided one-on-one mentoring and support.'
    ],
    skills: ['Teaching', 'Arduino', 'Embedded Systems', 'Mentoring'],
  }
];

const ExperienceModal = ({ onClose }: ExperienceModalProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
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
              <div className="inline-block p-4 bg-green-100/50 rounded-2xl mb-4">
                <Briefcase className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Experience</h1>
              <p className="text-lg text-gray-600">Building expertise through hands-on learning and real-world application.</p>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-2xl p-6"
                >
                  {/* Experience Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gray-100 p-2 flex items-center justify-center">
                      <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} className="object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-gray-600 font-medium">{exp.company}</p>
                        </div>
                        {exp.isCurrent && (
                          <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Current</div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Calendar size={14} />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities/Highlights */}
                  <ul className="space-y-2 mb-4 pl-5">
                    {exp.responsibilities.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-green-500 mt-1"><Award size={14} /></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExperienceModal;