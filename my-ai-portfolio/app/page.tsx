'use client';

import dynamic from 'next/dynamic';

const FluidCanvas = dynamic(
  () => import('./FluidCanvas'), // The path to your component
  { ssr: false } // The magic option!
);

export default function Home() {
  return (
    // The main container. We set the background color here.
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      
      {/* The Fluid Canvas is now our background */}
      <FluidCanvas />

      {/* 
        Main content. 
        It MUST have a higher z-index than the canvas to appear on top.
        The text color is changed to be dark for contrast.
      */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-gray-800">Hey, I'm David 👋</h1>
        <p className="text-xl mt-4 text-gray-600">Welcome to my AI Portfolio</p>
      </div>

      {/* Footer also needs a higher z-index */}
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