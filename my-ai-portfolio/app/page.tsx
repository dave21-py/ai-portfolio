'use client';

import dynamic from 'next/dynamic';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import WelcomeModal from './WelcomeModal';
import Image from 'next/image';


// Dynamically import the FluidCanvas component
const FluidCanvas = dynamic(
  () => import('./FluidCanvas'),
  { ssr: false }
);

export default function Home() {
    // State to track if the modal is open or closed.
  // It starts as 'true' to show on first page load.
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* The Fluid Canvas is our background, at z-0 */}
      <FluidCanvas />

      {/* Header, sitting on top at z-20 */}
      <header className="absolute top-0 left-0 right-0 p-6 z-20 flex items-center justify-between">
        {/* Left Side Spacer */}
        <div className="w-24"></div>

        {/* Center Content */}
        <div className="flex flex-col items-center gap-4">
          {/* Logo - Simplified to 'X' to match your image */}
          <button
            onClick={openModal}
            className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center w-10 h-10 font-bold text-lg transition-transform hover:scale-110"
          >
            ❔
          </button>
          {/* Text */}
          <div className="text-center">
            <p className="text-gray-700">Hey, I'm David 👋</p>
            <h1 className="text-6xl font-bold text-gray-900">Welcome to my Portfolio</h1>
            {/* ==> ADD THIS IMAGE COMPONENT <== */}
            <Image
              src="/memoji.png" // The path from the 'public' folder
              alt="David's Memoji"
              width={130} // The actual width of the image
              height={130} // The actual height of the image
              className="mt-6 mx-auto" // Adds spacing above and centers it
            />
          </div>
        </div>

        {/* Right Side - GitHub Button */}
        <a 
          // Replace with your actual GitHub link!
          href="https://github.com/dave21-py" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
        >
          <FaGithub />
        </a>
      </header>

      {/* 
        --- THIS IS THE FIX ---
        We have removed the main content div that was covering the canvas.
        The space between the header and footer is now empty,
        allowing the FluidCanvas to be visible.
      */}

      {/* Footer, sitting on top at z-10 */}
      <footer className="absolute bottom-8 text-center w-full z-10">
        <a
          href="https://github.com/dave21-py" // Also update this link
          className="text-sm text-gray-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub
        </a>
      </footer>
      {/* RENDER THE MODAL COMPONENT */}
      {/* It will only be visible if 'isModalOpen' is true */}
      <WelcomeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}