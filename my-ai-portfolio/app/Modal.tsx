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
    { name: "Compter Engineering Student", icon: <Brain className="w-4 h-4" />, color: "bg-purple-100 text-purple-700" },
    { name: "Python", icon: <Code2 className="w-4 h-4" />, color: "bg-blue-100 text-blue-700" },
    { name: "Java", icon: <Code2 className="w-4 h-4" />, color: "bg-orange-100 text-orange-700" },
    { name: "GenAI", icon: <Zap className="w-4 h-4" />, color: "bg-green-100 text-green-700" },
    { name: "Machine Learning", icon: <Brain className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-700" }
  ];

  const interests = [
    { name: "AI Research", icon: <Target className="w-4 h-4" /> },
    { name: "Vibe Coding", icon: <Coffee className="w-4 h-4" /> },
    { name: "Working Out", icon: <Dumbbell className="w-4 h-4" /> }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
          className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Profile Image */}
              <motion.div variants={itemVariants} className="relative">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <Image
                    src="/headshot.jpg"
                    alt="David's Headshot"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>

              {/* Basic Info */}
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">David Geddam</h1>
                <p className="text-xl text-blue-200 mb-4">Computer Engineering Student</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    19 years old
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Greenville, SC
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Bob Jones University
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className={`${skill.color} px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 bg-white/10 text-white border border-white/20`}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[60vh]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Introduction */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">👋</span>
                  Hey there!
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm David, a Computer Engineering Student passionate about AI and deep learning. 
                  I love building intelligent systems that solve real-world problems and make a meaningful impact.
                </p>
              </motion.div>

              {/* Journey */}
              <motion.div variants={itemVariants} className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm an aspiring Generative AI / Prompt / LLM Engineer currently pursuing a B.S. in Computer Engineering at 
                  Bob Jones University. Over the past few years, I've explored web development, GUI applications, 
                  object-oriented programming, and artificial intelligence. Among these, I found myself especially 
                  drawn to AI and Deep Learning because of their potential to solve complex problems.
                </p>
              </motion.div>

              {/* Current Focus */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Currently Learning</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">Python for ML</h4>
                    <p className="text-green-700 text-sm">Diving deep into machine learning frameworks and algorithms</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Python</h4>
                    <p className="text-purple-700 text-sm">Implementing various libraries and hands-on practise with eda and feature engineering</p>
                  </div>
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">When I'm Not Coding</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <div
                      key={interest.name}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      {interest.icon}
                      {interest.name}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Goals */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Looking Ahead
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm passionate about leveraging the power of text, image, and video data generation to build 
                  intelligent systems that are both innovative and impactful. I'm constantly working to improve 
                  my skills, take on new challenges, and grow as a well-rounded engineer.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-4">
                  Feel free to reach out for collaboration, mentorship, or a conversation about the future of AI.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500 w-16">BJU:</span>
                    <a href="mailto:dgedd236@students.bju.edu" className="text-blue-600 hover:text-blue-700 transition-colors">
                      dgedd236@students.bju.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500 w-16">Personal:</span>
                    <a href="mailto:davidspurgeongeddam@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      davidspurgeongeddam@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-center">
              <p className="text-gray-500 text-sm">
                💡 Always learning, always building, always growing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AboutModal;