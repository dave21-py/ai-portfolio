'use client';

import FluidCursor from '@/app/FluidCursor';  // Adjust the path based on your project structure

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 text-center text-gray-800">
        <h1 className="text-4xl font-bold">Hey, I'm David 👋</h1>
        <p className="text-xl mt-4">Welcome to my AI Portfolio</p>
      </div>

      {/* FluidCursor */}
      <FluidCursor />

      {/* Footer */}
      <footer className="absolute bottom-8 text-center w-full z-10">
        <a
          href="https://github.com/dave21-py/ai-portfolio"
          className="text-sm text-gray-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub
        </a>
      </footer>
    </div>
  );
}
