'use client';

import React from 'react';
import { X, MapPin, Calendar, Mail, GraduationCap, Brain, Code2, Zap, Target, Coffee, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal = ({ onClose }: AboutModalProps) => {
  const skills = [
    { name: "Python", icon: <Code2 size={20} />, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { name: "Java", icon: <Coffee size={20} />, color: "text-orange-600 bg-orange-50 border-orange-200" },
    { name: "GenAI", icon: <Zap size={20} />, color: "text-purple-600 bg-purple-50 border-purple-200" },
    { name: "Machine Learning", icon: <Brain size={20} />, color: "text-green-600 bg-green-50 border-green-200" }
  ];

  const interests = [
    { name: "AI Research", icon: <Target size={16} /> },
    { name: "Vibe Coding", icon: <Coffee size={16} /> },
    { name: "Working Out", icon: <Dumbbell size={16} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  // <-- THE FIX IS HERE: The 'transition' property has been removed from 'visible'.
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
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-8 md:p-10 flex-shrink-0">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"><X className="w-5 h-5" /></button>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <motion.div variants={itemVariants} className="relative flex-shrink-0">
                <Image src="/headshot.jpg" alt="David's Headshot" width={144} height={144} className="w-36 h-36 object-cover rounded-2xl shadow-lg" />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </motion.div>
              {/* Basic Info */}
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">David Geddam</h1>
                <p className="text-xl text-gray-600 mb-5">Computer Engineering Student</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2"><MapPin size={14} />Greenville, SC</div>
                  <div className="flex items-center gap-2"><GraduationCap size={14} />Bob Jones University</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 md:p-10 overflow-y-auto">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
              
              {/* Introduction */}
              <motion.div variants={itemVariants}>
                <p className="text-gray-600 text-xl text-center leading-relaxed">
                  I'm an aspiring AI Engineer passionate about building intelligent systems that solve real-world problems.
                  I love exploring the intersection of deep learning, web development, and elegant user experiences.
                </p>
              </motion.div>
              
              {/* Key Skills Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Key Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map(skill => (
                    <div key={skill.name} className={`flex items-center gap-3 p-4 rounded-xl border ${skill.color}`}>
                      {skill.icon}
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Modular Info Blocks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><Brain size={18} className="text-blue-500" />My Journey</h3>
                  <p className="text-gray-600 leading-relaxed">Pursuing a B.S. in Computer Engineering, I've delved into web dev, OOP, and AI. I found my calling in Deep Learning and its potential to tackle complex challenges head-on.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><Target size={18} className="text-orange-500" />Looking Ahead</h3>
                  <p className="text-gray-600 leading-relaxed">I am passionate about leveraging text, image, and video data generation. I'm constantly working to improve my skills and grow as a well-rounded engineer.</p>
                </motion.div>
              </div>

              {/* Interests & Contact */}
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">When I'm Not Coding</h3>
                  <div className="flex flex-wrap gap-3">
                    {interests.map(interest => (
                      <div key={interest.name} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium text-sm">
                        {interest.icon} {interest.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Mail size={18} />Let's Connect</h3>
                  <div className="space-y-2">
                    <a href="mailto:dgedd236@students.bju.edu" className="block text-blue-600 hover:underline text-sm">dgedd236@students.bju.edu</a>
                    <a href="mailto:davidspurgeongeddam@gmail.com" className="block text-blue-600 hover:underline text-sm">davidspurgeongeddam@gmail.com</a>
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

export default AboutModal;