'use client';

import React, { useState } from 'react';
import { X, Mail, Github, Linkedin, Copy, CheckCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedEmail(textToCopy);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const contactMethods = [
    {
      label: 'PERSONAL EMAIL',
      value: 'davidspurgeongeddam@gmail.com',
      href: 'mailto:davidspurgeongeddam@gmail.com',
      description: 'For professional inquiries and collaboration opportunities.',
    },
    {
      label: 'UNIVERSITY EMAIL',
      value: 'dgedd236@students.bju.edu',
      href: 'mailto:dgedd236@students.bju.edu',
      description: 'For academic and university-related correspondence.',
    }
  ];

  const socialLinks = [
    { 
      name: 'LINKEDIN', 
      href: 'https://www.linkedin.com/in/david-geddam/', 
      icon: <Linkedin className="w-5 h-5" />, 
      username: 'david-geddam',
      description: 'Professional network and career updates'
    },
    { 
      name: 'GITHUB', 
      href: 'https://github.com/dave21-py', 
      icon: <Github className="w-5 h-5" />, 
      username: 'dave21-py',
      description: 'Open source projects and code repositories'
    },
    { 
      name: 'DISCORD', 
      href: 'https://discord.com/users/marl0916_20448', 
      icon: <MessageCircle className="w-5 h-5" />, 
      username: 'marl0916_20448',
      description: 'Casual conversations and community engagement'
    }
  ];

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
          className="relative bg-white rounded-none shadow-2xl max-w-4xl w-full h-[95vh] overflow-hidden flex flex-col"
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
                    LET'S CONNECT
                  </h1>
                  <div className="h-px bg-gray-900 w-24 mx-auto"></div>
                </div>
                <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
                  READY TO COLLABORATE + BUILD THE FUTURE TOGETHER
                </p>
              </motion.div>

              {/* Email Contact Section */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 tracking-wide mb-8">
                    DIRECT CONTACT
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {contactMethods.map((method, index) => (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      className="space-y-4 pb-6 border-b border-gray-200"
                    >
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-900 tracking-wider">
                          {method.label}
                        </h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-gray-50 p-4">
                        <a 
                          href={method.href} 
                          className="text-gray-700 hover:text-gray-900 transition-colors flex-1 font-light text-sm"
                        >
                          {method.value}
                        </a>
                        <button 
                          onClick={() => handleCopy(method.value)} 
                          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        >
                          {copiedEmail === method.value ? 
                            <CheckCircle className="w-4 h-4 text-green-500" /> : 
                            <Copy className="w-4 h-4" />
                          }
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links Section */}
              <motion.div variants={itemVariants} className="space-y-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 tracking-wide mb-8">
                    SOCIAL PRESENCE
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="group space-y-4 text-center"
                    >
                      <div className="space-y-3">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 group-hover:bg-gray-900 transition-colors duration-300">
                          <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                            {social.icon}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium text-gray-900 tracking-wider group-hover:text-gray-600 transition-colors">
                            {social.name}
                          </h3>
                          <p className="text-xs font-light text-gray-600 tracking-wide">
                            {social.username}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs font-light text-gray-500 leading-relaxed">
                        {social.description}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Call to Action Section */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-none p-8 text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-900 tracking-wide">
                      COLLABORATION OPPORTUNITIES
                    </h3>
                    <p className="text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
                      Whether you have a project in mind, are looking for collaboration, or simply want to discuss 
                      emerging technologies, I'm always open to meaningful conversations and new opportunities.
                    </p>
                  </div>
                  <a 
                    href="mailto:davidspurgeongeddam@gmail.com?subject=Collaboration%20Opportunity" 
                    className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 font-light tracking-wide hover:bg-gray-800 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    SEND MESSAGE
                  </a>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span>CONTACT INFORMATION</span>
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

export default ContactModal;