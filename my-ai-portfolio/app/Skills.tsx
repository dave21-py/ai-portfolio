'use client';

import React from 'react';
// Import the icons we'll need for the section titles and close button
import { IoMdClose } from 'react-icons/io';
import { FaCode, FaCogs, FaPaintBrush, FaUsers } from 'react-icons/fa';

// Define the interface for the component's props
interface SkillsModalProps {
  onClose: () => void;
}

// --- Data for our skills, organized into categories. This makes the code much cleaner! ---
const skillsData = [
  {
    title: 'Frontend Development',
    Icon: FaCode,
    skills: ['HTML', 'CSS', 'XML', 'Extron GUI Designer']
  },
  {
    title: 'Backend & Systems',
    Icon: FaCogs,
    skills: ['Python', 'Java', 'Git', 'GitHub', 'Jupyter', 'Docker']
  },
  {
    title: 'Frameworks and Libraries',
    Icon: FaPaintBrush,
    skills: ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'JavaFX', 'Gradle']
  },
  {
    title: 'Soft Skills',
    Icon: FaUsers,
    skills: ['Vibe Coding', 'Problem-Solving', 'Critical-Thinking', 'Learning Agility', 'Teamwork', 'Creativity', 'Focus', 'Working out']
  }
];

// Apply the SkillsModalProps type to the component
const SkillsModal = ({ onClose }: SkillsModalProps) => {
  return (
    // The semi-transparent backdrop
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      {/* The Modal Panel */}
      <div
        className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          onClick={onClose}
        >
          <IoMdClose size={28} />
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-12 text-white">
          <h2 className="text-4xl font-bold mb-10">Skills & Expertise</h2>

          <div className="space-y-10">
            {/* We loop through our data to create each section */}
            {skillsData.map((category) => (
              <div key={category.title}>
                <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-100">
                  <category.Icon />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {/* We loop through the skills for the current category to create the tags */}
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;