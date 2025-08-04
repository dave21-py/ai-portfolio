'use client';

import React, { useState } from 'react';
import { X, Award, ExternalLink, Calendar, Building, Filter, Zap, Brain, Code, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  link: string;
  category: 'ai-ml' | 'cloud' | 'software-dev' | 'hardware' | 'general';
  date: string;
  type: 'Professional' | 'Course' | 'Bootcamp' | 'Certification';
  skills: string[];
}

const certificates: Certificate[] = [
  { title: 'Advanced Software Engineering', issuer: 'Walmart Global Tech', image: '/walmart.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_z4onoAb2QCEfZEHx8_1752722156254_completion_certificate.pdf', category: 'software-dev', date: 'July 2025', type: 'Professional', skills: ['Software Architecture', 'Python'] },
  { title: 'Claude Code in Action', issuer: 'Anthropic', image: '/claude.png', link: 'https://verify.skilljar.com/c/5qxd6z4f8xxr', category: 'ai-ml', date: 'July 2025', type: 'Professional', skills: ['Prompt Engineering', 'Claude Code', 'GenAI'] },
  { title: 'Foundations of Prompt Engineering', issuer: 'Amazon Web Services', image: '/aws.png', link: 'https://www.linkedin.com/in/david-geddam/details/certifications/1752094064398/single-media-viewer/?profileId=ACoAAFaSGCgBNTN2LtzaK1e7-hh1rXGUZSc2Ujg', category: 'ai-ml', date: 'Jan 2025', type: 'Professional', skills: ['Prompt Engineering', 'AWS', 'AI Models', 'GenAI'] },
  { title: 'GenAI Powered Data Analytics', issuer: 'Tata Group, Forage', image: '/tata.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_z4onoAb2QCEfZEHx8_1751843491388_completion_certificate.pdf', category: 'ai-ml', date: 'Jan 2025', type: 'Professional', skills: ['Data Analytics', 'GenAI', 'Business Intelligence'] },
  { title: 'Software Development', issuer: 'Datacom, Forage', image: '/datacom.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_z4onoAb2QCEfZEHx8_1752372071695_completion_certificate.pdf', category: 'software-dev', date: 'Jan 2025', type: 'Professional', skills: ['Software Development', 'Full-Stack', 'System Design'] },
  { title: 'Technology Consulting', issuer: 'Deloitte, Forage', image: '/tech.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_z4onoAb2QCEfZEHx8_1751348369223_completion_certificate.pdf', category: 'general', date: 'Jan 2025', type: 'Professional', skills: ['Tech Consulting', 'Business Strategy', 'Digital Transformation'] },
  { title: 'Complete Prompt Engineering for AI Bootcamp', issuer: 'Udemy', image: '/udemy.png', link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/', category: 'ai-ml', date: 'Dec 2024', type: 'Bootcamp', skills: ['Prompt Engineering', 'AI Optimization', 'Language Models'] },
  { title: 'Audio Visual Associate', issuer: 'Extron', image: '/extron.png', link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/', category: 'hardware', date: 'Nov 2024', type: 'Certification', skills: ['AV Systems', 'Hardware Config', 'System Integration'] },
  { title: 'AI Python for Beginners', issuer: 'DeepLearning.ai', image: '/aipython.png', link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/', category: 'ai-ml', date: 'Oct 2024', type: 'Course', skills: ['Python', 'AI Programming', 'Machine Learning'] }
];

const categories = [
  { id: 'all', label: 'All', icon: <Award size={14} /> },
  { id: 'ai-ml', label: 'AI & ML', icon: <Brain size={14} /> },
  { id: 'software-dev', label: 'Software Dev', icon: <Code size={14} /> },
  { id: 'hardware', label: 'Hardware', icon: <Zap size={14} /> },
  { id: 'general', label: 'General', icon: <Building size={14} /> }
];

type CertificateModalProps = {
  onClose: () => void;
};

export default function CertificateModal({ onClose }: CertificateModalProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
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
          className="relative bg-gray-50 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-8 flex-shrink-0 text-center">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"><X className="w-5 h-5" /></button>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="inline-block p-4 bg-yellow-100/50 rounded-2xl mb-4">
                <Award className="w-10 h-10 text-yellow-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Certifications</h1>
              <p className="text-lg text-gray-600">A showcase of continuous learning and professional development.</p>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
              
              {/* Filters */}
              <motion.div variants={itemVariants} className="flex justify-center gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border'
                    }`}
                  >
                    {category.icon}
                    {category.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                      {category.id === 'all' ? certificates.length : certificates.filter(c => c.category === category.id).length}
                    </span>
                  </button>
                ))}
              </motion.div>

              {/* Certificate Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredCertificates.map((cert) => (
                    <motion.a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="group block bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Card Header */}
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 p-2 flex items-center justify-center flex-shrink-0">
                          <Image src={cert.image} alt={cert.title} width={40} height={40} className="object-contain" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">{cert.title}</h3>
                          <p className="text-sm text-gray-500">{cert.issuer}</p>
                        </div>
                        <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0 mt-1" />
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {cert.skills.map(skill => (
                          <span key={skill} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md">{skill}</span>
                        ))}
                      </div>

                      {/* Card Footer */}
                      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3">
                        <span className="font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded-md">{cert.type}</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}