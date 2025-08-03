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

type ChatMessage = {
  role: 'user' | 'ai';
  text: string;
};

export default function Home() {
  // All your modal states...
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isFunModalOpen, setIsFunModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  // New UI/Chat states...
  const [isChatActive, setIsChatActive] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const handleAction = (action: string, query: string) => {
    // ... (This function remains unchanged)
    if (isAiThinking) return;
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
    // --- STEP 1: Main background changed to white ---
    <div className="relative min-h-screen bg-white overflow-hidden">
      <FluidCanvas />
      <FluidCursor />

      {/* --- BACK BUTTON (Light Theme) --- */}
      <AnimatePresence>
        {isChatActive && (
          <motion.button
            onClick={handleGoBack}
            className="absolute top-6 left-6 z-40 bg-gray-900/10 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <FaArrowLeft />
            <span className="hidden sm:inline">Back</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- GitHub Link (Light Theme) --- */}
      <a
        href="https://github.com/dave21-py"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-6 z-40 bg-gray-900/10 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition"
      >
        <FaGithub />
      </a>

      <div className="relative z-30 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isChatActive ? (
            // --- WELCOME VIEW (Light Theme) ---
            <motion.div
              key="welcome"
              className="mt-[50px] mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-900/5 backdrop-blur-lg rounded-xl p-6 shadow-xl max-w-2xl mx-auto">
                <p className="text-gray-700 text-lg">Hey, I’m David 👋</p>
                <h1 className="text-5xl font-bold text-black mt-4">Welcome to my AI Portfolio</h1>
                <Image src="/memo.png" alt="David's Memoji" width={130} height={130} className="mt-6 mx-auto"/>
              </div>
            </motion.div>
          ) : (
            // --- CHAT VIEW (Light Theme) ---
            <motion.div
              key="chat"
              className="w-full max-w-2xl text-black space-y-6 text-left mt-[15vh]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {chatHistory.map((msg, index) => (
                <div key={index}>
                  <p className="text-lg">
                    <strong className={msg.role === 'user' ? 'text-blue-600' : 'text-emerald-600'}>{msg.role === 'user' ? 'You:' : 'AI:'}</strong>{' '}{msg.text}
                  </p>
                </div>
              ))}
              {isAiThinking && <p className="text-gray-500 animate-pulse">Thinking...</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- BOTTOM NAVIGATION (Light Theme) --- */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-3xl flex flex-col items-center gap-4 z-40">
        {/* ChatInput will also need to be updated for light mode */}
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
              <button onClick={() => handleAction('showMe', 'about me')} className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm shadow-md"><FaRegSmile size={20} className="text-teal-500" /><span className="text-gray-700 font-medium">Me</span></button>
              <button onClick={() => handleAction('showExperience', 'my experience')} className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm shadow-md"><FaBuilding size={20} className="text-blue-500" /><span className="text-gray-700 font-medium">Experience</span></button>
              <button onClick={() => handleAction('showProjects', 'my projects')} className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm shadow-md"><FaBriefcase size={20} className="text-green-500" /><span className="text-gray-700 font-medium">Projects</span></button>
              <button onClick={() => handleAction('showSkills', 'my skills')} className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm shadow-md"><FaLayerGroup size={20} className="text-purple-500" /><span className="text-gray-700 font-medium">Skills</span></button>
              <button onClick={() => handleAction('showFun', 'something fun')} className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm shadow-md"><FaMagic size={20} className="text-pink-500" /><span className="text-gray-700 font-medium">Fun</span></button>
              <button onClick={() => handleAction('showContact', 'how to contact you')} className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-sm shadow-md"><FaUserFriends size={20} className="text-yellow-600" /><span className="text-gray-700 font-medium">Contact</span></button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Modals will still have their dark theme, which you can update next */}
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