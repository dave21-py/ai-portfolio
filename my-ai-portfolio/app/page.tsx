'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaGithub, FaRegSmile, FaBriefcase, FaLayerGroup, FaMagic, FaUserFriends, FaBuilding, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Import all your modals
import ChatInput from './ChatInput';
import Modal from './Modal';
import Skills from './Skills';
import FunModal from './Fun';
import ContactModal from './Contact';
import ResumeModal from './ResumeModal';
import ProjectsModal from './Projects';
import CertificateModal from './Certificate';
import ExperienceModal from './Experience';
import EducationModal from './Education';

// disable SSR for WebGL and cursor components
const FluidCanvas = dynamic(() => import('./FluidCanvas'), { ssr: false });
const FluidCursor = dynamic(() => import('./FluidCursor'), { ssr: false });

// Define the shape of a chat message
type ChatMessage = {
  role: 'user' | 'ai';
  text: string;
};

export default function Home() {
  // --- All your modal states remain the same ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isFunModalOpen, setIsFunModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  // --- NEW UI/CHAT STATES ---
  const [isChatActive, setIsChatActive] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isAiThinking, setIsAiThinking] = useState(false);

  // The handleAction function is now more powerful
  const handleAction = (action: string, query: string) => {
    if (isAiThinking) return; // Prevent multiple requests while AI is "thinking"

    setIsChatActive(true);
    setChatHistory([{ role: 'user', text: query }]);
    setIsAiThinking(true);

    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'ai', text: "Sure, here's what you asked for." }]);
      setIsAiThinking(false);
      
      setTimeout(() => {
        switch (action) {
          case 'showMe': setIsModalOpen(true); break;
          case 'showResume': setIsResumeModalOpen(true); break;
          case 'showSkills': setIsSkillsModalOpen(true); break;
          case 'showProjects': setIsProjectsModalOpen(true); break;
          case 'showExperience': setIsExperienceModalOpen(true); break;
          case 'showEducation': setIsEducationModalOpen(true); break;
          case 'showContact': setIsContactModalOpen(true); break;
          case 'showFun': setIsFunModalOpen(true); break;
          case 'showCertificates': setIsCertModalOpen(true); break;
          default: setIsModalOpen(true); break;
        }
      }, 500);
    }, 1500);
  };

  const handleGoBack = () => {
    setIsChatActive(false);
    setChatHistory([]);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <FluidCanvas />
      <FluidCursor />

      {/* --- BACK BUTTON (only shows in chat mode) --- */}
      <AnimatePresence>
        {isChatActive && (
          <motion.button
            onClick={handleGoBack}
            className="absolute top-6 left-6 z-40 bg-black/50 text-white px-3 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <FaArrowLeft />
            <span className="hidden sm:inline">Back</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* GitHub Link */}
      <a
        href="https://github.com/dave21-py"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-6 z-40 bg-black/50 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition"
      >
        <FaGithub />
      </a>

      {/* This container preserves your original layout */}
      <div className="relative z-30 flex flex-col items-center">
        {/* We use AnimatePresence for smooth transitions between Welcome and Chat views */}
        <AnimatePresence mode="wait">
          {!isChatActive ? (
            // --- ORIGINAL WELCOME VIEW ---
            <motion.div
              key="welcome"
              className="mt-[50px] mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl max-w-2xl mx-auto">
                <p className="text-white text-lg">Hey, I’m David 👋</p>
                <h1 className="text-5xl font-bold text-white mt-4">Welcome to my AI Portfolio</h1>
                <Image src="/memo.png" alt="David's Memoji" width={130} height={130} className="mt-6 mx-auto"/>
              </div>
            </motion.div>
          ) : (
            // --- NEW CHAT VIEW (Renders in the same structural position) ---
            <motion.div
              key="chat"
              className="w-full max-w-2xl text-white space-y-6 text-left mt-[15vh]" // Positioned to look good
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {chatHistory.map((msg, index) => (
                <div key={index}>
                  <p className="text-lg">
                    <strong className={msg.role === 'user' ? 'text-blue-400' : 'text-green-400'}>{msg.role === 'user' ? 'You:' : 'AI:'}</strong>{' '}{msg.text}
                  </p>
                </div>
              ))}
              {isAiThinking && <p className="text-gray-400 animate-pulse">Thinking...</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* --- BOTTOM NAVIGATION (Original Layout Preserved) --- */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-3xl flex flex-col items-center gap-4 z-40">
        <ChatInput onAction={handleAction} />
        
        <AnimatePresence>
          {!isChatActive && (
            <motion.nav 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* These buttons now also pass a query string to handleAction */}
              <button onClick={() => handleAction('showMe', 'about me')} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm"><FaRegSmile size={20} className="text-teal-500" /><span className="text-white">Me</span></button>
              <button onClick={() => handleAction('showExperience', 'my experience')} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm"><FaBuilding size={20} className="text-blue-500" /><span className="text-white">Experience</span></button>
              <button onClick={() => handleAction('showProjects', 'my projects')} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm"><FaBriefcase size={20} className="text-green-500" /><span className="text-white">Projects</span></button>
              <button onClick={() => handleAction('showSkills', 'my skills')} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm"><FaLayerGroup size={20} className="text-purple-500" /><span className="text-white">Skills</span></button>
              <button onClick={() => handleAction('showFun', 'something fun')} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm"><FaMagic size={20} className="text-pink-500" /><span className="text-white">Fun</span></button>
              <button onClick={() => handleAction('showContact', 'how to contact you')} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm"><FaUserFriends size={20} className="text-yellow-600" /><span className="text-white">Contact</span></button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* --- Modals (Rendered on top of everything) --- */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {isSkillsModalOpen && <Skills onClose={() => setIsSkillsModalOpen(false)} />}
      {isFunModalOpen && <FunModal onClose={() => setIsFunModalOpen(false)} />}
      {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
      {isResumeModalOpen && <ResumeModal onClose={() => setIsResumeModalOpen(false)} />}
      {isProjectsModalOpen && <ProjectsModal onClose={() => setIsProjectsModalOpen(false)} />}
      {isCertModalOpen && <CertificateModal onClose={() => setIsCertModalOpen(false)} />}
      {isExperienceModalOpen && <ExperienceModal onClose={() => setIsExperienceModalOpen(false)} />}
      {isEducationModalOpen && <EducationModal onClose={() => setIsEducationModalOpen(false)} />}
    </div>
  );
}