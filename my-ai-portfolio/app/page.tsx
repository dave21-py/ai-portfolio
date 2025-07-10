'use client';

import dynamic from 'next/dynamic';
import { FaGithub, FaRegSmile, FaBriefcase, FaLayerGroup, FaMagic, FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './Modal'; // The Modal component
import Skills from './Skills'; // The Skills component
import FunModal from './Fun'; // Import the FunModal component
import Image from 'next/image';
import { motion } from 'framer-motion';

// Dynamically import the FluidCanvas component
const FluidCanvas = dynamic(() => import('./FluidCanvas'), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Set to false initially
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false); // New state for Skills Modal
  const [isFunModalOpen, setIsFunModalOpen] = useState(false); // New state for Fun Modal

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Functions to open and close the Skills modal
  const openSkillsModal = () => setIsSkillsModalOpen(true);
  const closeSkillsModal = () => setIsSkillsModalOpen(false);

  // Functions to open and close the Fun modal
  const openFunModal = () => setIsFunModalOpen(true);
  const closeFunModal = () => setIsFunModalOpen(false);

  const navButtons = [
    { text: 'Me', Icon: FaRegSmile, color: 'text-teal-500', onClick: openModal },
    { text: 'Projects', Icon: FaBriefcase, color: 'text-green-500' },
    { text: 'Skills', Icon: FaLayerGroup, color: 'text-purple-500', onClick: openSkillsModal },
    { text: 'Fun', Icon: FaMagic, color: 'text-pink-500', onClick: openFunModal }, // Pass openFunModal here
    { text: 'Contact', Icon: FaUserFriends, color: 'text-yellow-600' },
  ];

  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* FluidCanvas background */}
      <FluidCanvas className="absolute inset-0 z-0" />

      {/* Header with animation */}
      <motion.div
        className="z-30 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mt-4 bg-white-800/80 backdrop-blur-lg rounded-xl p-4 z-30 relative opacity-100 transition-opacity duration-1000 ease-in-out">
          <p className="text-black text-lg opacity-100">Hey, I'm David 👋</p>
          <h1 className="text-5xl font-bold text-black mt-2 opacity-100">Welcome to my Portfolio</h1>
          <Image
            src="/memoji.png"
            alt="David's Memoji"
            width={130}
            height={130}
            className="mt-6 mx-auto opacity-100 z-40 relative"
          />
        </div>
      </motion.div>

      {/* GitHub Button */}
      <a
        href="https://github.com/dave21-py"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105 absolute top-6 right-6 z-40"
      >
        <FaGithub />
      </a>

      {/* Navbar */}
      <nav className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-40">
        {navButtons.map((button) => (
          <button
            key={button.text}
            onClick={button.onClick} // Ensure that click opens the respective modal
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 transition-all hover:shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1 text-sm mix-blend-screen"
          >
            <button.Icon size={20} className={button.color} />
            <span className="font-medium text-black">{button.text}</span>
          </button>
        ))}
      </nav>

      {/* Modal for 'Me' */}
      {isModalOpen && <Modal onClose={closeModal} />}

      {/* Modal for 'Skills' */}
      {isSkillsModalOpen && <Skills onClose={closeSkillsModal} />}

      {/* Modal for 'Fun' */}
      {isFunModalOpen && <FunModal onClose={closeFunModal} />} {/* Only render the FunModal when it's open */}
    </div>
  );
}
