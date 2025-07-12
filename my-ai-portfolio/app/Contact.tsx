'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  // We'll place the LinkedIn badge prominently, so the simple text links can be different.
  const socialLinks = [
    { name: 'Discord', href: 'https://discord.com/users/marl0916_20448' },
    { name: 'Github', href: 'https://github.com/dave21-py' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex justify-between items-center text-white">
            <h2 className="text-3xl font-bold">Contacts</h2>
            <p className="text-gray-400">@David.Geddam</p>
          </div>

          <div className="mt-8">
            <a
              href="mailto:davidspurgeongeddam@gmail.com"
              className="text-blue-400 font-semibold text-lg flex items-center gap-2 group"
            >
              davidspurgeongeddam@gmail.com
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </a>
          </div>

          {/* --- LinkedIn Badge Section --- */}
          <div className="mt-8 flex justify-center">
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="dark" // Dark theme to match your portfolio
              data-type="VERTICAL"
              data-vanity="david-geddam" // Your LinkedIn public profile name
              data-version="v1"
            >
              {/* This div is intentionally empty. LinkedIn's script will fill it. */}
            </div>
          </div>
          {/* --- End of LinkedIn Badge Section --- */}

          <div className="mt-8 pt-6 border-t border-gray-600">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              {/* The other social links can go here */}
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