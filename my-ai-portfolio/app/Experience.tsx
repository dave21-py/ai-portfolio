'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

interface ExperienceModalProps {
  onClose: () => void;
}

// --- Your Updated Experience Data ---
const experienceData = [
  {
    logo: '/forage-logo.png', 
    company: 'Forage',
    title: 'Virtual Job Simulation',
    date: 'June 2025 - Present',
    isCurrent: true,
    description: [
      'Walmart Global Tech - Advanced Software Engineering Virtual Experience.',
      'Datacom - Software Development Virtual Experience.',
      'Tata - GenAI Powered Data Analytics Virtual Experience.',
      'Deloitte - Technology Consulting Virtual Experience.'
    ]
  },
  {
    logo: '/bju-logo.png',
    company: 'Bob Jones University',
    title: 'IT AV Technician (Part-time)',
    date: 'May 2025 - Present',
    isCurrent: true,
    description: [
      'Provide on-site technical support for campus-wide Audio/Visual systems.',
      'Troubleshoot hardware and software issues to ensure successful event execution.'
    ]
  },
  {
    logo: '/bju-logo.png',
    company: 'Bob Jones University',
    title: 'Training Assistant - Arduino Computer Engineering',
    date: 'July 2025 - July 2025',
    isCurrent: false,
    description: [
      'Instructed a cohort of 15+ middle and high school students in Arduino programming fundamentals and hardware integration.',
      'Guided students through the development of hands-on projects, improving their practical understanding of computer engineering principles.'
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
          <h2 className="text-4xl font-bold text-white mb-10">Experience</h2>

          <div className="relative">
            {/* The timeline line - Adjusted left position for alignment */}
            <div className="absolute left-[30px] top-2 h-full w-0.5 bg-gray-600/50" aria-hidden="true"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  
                  {/* --- THIS IS THE UPDATED SECTION --- */}
                  <div className="flex-shrink-0 relative pt-1">
                    {/* The timeline dot - NOW POSITIONED CORRECTLY ON THE LINE */}
                    <div className="absolute top-[18px] left-[24px] h-4 w-4 rounded-full bg-blue-500 border-2 border-white"></div>
                    {/* The logo image with conditional glowing effect */}
<div className={`
  ml-12 w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-full p-1
  ${exp.isCurrent ? 'shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse' : ''}
`}>
  <Image src={exp.logo} alt={`${exp.company} logo`} width={56} height={56} className="rounded-full" />
</div>
                  </div>
                  {/* --- END OF UPDATED SECTION --- */}
                  
                  {/* The content */}
                  <div className="flex-1 text-white pt-2">
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