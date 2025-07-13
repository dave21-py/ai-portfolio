'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

interface ExperienceModalProps {
  onClose: () => void;
}

// --- Your Experience Data Goes Here ---
// This makes it super easy to update your experience in the future.
// Just add new objects to this array.
const experienceData = [
  {
    logo: '/nvidia-logo.png', // IMPORTANT: Create a 100x100px logo and place in your /public folder
    company: 'NVIDIA',
    title: 'Deep Learning Intern',
    date: 'Summer 2024',
    description: [
      'Developed and optimized computer vision models for real-time object detection.',
      'Collaborated with the research team to implement a novel neural network architecture, resulting in a 10% performance increase.',
      'Utilized PyTorch and CUDA for high-performance model training and inference.'
    ]
  },
  {
    logo: '/bju-logo.png', // IMPORTANT: Create a 100x100px logo and place in your /public folder
    company: 'Bob Jones University AI Lab',
    title: 'AI Research Assistant',
    date: 'Jan 2024 – May 2024',
    description: [
      'Assisted senior researchers in a project on Natural Language Processing for sentiment analysis.',
      'Responsible for preprocessing and cleaning large text datasets for model training.',
      'Co-authored a research paper summary on emerging trends in Large Language Models (LLMs).'
    ]
  }
];

const ExperienceModal = ({ onClose }: ExperienceModalProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="sticky top-4 right-4 float-right text-gray-400 hover:text-white transition-colors z-20"
          onClick={onClose}
        >
          <IoMdClose size={28} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-bold text-white mb-10">Work Experience</h2>

          <div className="relative">
            {/* The timeline line */}
            <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-600/50" aria-hidden="true"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* The timeline dot and logo */}
                  <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                    <span className="absolute left-6 top-7 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-800 z-10"></span>
                    <Image src={exp.logo} alt={`${exp.company} logo`} width={60} height={60} className="rounded-full relative z-0" />
                  </div>
                  
                  {/* The content */}
                  <div className="flex-1 text-white">
                    <p className="text-lg font-bold">{exp.title}</p>
                    <p className="text-md text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400 mt-1">{exp.date}</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;