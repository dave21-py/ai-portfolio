'use client'; // This is needed if you are using React hooks

import React from 'react';
// We'll use these icons for the close and hide buttons
import { IoMdClose } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";

// Define the interface for the component's props
interface ModalProps {
  onClose: () => void;
}

// Apply the ModalProps type to the component's props
const Modal = ({ onClose }: ModalProps) => {
  // Data for the tags to keep the JSX clean
  const tags = ["AI", "Python", "Java", "Vibe Coding", "Working out"];

  return (
    // The semi-transparent backdrop
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      {/* The Modal Panel */}
      <div
        className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-y-auto max-h-[90vh] text-white"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          onClick={onClose}
        >
          <IoMdClose size={28} />
        </button>

        <div className="p-2 md:p-4">
          {/* Top Section: Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-4 md:p-6">

            {/* Left Column: Image */}
            <div className="md:col-span-1 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center p-4">
              <img
                src="/headshot.jpg" // IMPORTANT: Replace with your actual image path in /public
                alt="David's Headshot"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* Right Column: Info */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <h2 className="text-4xl font-bold">David M. Geddam</h2>
              <p className="text-gray-400 mt-2">
                19 years old <span className="mx-2">•</span> Greenville, SC
              </p>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Hey 👋
                <br />
                I'm David, a Computer Engineering Student. I'm passionate about AI and deep learning.
              </p>
              
              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Full-width paragraph */}
          <div className="px-6 md:px-10 pb-6">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {`I'm an aspiring Generative AI / Prompt / LLM Engineer currently pursuing a B.S. in Computer Engineering at Bob Jones University. Over the past few years, I’ve explored a variety of fields, including web development, GUI applications, object-oriented programming, and artificial intelligence. Among these, I found myself especially drawn to AI and Deep Learning, areas that fascinate me because of their potential to solve complex problems and make a meaningful impact on the world.

As of 2025, I’ve gained experience in Java, including object-oriented programming and GUI development using JavaFX, and I’m currently learning Python for ML and the fundamentals of LLMs. I’m passionate about leveraging the power of text, image, and video data generation and aspire to build intelligent systems that are both innovative and impactful.
I’m constantly working to improve my skills, take on new challenges, and grow as a well-rounded engineer. I invite you to explore my GitHub profile, where I’ll soon be sharing personal projects and academic work that reflect my learning journey.

Feel free to connect or reach out to me, whether for collaboration, mentorship, or a conversation about the future of AI.
BJU Email: dgedd236@students.bju.edu
Personal Email: davidspurgeongeddam@gmail.com`}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-gray-700 bg-gray-900/50 px-6 py-3 flex justify-center">
          <button className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <FaChevronUp />
            Back to front
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;