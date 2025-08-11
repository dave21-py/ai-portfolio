'use client';

import React, { useState } from 'react';
import { X, ExternalLink, Calendar } from 'lucide-react';
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
  { title: 'Google AI Essentials', issuer: 'Google & Coursera', image: '/google.png', link: 'https://www.coursera.org/account/accomplishments/certificate/DW89ZFOTCRO6', category: 'ai-ml', date: 'August 2025', type: 'Professional', skills: ['AI']},
  { title: 'Advanced Software Engineering', issuer: 'Walmart Global Tech', image: '/walmart.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_z4onoAb2QCEfZEHx8_1752722156254_completion_certificate.pdf', category: 'software-dev', date: 'July 2025', type: 'Professional', skills: ['Software Architecture', 'Python'] },
  { title: 'Claude Code in Action', issuer: 'Anthropic', image: '/claude.png', link: 'https://verify.skilljar.com/c/5qxd6z4f8xxr', category: 'ai-ml', date: 'July 2025', type: 'Professional', skills: ['Prompt Engineering', 'Claude Code', 'GenAI'] },
  { title: 'Foundations of Prompt Engineering', issuer: 'Amazon Web Services', image: '/aws.png', link: 'https://www.linkedin.com/in/david-geddam/details/certifications/1752094064398/single-media-viewer/?profileId=ACoAAFaSGCgBNTN2LtzaK1e7-hh1rXGUZSc2Ujg', category: 'ai-ml', date: 'Jan 2025', type: 'Professional', skills: ['Prompt Engineering', 'AWS', 'AI Models', 'GenAI'] },
  { title: 'GenAI Powered Data Analytics', issuer: 'Tata Group, Forage', image: '/tata.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_z4onoAb2QCEfZEHx8_1751843491388_completion_certificate.pdf', category: 'ai-ml', date: 'Jan 2025', type: 'Professional', skills: ['Data Analytics', 'GenAI', 'Business Intelligence'] },
  { title: 'Software Development', issuer: 'Datacom, Forage', image: '/datacom.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_z4onoAb2QCEfZEHx8_1752372071695_completion_certificate.pdf', category: 'software-dev', date: 'Jan 2025', type: 'Professional', skills: ['Software Development', 'Full-Stack', 'System Design'] },
  { title: 'Technology Consulting', issuer: 'Deloitte, Forage', image: '/tech.png', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_z4onoAb2QCEfZEHx8_1751348369223_completion_certificate.pdf', category: 'general', date: 'Jan 2025', type: 'Professional', skills: ['Tech Consulting', 'Business Strategy', 'Digital Transformation'] },
  { title: 'Complete Prompt Engineering for AI Bootcamp', issuer: 'Udemy', image: '/udemy.png', link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/', category: 'ai-ml', date: 'Dec 2024', type: 'Bootcamp', skills: ['Prompt Engineering', 'AI Optimization', 'Language Models'] },
  { title: 'Audio Visual Associate', issuer: 'Extron', image: '/extron.png', link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/', category: 'hardware', date: 'Nov 2024', type: 'Certification', skills: ['AV Systems', 'Hardware Config', 'System Integration'] },
  { title: 'AI Python for Beginners', issuer: 'DeepLearning.ai', image: '/aipython.png', link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/', category: 'ai-ml', date: 'Oct 2024', type: 'Course', skills: ['Python', 'AI Programming', 'Machine Learning'] },
  { title: 'E3PT Certified', issuer: 'English3', image: '/e3pt.png', link: 'https://elearn.english3.com/resource/?type=pdf&src=/public/useruploads/certificate__16857333561634224-1326.pdf', category: 'general', date: 'Jun 2023', type: 'Professional', skills: ['English']}
];

const categories = [
  { id: 'all', label: 'ALL CERTIFICATIONS' },
  { id: 'ai-ml', label: 'AI & MACHINE LEARNING' },
  { id: 'software-dev', label: 'SOFTWARE DEVELOPMENT' },
  { id: 'hardware', label: 'HARDWARE & SYSTEMS' },
  { id: 'general', label: 'GENERAL SKILLS' }
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
          className="relative bg-white rounded-none shadow-2xl max-w-6xl w-full h-[95vh] overflow-hidden flex flex-col"
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
                    PROFESSIONAL CERTIFICATIONS
                  </h1>
                  <div className="h-px bg-gray-900 w-40 mx-auto"></div>
                </div>
                <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
                  CONTINUOUS LEARNING + PROFESSIONAL DEVELOPMENT
                </p>
              </motion.div>

              {/* Category Filter */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                    FILTER BY CATEGORY
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-3 text-sm font-light tracking-wide transition-all ${
                        selectedCategory === category.id 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.label}
                      <span className="ml-2 text-xs opacity-60">
                        ({category.id === 'all' ? certificates.length : certificates.filter(c => c.category === category.id).length})
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Certificates Grid */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredCertificates.map((cert, index) => (
                      <motion.a
                        key={cert.title}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="group block space-y-4"
                      >
                        {/* Certificate Image */}
                        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                          <Image 
                            src={cert.image} 
                            alt={cert.title} 
                            fill 
                            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full">
                              <ExternalLink className="w-4 h-4" />
                            </div>
                          </div>
                        </div>

                        {/* Certificate Info */}
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:text-gray-600 transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-sm font-light text-gray-600">
                              {cert.issuer}
                            </p>
                          </div>

                          {/* Skills */}
                          <div className="text-xs font-light text-gray-500 tracking-wide">
                            {cert.skills.join(' • ')}
                          </div>

                          {/* Date and Type */}
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-gray-400 uppercase tracking-wider">
                              {cert.type}
                            </span>
                            <div className="flex items-center gap-1 text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span className="font-light">{cert.date}</span>
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Professional Statement */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-none p-8 text-center">
                  <p className="text-gray-700 font-light text-lg leading-relaxed max-w-4xl mx-auto">
                    These certifications represent a commitment to continuous learning and staying current 
                    with evolving technologies. Each credential demonstrates practical knowledge and skills 
                    acquired through rigorous training programs and professional development initiatives.
                  </p>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span>PROFESSIONAL CREDENTIALS 2023-2025</span>
                  <span>DAVID M. GEDDAM</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}