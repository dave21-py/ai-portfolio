// ChatInput.tsx

import React, { useState } from "react";

const ChatInput = ({ onAction }: { onAction: (action: string) => void }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    // Logic to check if the input matches predefined questions
    if (input.toLowerCase().includes("resume")) {
      onAction("showResume");
    } else if (input.toLowerCase().includes("skills")) {
      onAction("showSkills");
    } else if (input.toLowerCase().includes("projects")) {
      onAction("showProjects");
    }
    setInput(""); // Clear input field after action
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Ask me anything..."
        className="rounded-full py-2 px-4 text-gray-600 bg-white border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white rounded-full p-2"
      >
        <span className="text-lg">→</span>
      </button>
    </div>
  );
};

export default ChatInput;
