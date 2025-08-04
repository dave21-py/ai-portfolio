'use client';

import React, { useState } from 'react';
import { X, Mail, Github, Linkedin, Copy, CheckCircle, Send, MessageCircle } from 'lucide-react';
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
      icon: <Mail size={20} className="text-blue-600" />,
      label: 'Personal Email',
      value: 'davidspurgeongeddam@gmail.com',
      href: 'mailto:davidspurgeongeddam@gmail.com',
      description: 'For professional inquiries & collaborations.',
    },
    {
      icon: <Mail size={20} className="text-green-600" />,
      label: 'University Email',
      value: 'dgedd236@students.bju.edu',
      href: 'mailto:dgedd236@students.bju.edu',
      description: 'For academic or university-related matters.',
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/david-geddam/', icon: <Linkedin size={24} />, username: 'david-geddam' },
    { name: 'GitHub', href: 'https://github.com/dave21-py', icon: <Github size={24} />, username: '@dave21-py' },
    { name: 'Discord', href: 'https://discord.com/users/marl0916_20448', icon: <MessageCircle size={24} />, username: 'marl0916_20448' }
  ];

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
          className="relative bg-gray-50 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-8 flex-shrink-0 text-center">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"><X className="w-5 h-5" /></button>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="inline-block p-4 bg-blue-100/50 rounded-2xl mb-4">
                <Send className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Let's Connect</h1>
              <p className="text-lg text-gray-600">Ready to collaborate, learn, and build the future together.</p>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
              
              {/* Email Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 rounded-xl">{method.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{method.label}</h3>
                          <p className="text-gray-500 text-sm">{method.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 border rounded-lg p-2">
                        <a href={method.href} className="text-sm text-blue-600 hover:underline flex-1 truncate">{method.value}</a>
                        <button onClick={() => handleCopy(method.value)} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-200 transition-all">
                          {copiedEmail === method.value ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Socials Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Find Me Online</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="inline-block p-4 bg-gray-100 rounded-2xl mb-4 transition-all group-hover:scale-110">
                        {social.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900">{social.name}</h3>
                      <p className="text-gray-500 text-sm">{social.username}</p>
                    </a>
                  ))}
                </div>
              </motion.div>
              
              {/* CTA Section */}
              <motion.div variants={itemVariants} className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Have a project or opportunity in mind?</h3>
                <p className="text-gray-600 mb-6">I'm always open to discussing new ideas and collaborations.</p>
                <a href="mailto:davidspurgeongeddam@gmail.com?subject=Let's%20Connect!" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                  <Mail className="w-4 h-4" />
                  Send me an Email
                </a>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;