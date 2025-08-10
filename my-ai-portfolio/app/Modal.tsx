'use client';

import React from 'react';
import { X, MapPin, Calendar, Mail, GraduationCap, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal = ({ onClose }: AboutModalProps) => {
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
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="relative bg-white rounded-none shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Column - Image */}
            <div className="lg:w-2/5 bg-gray-50">
              <div className="h-full flex items-start justify-center pt-16 pb-12 px-12">
                <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative"
                >
                  <div className="w-80 h-96 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                    <Image
                      src="/headshot.jpg"
                      alt="David M. Geddam"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-3/5 bg-white">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="h-full overflow-y-auto"
              >
                <div className="p-12 space-y-8">
                  {/* Header */}
                  <motion.div variants={itemVariants} className="space-y-4">
                    <div className="space-y-1">
                      <h1 className="text-4xl font-light tracking-tight text-gray-900 leading-tight">
                        DAVID M. GEDDAM
                      </h1>
                      <div className="h-px bg-gray-900 w-20"></div>
                    </div>
                    <p className="text-lg font-light text-gray-600 tracking-wide">
                      COMPUTER SCIENCE STUDENT
                    </p>
                  </motion.div>

                  {/* Bio Paragraph */}
                  <motion.div variants={itemVariants} className="space-y-6">
                    <p className="text-gray-700 leading-relaxed font-light text-lg">
                      <strong className="font-medium">David M. Geddam</strong> is an aspiring AI engineer, vibe coder, and 
                      computer science student based in Greenville, SC. His work blends cutting-edge vibe coded projects, java projects, 
                      with an innovative and methodical approach, creating systems that are both 
                      technically sophisticated and practically impactful.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light text-lg">
                      David's academic pursuits include collaboration with cutting-edge technologies, 
                      frameworks, and emerging AI paradigms. His work has been recognized in 
                      academic settings and personal projects, with achievements 
                      including developing projects, earning recognition in 
                      Computer Science coursework, and receiving the 
                      Dean's List recognition for academic excellence.
                    </p>

                    <p className="text-gray-700 leading-relaxed font-light text-lg">
                      David continues to explore frontiers of artificial intelligence, machine learning, and 
                      software engineering through his academic work and personal 
                      projects.
                    </p>
                  </motion.div>

                  {/* Details Section */}
                  <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                          EDUCATION
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-gray-700">
                            <GraduationCap className="w-4 h-4 text-gray-400" />
                            <span className="font-light">B.S. Computer Science, Bob Jones University</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                          LOCATION
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-gray-700">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="font-light">Greenville, SC</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                          SPECIALTIES
                        </h3>
                        <div className="text-gray-700 font-light leading-relaxed">
                          Python, Java,
                          Machine Learning,
                          Python Development 
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Section */}
                  <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                      CONTACT
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a 
                          href="mailto:dgedd236@students.bju.edu" 
                          className="text-gray-700 hover:text-gray-900 transition-colors font-light"
                        >
                          dgedd236@students.bju.edu
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a 
                          href="mailto:davidspurgeongeddam@gmail.com" 
                          className="text-gray-700 hover:text-gray-900 transition-colors font-light"
                        >
                          davidspurgeongeddam@gmail.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Footer Credit */}
                  <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
                    <div className="flex items-center justify-between">
                      <span>PORTFOLIO 2025</span>
                      <span>AI ENGINEERING</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AboutModal;