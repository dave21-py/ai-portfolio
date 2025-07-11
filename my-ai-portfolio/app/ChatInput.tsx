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
        placeholder="Ask me anything..."
        className="flex-1 px-4 py-2 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
