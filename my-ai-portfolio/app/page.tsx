'use client';

import dynamic from 'next/dynamic';
import { FaGithub, FaRegSmile, FaBriefcase, FaLayerGroup, FaMagic, FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './Modal';
import Skills from './Skills';
import FunModal from './Fun';
import ContactModal from './Contact';
import ChatInput from './ChatInput';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FluidCanvas = dynamic(() => import('./FluidCanvas'), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isFunModalOpen, setIsFunModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSkillsModal = () => setIsSkillsModalOpen(true);
  const closeSkillsModal = () => setIsSkillsModalOpen(false);

  const openFunModal = () => setIsFunModalOpen(true);
  const closeFunModal = () => setIsFunModalOpen(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const navButtons = [
    { text: 'Me', Icon: FaRegSmile, color: 'text-teal-500', onClick: openModal },
    { text: 'Projects', Icon: FaBriefcase, color: 'text-green-500' },
    { text: 'Skills', Icon: FaLayerGroup, color: 'text-purple-500', onClick: openSkillsModal },
    { text: 'Fun', Icon: FaMagic, color: 'text-pink-500', onClick: openFunModal },
    { text: 'Contact', Icon: FaUserFriends, color: 'text-yellow-600', onClick: openContactModal },
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
      <FluidCanvas className="absolute inset-0 z-0" />

      <motion.div
        className="z-30 mt-20 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mt-30 bg-white-800/80 backdrop-blur-lg rounded-xl p-4 z-30 relative opacity-100 transition-opacity duration-1000 ease-in-out">
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

      <a
        href="https://github.com/dave21-py"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105 absolute top-6 right-6 z-40"
      >
        <FaGithub />
      </a>

      {/* Container for Chat Input and Navbar */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex w-full max-w-2xl flex-col items-center gap-4 z-40">
        
        {/* ChatInput component is now positioned above the nav */}
        <ChatInput onAction={(action) => console.log(action)} />

        {/* Navbar - now sits inside the container */}
        <nav className="flex gap-4">
          {navButtons.map((button) => (
            <button
              key={button.text}
              onClick={button.onClick}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 transition-all hover:shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1 text-sm mix-blend-screen"
            >
              <button.Icon size={20} className={button.color} />
              <span className="font-medium text-black">{button.text}</span>
            </button>
          ))}
        </nav>
      </div>

      {isModalOpen && <Modal onClose={closeModal} />}
      {isSkillsModalOpen && <Skills onClose={closeSkillsModal} />}
      {isFunModalOpen && <FunModal onClose={closeFunModal} />}
      {isContactModalOpen && <ContactModal onClose={closeContactModal} />}
    </div>
  );
}