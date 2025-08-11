'use client';

import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ResumeModalProps = {
  onClose: () => void;
};

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Cache-bust each time the modal is opened
  useEffect(() => {
    const url = `/DavidGeddamUpdated2025.pdf?cb=${Date.now()}`;
    setPdfUrl(url);
    setIsLoading(true); // Reset loading state on each open
  }, []);

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

          {/* Header */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="border-b border-gray-200 p-8 flex-shrink-0"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-light tracking-tight text-gray-900 leading-tight">
                  RESUME
                </h1>
                <div className="h-px bg-gray-900 w-24"></div>
                <p className="text-lg font-light text-gray-600 tracking-wide">
                  COMPREHENSIVE PROFESSIONAL OVERVIEW
                </p>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={pdfUrl.split('?')[0]}
                  download="David_Geddam_Resume_2025.pdf"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 font-light tracking-wide hover:bg-gray-800 transition-all"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD
                </a>
                <a
                  href={pdfUrl.split('?')[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-gray-300 text-gray-700 px-6 py-3 font-light tracking-wide hover:bg-gray-50 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  OPEN
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* PDF Preview Container */}
          <div className="flex-1 p-8 bg-gray-50 relative">
            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center space-y-4">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto"></div>
                    <p className="text-gray-600 font-light tracking-wide">LOADING RESUME</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              className="w-full h-full bg-white rounded-none shadow-lg border border-gray-200 overflow-hidden"
            >
              {pdfUrl && (
                <iframe
                  key={pdfUrl}
                  src={pdfUrl}
                  className="w-full h-full"
                  title="Resume Preview"
                  style={{ border: 'none' }}
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-200 px-8 py-4 bg-gray-50"
          >
            <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider">
              <span>PROFESSIONAL RESUME 2025</span>
              <span>DAVID M. GEDDAM</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}