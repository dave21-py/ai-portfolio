'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

// The onAction prop will now also accept the original text query
interface ChatInputProps {
  onAction: (action: string, query: string) => void;
}

export default function ChatInput({ onAction }: ChatInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    const trimmed = text.trim().toLowerCase();
    if (!trimmed) return;

    let action = 'showMe'; // Default action if no keywords match

    if (trimmed.includes('resume')) {
      action = 'showResume';
    } else if (trimmed.includes('skill')) {
      action = 'showSkills';
    } else if (trimmed.includes('project')) {
      action = 'showProjects';
    } else if (trimmed.includes('contact')) {
      action = 'showContact';
    } else if (trimmed.includes('fun')) {
      action = 'showFun';
    } else if (trimmed.includes('certificat')) {
      action = 'showCertificates';
    } else if (trimmed.includes('experience')) {
      action = 'showExperience';
    } else if (trimmed.includes('education')) {
      action = 'showEducation';
    }
    
    // Pass both the determined action AND the original text from the input
    onAction(action, text);

    setText('');
  };

  return (
    <div className="flex w-full max-w-xl items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Ask me anything..."
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