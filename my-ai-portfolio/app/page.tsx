'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaGithub, FaRegSmile, FaBriefcase, FaLayerGroup, FaMagic, FaUserFriends, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ChatInput from './ChatInput';
import Modal from './Modal';               // “Me” modal
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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isFunModalOpen, setIsFunModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);


  const handleAction = (action: string) => {
    switch (action) {
      case 'showMe':
        setIsModalOpen(true);
        break;
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
      case 'showCertificates':
        setIsCertModalOpen(true);
        break;
      case 'showExperience': 
        setIsExperienceModalOpen(true);
        break;
      case 'showEducation': 
        setIsEducationModalOpen(true);
        break;
      default:
        // fallback to “Me” if nothing matches
        setIsModalOpen(true);
        break;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <FluidCanvas />
      <FluidCursor />

      {/* Header */}
      <motion.div
        className="z-30 mt-[50px] mb-8 flex flex-col items-center text-center md:mt-[50px] md:mb-12"
        variants={{
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.8 } },
        }}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 relative">
          <p className="text-white text-lg">Hey, I’m David 👋</p>
          <h1 className="text-5xl font-bold text-white mt-4">
            Welcome to my AI Portfolio
          </h1>
          <Image
            src="/memo.png"
            alt="David's Memoji"
            width={130}
            height={130}
            className="mt-6 mx-auto"
          />
        </div>
      </motion.div>

      {/* GitHub Link */}
      <a
        href="https://github.com/dave21-py"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-6 z-40 bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition"
      >
        <FaGithub />
      </a>

      {/* Chat & Nav */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-2xl flex flex-col items-center gap-4 z-40">
        <ChatInput onAction={handleAction} />

        <nav className="flex gap-4">
          <button
            onClick={() => handleAction('showMe')}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:shadow-lg hover:-translate-y-1 transition text-sm"
          >
            <FaRegSmile size={20} className="text-teal-500" />
            <span className="text-white font-medium">Me</span>
          </button>
          <button
            onClick={() => handleAction('showProjects')}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:shadow-lg hover:-translate-y-1 transition text-sm"
          >
            <FaBriefcase size={20} className="text-green-500" />
            <span className="text-white font-medium">Projects</span>
          </button>
          <button
            onClick={() => handleAction('showSkills')}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:shadow-lg hover:-translate-y-1 transition text-sm"
          >
            <FaLayerGroup size={20} className="text-purple-500" />
            <span className="text-white font-medium">Skills</span>
          </button>
          <button
            onClick={() => handleAction('showFun')}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:shadow-lg hover:-translate-y-1 transition text-sm"
          >
            <FaMagic size={20} className="text-pink-500" />
            <span className="text-white font-medium">Fun</span>
          </button>
          <button
            onClick={() => handleAction('showContact')}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-sm p-3 w-24 h-20 flex flex-col items-center justify-center gap-1 hover:shadow-lg hover:-translate-y-1 transition text-sm"
          >
            <FaUserFriends size={20} className="text-yellow-600" />
            <span className="text-white font-medium">Contact</span>
          </button>
        </nav>
      </div>

      {/* Modals */}
      {isModalOpen        && <Modal        onClose={() => setIsModalOpen(false)}        />}
      {isSkillsModalOpen  && <Skills       onClose={() => setIsSkillsModalOpen(false)}  />}
      {isFunModalOpen     && <FunModal     onClose={() => setIsFunModalOpen(false)}     />}
      {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
      {isResumeModalOpen  && <ResumeModal  onClose={() => setIsResumeModalOpen(false)}  />}
      {isProjectsModalOpen&& <ProjectsModal onClose={() => setIsProjectsModalOpen(false)}/>}
      {isCertModalOpen && ( <CertificateModal onClose={() => setIsCertModalOpen(false)} />)}
      {isExperienceModalOpen && <ExperienceModal onClose={() => setIsExperienceModalOpen(false)}/>}
      {isEducationModalOpen && <EducationModal onClose={() => setIsEducationModalOpen(false)} />}


    </div>
  );
}