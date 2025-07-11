'use client';

import React from 'react';
// We'll use an icon for the close button
import { IoMdClose } from 'react-icons/io';

const ContactModal = ({ onClose }) => {
  // Data for social links to keep the code clean and easy to update
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/david-geddam/' },
    { name: 'Discord', href: 'https://discord.com/users/marl0916_20448' },
    { name: 'Github', href: 'https://github.com/dave21-py' },
  ];

  return (
    // Backdrop
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      {/* Modal Panel - We use a light gray background to match the screenshot */}
      <div
        className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* We don't need an explicit close button if it's not in the design, but let's keep it for accessibility */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-10">
          
          {/* Top Row: Title and Handle */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white-900">Contacts</h2>
            <p className="text-gray-600">@David.Geddam</p>
          </div>

          {/* Email Link */}
          <div className="mt-8">
            <a 
              href="mailto:davidspurgeongeddam@gmail.com" 
              className="text-blue-600 font-semibold text-lg flex items-center gap-2 group"
            >
              davidspurgeongeddam@gmail.com
              <span className="transition-transform group-hover:translate-x-1">></span>
            </a>
          </div>

          {/* Social Links Divider and Row */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-cyan-900 text-sm font-medium transition-colors"
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