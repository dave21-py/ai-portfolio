'use client';

import { useEffect } from 'react';
// We'll use a close icon from the same library
import { IoMdClose } from 'react-icons/io';

// The modal component accepts two "props":
// 1. isOpen: a boolean to know if it should be visible
// 2. onClose: a function to call when we want to close it
const WelcomeModal = ({ isOpen, onClose }) => {
  // If the modal isn't supposed to be open, render nothing.
  if (!isOpen) {
    return null;
  }

  // This effect adds an event listener to close the modal when 'Escape' key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Cleanup function to remove the listener when the component is unmounted
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    // Backdrop: a fixed, full-screen div with a semi-transparent background
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose} // Close the modal if the backdrop is clicked
    >
      {/* Modal Panel: The white box. We stop propagation to prevent closing when clicking inside the panel */}
      <div 
        className="bg-white rounded-2xl shadow-xl p-8 relative w-full max-w-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white rounded-full p-2 hover:bg-gray-700 transition"
        >
          <IoMdClose size={20} />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to David's Portfolio</h2>

          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800">What's this??</h3>
              <p className="text-gray-600 mt-1">
                I'm so excited to present my <strong className="text-gray-900">brand new Portfolio.</strong>
                Whether you're a recruiter, a friend, family member, or just curious, feel free to explore anything you want!
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">Why creative, you may ask?</h3>
              <p className="text-gray-600 mt-1">
                Traditional portfolios can be limiting.
                They can't adapt to every visitor's specific needs.
                My portfolio becomes <strong className="text-gray-900">exactly what you're interested in knowing about me and my work.</strong>
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-3 pt-4">
            <button 
              onClick={onClose}
              className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all"
            >
              Explore!
            </button>
            <p className="text-xs text-gray-500">
              If you love it, please share it! Feedback is always welcome. <a href="https://www.linkedin.com/in/david-geddam/" className="underline text-blue-600">Contact me here on LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;