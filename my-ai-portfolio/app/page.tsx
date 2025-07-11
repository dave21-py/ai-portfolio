// page.tsx
'use client';

import dynamic from 'next/dynamic';
import {
  FaGithub,
  FaRegSmile,
  FaBriefcase,
  FaLayerGroup,
  FaMagic,
  FaUserFriends,
} from 'react-icons/fa';
import { useState } from 'react';
import Modal from './Modal';
import ProjectsModal from './Projects';
import Skills from './Skills';
import FunModal from './Fun';
import ContactModal from './Contact';
import ResumeModal from './ResumeModal';
import ChatInput from './ChatInput';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FluidCanvas = dynamic(() => import('./FluidCanvas'), { ssr: false });
const FluidCursor = dynamic(() => import('./FluidCursor'), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isFunModalOpen, setIsFunModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  const handleAction = (action: string) => {
    switch (action) {
      case 'showResume':
        setIsResumeModalOpen(true);
        break;
      case 'showSkills':
        setIsSkillsModalOpen(true);
        break;
      case 'showProjects':
        setIsProjectsModalOpen(true);
        break;
      case 'showContact':
        setIsContactModalOpen(true);
        break;
      case 'showFun':
        setIsFunModalOpen(true);
        break;
      default:
        console.log("Sorry, I couldn't understand that.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <FluidCanvas />
      <FluidCursor />

      <motion.div
  className="z-30 mt-[50px] mb-8 flex flex-col items-center text-center md:mt-[50px] md:mb-12"
  variants={{
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { type: 'ease', duration: 0.8 } },
  }}
  initial="hidden"
  animate="visible"
>
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 relative">
    <p className="text-gray text-lg">Hey, I'm David 👋</p>
    <h1 className="text-5xl font-bold text-gray mt-2">
      Welcome to my Portfolio
    </h1>
    <Image
      src="/memoji.png"
      alt="David's Memoji"
      width={130}
      height={130}
      className="mt-6 mx-auto"
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

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex w-full max-w-2xl flex-col items-center gap-4 z-40">
        <ChatInput onAction={handleAction} />

        <nav className="flex gap-4">
          {[
            { text: 'Me', Icon: FaRegSmile, color: 'text-teal-500', onClick: () => setIsModalOpen(true) },
            { text: 'Projects', Icon: FaBriefcase, color: 'text-green-500', onClick: () => setIsProjectsModalOpen(true) },
            { text: 'Skills', Icon: FaLayerGroup, color: 'text-purple-500', onClick: () => setIsSkillsModalOpen(true) },
            { text: 'Fun', Icon: FaMagic, color: 'text-pink-500', onClick: () => setIsFunModalOpen(true) },
            { text: 'Contact', Icon: FaUserFriends, color: 'text-yellow-600', onClick: () => setIsContactModalOpen(true) },
          ].map((btn) => (
            <button
              key={btn.text}
              onClick={btn.onClick}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 transition-all hover:shadow-lg hover:-translate-y-1 text-sm mix-blend-screen"
            >
              <btn.Icon size={20} className={btn.color} />
              <span className="font-medium text-white">{btn.text}</span>
            </button>
          ))}
        </nav>
      </div>

      {isResumeModalOpen && <ResumeModal onClose={() => setIsResumeModalOpen(false)} />}
      {isSkillsModalOpen && <Skills onClose={() => setIsSkillsModalOpen(false)} />}
      {isFunModalOpen && <FunModal onClose={() => setIsFunModalOpen(false)} />}
      {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {isProjectsModalOpen && (
  <ProjectsModal onClose={() => setIsProjectsModalOpen(false)} />
)}

    </div>
  );
}
