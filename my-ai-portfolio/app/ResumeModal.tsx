'use client';

import React, { useEffect, useState } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="relative bg-gray-50 rounded-3xl shadow-2xl max-w-6xl w-full h-[95vh] max-h-[1200px] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-6 flex-shrink-0">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"><X className="w-5 h-5" /></button>
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100/50 rounded-xl">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Resume</h1>
                  <p className="text-gray-600">A comprehensive overview of my skills and experience.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={pdfUrl.split('?')[0]}
                  download="David_Geddam_Resume_2025.pdf"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-sm"
                >
                  <Download size={16} />
                  Download
                </a>
                <a
                  href={pdfUrl.split('?')[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors border"
                >
                  <ExternalLink size={16} />
                  Open
                </a>
              </div>
            </motion.div>
          </div>

          {/* PDF Preview Container */}
          <div className="flex-1 p-8 bg-gray-100/50 relative">
            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading Resume...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }} // Fade in only when not loading
              className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              {pdfUrl && (
                <iframe
                  key={pdfUrl} // Re-renders iframe when url changes
                  src={pdfUrl}
                  className="w-full h-full"
                  title="Resume Preview"
                  style={{ border: 'none' }}
                  onLoad={() => setIsLoading(false)} // Set loading to false once PDF is loaded
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}