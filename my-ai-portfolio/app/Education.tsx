'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { FaUniversity, FaBookOpen, FaAward } from 'react-icons/fa';

interface EducationModalProps {
  onClose: () => void;
}

// --- Your Education Data ---
const educationData = [
  {
    logo: '/bju-logo.png', // Ensure this logo is in your /public folder
    institution: 'Bob Jones University',
    degree: 'Bachelor of Science - BS, Computer Engineering',
    date: 'Aug 2023 - May 2027'
  },
  {
    logo: '/dps-logo.png', // Find and add this logo to your /public folder
    institution: 'Delhi Public School - India',
    degree: 'High School Diploma',
    date: 'Graduated Apr 2019'
  }
];

const coursesData = [
  { title: 'Calculus', code: 'MA200' },
  { title: 'Digital Electronics', code: 'ELE110' },
  { title: 'OOP in Java', code: 'CPS209' },
  { title: 'OOP in Python', code: 'CPS110' }
];

const honorsData = [
    {
        title: "Dean's List",
        issuer: 'Bob Jones University',
        date: 'Issued Dec 2024',
        description: 'Named to the Dean’s List for consistent academic excellence in Spring 2025, Fall 2024, and Fall 2023.'
    }
];

const EducationModal = ({ onClose }: EducationModalProps) => {
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
          <h2 className="text-4xl font-bold text-white mb-10">Education & Achievements</h2>

          {/* Education Section */}
          <div className="mb-12">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6"><FaUniversity /> Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-800/50 rounded-lg flex items-center justify-center p-1">
                    <Image src={edu.logo} alt={`${edu.institution} logo`} width={48} height={48} />
                  </div>
                  <div className="text-white">
                    <p className="font-bold">{edu.institution}</p>
                    <p className="text-sm text-gray-300">{edu.degree}</p>
                    <p className="text-xs text-gray-400">{edu.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Relevant Coursework Section */}
          <div className="mb-12">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6"><FaBookOpen /> Relevant Coursework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coursesData.map((course) => (
                <div key={course.title} className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold text-white">{course.title}</p>
                  <p className="text-sm text-gray-400">{course.code}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards Section */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6"><FaAward /> Honors & Awards</h3>
            <div className="space-y-4">
              {honorsData.map((honor) => (
                <div key={honor.title} className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-bold text-white">{honor.title}</p>
                  <p className="text-sm text-gray-400">{honor.issuer} • {honor.date}</p>
                  <p className="mt-2 text-gray-300">{honor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;