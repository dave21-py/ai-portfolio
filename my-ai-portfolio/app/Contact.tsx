'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';

// Define an interface for the props
interface ContactModalProps {
  onClose: () => void;
}

// Functional component with props destructuring
const ContactModal = ({ onClose }: ContactModalProps) => {
  // Social links data
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/david-geddam/' },
    { name: 'Discord', href: 'https://discord.com/users/marl0916_20448' },
    { name: 'Github', href: 'https://github.com/dave21-py' },
  ];

  return (
    // Backdrop with fixed position to cover the screen
    <div
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose} // Close modal when backdrop is clicked
    >
      {/* Modal panel */}
      <div
        className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-10">
          {/* Title and handle */}
          <div className="flex justify-between items-center text-white">
            <h2 className="text-3xl font-bold">Contacts</h2>
            <p className="text-gray-400">@David.Geddam</p>
          </div>

          {/* Email link */}
          <div className="mt-8">
            <a
              href="mailto:davidspurgeongeddam@gmail.com"
              className="text-blue-400 font-semibold text-lg flex items-center gap-2 group"
            >
              davidspurgeongeddam@gmail.com
              {/* Correct JSX for symbol */}
              <span className="transition-transform group-hover:translate-x-1">›</span> {/* Changed '>' to '›' */}
            </a>
          </div>

          {/* Social Links Divider and Row */}
          <div className="mt-10 pt-6 border-t border-gray-600">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
