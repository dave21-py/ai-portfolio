// app/ResumeModal.tsx
'use client';

import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

type ResumeModalProps = {
  onClose: () => void;
};

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [pdfUrl, setPdfUrl] = useState<string>('');

  // Cache‐bust each open
  useEffect(() => {
    setPdfUrl(`/DavidGeddamResume2025.pdf?cb=${Date.now()}`);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="
          bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl 
          max-w-4xl w-full p-4 relative
          h-[90vh]
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 transition-colors z-10"
        >
          <IoMdClose size={24} />
        </button>

        {/* Header + Download link */}
        <div className="mb-4 flex-shrink-0">
          <h2 className="text-2xl font-bold text-white">My Resume</h2>
          <a
            href={pdfUrl.split('?')[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline text-sm"
          >
            Download Full PDF
          </a>
        </div>

        {/* PDF preview fills remaining space */}
        {pdfUrl && (
          <div className="flex-1 border border-gray-700 rounded-lg overflow-auto">
            <iframe
              key={pdfUrl}
              src={pdfUrl}
              className="w-full h-full"
              title="Resume Preview"
            />
          </div>
        )}
      </div>
    </div>
  );
}
