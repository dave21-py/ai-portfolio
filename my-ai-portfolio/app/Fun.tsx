'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';

// Add the interface for the component's props
interface FunModalProps {
  onClose: () => void;
}

// Apply the FunModalProps type to the component
const FunModal = ({ onClose }: FunModalProps) => {
  return (
    // Backdrop
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          onClick={onClose}
        >
          <IoMdClose size={28} />
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-10 text-white">
          {/* First Post: San Francisco */}
          <h2 className="text-3xl md:text-4xl font-bold">San Francisco (2024)</h2>

          {/* Image Container with Overlay */}
          <div className="relative mt-6 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/sf.jpg" // Assumes sf.jpg is in your /public folder
              alt="Adventure in San Francisco"
              className="w-full h-auto object-cover"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-semibold">Golden Gate Bridge, San Francisco</p>
            </div>
          </div>

          {/* Text Content Below Image */}
          <div className="mt-8 space-y-4 text-gray-300 leading-relaxed">
            <p>
              There are a lot of things I did while traveling to SF for the first time. Visiting the Golden Gate Bridge, Tech Companies like NVIDIA, and Meta, as well as restaurants and beaches. It was a wild and fun experience for me.
            </p>
            <p>
              As for hobbies, I love vibe coding, working out, playing badminton, and traveling! I used to be a competitive badminton player, and I still love outdoor activities. Whether it's biking, hiking, or just chilling in nature, I'm in! What about you? Got any crazy adventures or hobbies? 😄
            </p>
          </div>

          {/* Second Post: Gym */}
          <h2 className="text-3xl md:text-4xl font-bold mt-12">Gym</h2>

          {/* Image Container with Overlay for Paris */}
          <div className="relative mt-6 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/gym.jpg" // Assumes gym.jpg is in your /public folder
              alt="At the gym"
              className="w-full h-auto object-cover"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-semibold">Gym</p>
            </div>
          </div>

          {/* Text Content Below Image for Paris */}
          <div className="mt-8 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Like I said, working out is one of my favorite hobbies. It taught me discipline and allowed me to take care of my physical health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunModal;