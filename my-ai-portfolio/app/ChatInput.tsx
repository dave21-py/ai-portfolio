// app/ChatInput.tsx
'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ChatInputProps {
  onAction: (action: string) => void;
}

export default function ChatInput({ onAction }: ChatInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    const trimmed = text.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed.includes('resume')) {
      onAction('showResume');
    } else if (trimmed.includes('skill') || trimmed.includes('skills')) {
      onAction('showSkills');
    } else if (trimmed.includes('project') || trimmed.includes('projects')) {
      onAction('showProjects');
    } else if (trimmed.includes('contact')) {
      onAction('showContact');
    } else if (trimmed.includes('fun')) {
      onAction('showFun');
    } else if (trimmed.includes('certificat')) {
        onAction('showCertificates');
    } else if (trimmed.includes('experience')) {
        onAction('showExperience');
    } else if (trimmed.includes('education')) { // <-- ADD THIS LINE
        onAction('showEducation'); 
    } else {
      // default: show "Me" modal
      onAction('showMe');
    }

    setText('');
  };

  return (
    <div className="flex w-full max-w-xl">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Show me my resume..."
        className="flex-1 px-5 py-3 rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
      />
      <button
        onClick={handleSend}
        className="-ml-10 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
