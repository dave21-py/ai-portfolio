'use client';

import React from 'react';
import { X, Code2, Brain, Database, Cog, Users, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillsModalProps {
  onClose: () => void;
}

const coreStrengths = {
  ai: {
    title: 'AI & Machine Learning',
    icon: <Brain size={20} className="text-purple-600" />,
    bgColor: 'bg-purple-50',
    description: 'Specializing in the technologies that power modern intelligent systems.',
    skills: ['Python', 'Prompt Engineering', 'GenAI', 'LLM Fundamentals', 'Deep Learning', 'Data Analysis']
  },
  dev: {
    title: 'Programming & Development',
    icon: <Code2 size={20} className="text-blue-600" />,
    bgColor: 'bg-blue-50',
    description: 'A strong foundation in multiple languages and robust development practices.',
    skills: ['Java', 'Python', 'JavaFX', 'HTML/CSS', 'Git & GitHub', 'System Design']
  }
};

const otherSkills = [
  {
    category: 'Data Science & Analytics',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Data Visualization']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Docker', 'Gradle', 'AWS', 'Extron GUI Designer', 'XML', 'Linux']
  },
  {
    category: 'Professional Skills',
    skills: ['Problem Solving', 'Critical Thinking', 'Learning Agility', 'Teamwork', 'Creativity', 'Focus']
  }
];

const SkillsModal = ({ onClose }: SkillsModalProps) => {
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
          className="relative bg-gray-50 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-8 flex-shrink-0 text-center">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"><X className="w-5 h-5" /></button>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="inline-block p-4 bg-yellow-100/50 rounded-2xl mb-4">
                <Lightbulb className="w-10 h-10 text-yellow-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Skills & Expertise</h1>
              <p className="text-lg text-gray-600">The tools and technologies I use to build and innovate.</p>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
              
              {/* Core Strengths Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Core Strengths</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {Object.values(coreStrengths).map(strength => (
                    <div key={strength.title} className={`border rounded-2xl p-6 ${strength.bgColor} border-gray-200`}>
                      <div className="flex items-center gap-3 mb-3">
                        {strength.icon}
                        <h3 className="text-lg font-bold text-gray-900">{strength.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{strength.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {strength.skills.map(skill => (
                          <span key={skill} className="bg-white text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md border">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Full Skillset Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Full Skillset</h2>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                    {otherSkills.map(category => (
                      <div key={category.category}>
                        <h3 className="font-semibold text-gray-800 mb-2">{category.category}</h3>
                        <ul className="space-y-1.5">
                          {category.skills.map(skill => (
                            <li key={skill} className="text-gray-600 text-sm">{skill}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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