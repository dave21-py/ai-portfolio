// app/Projects.tsx
'use client';

import { useState, useMemo } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  title: string;
  subtitle: string;
  image: string;
  githubUrl: string;        // ← new!
}

const projects: Project[] = [
  {
    title: 'CO2 Emissions Dashboard',
    subtitle: 'EDA integration',
    image: '/demo1.png',
    githubUrl: 'https://github.com/dave21-py/co2-emissions-dashboard',   // ← add your URL
  },
  {
    title: 'LLM Benchmark',
    subtitle: 'Visualisation using Matplotlib, hvplot',
    image: '/demonew.png',
    githubUrl: 'https://github.com/dave21-py/llm-benchmark-visualizer',
  },
  {
    title: 'MediaLink-Plus-Controller-Simulator',
    subtitle: 'EBP50 Controller simulation built using JavaFX',
    image: '/ebp.png',
    githubUrl: 'https://github.com/dave21-py/MediaLink-Plus-Controller-Simulator',
  },
  {
    title: 'VisiGen',
    subtitle: 'AI Image generator JavaFX GUI Application',
    image: '/demo2.png',
    githubUrl: 'https://github.com/dave21-py/VisiGen',
  },
  {
    title: 'Cuatros',
    subtitle: 'A Tetris-inspired game built using JavaFX',
    image: '/titlescreen.png',
    githubUrl: 'https://github.com/dave21-py/Cuatros',
  },
  {
    title: 'TicTacToe',
    subtitle: 'TicTacToe game built using JavaFX',
    image: '/tictactoescreen.png',
    githubUrl: 'https://github.com/dave21-py/TicTacToe',
  },
  // …more projects
];

type ProjectsModalProps = {
  onClose: () => void;
};

export default function ProjectsModal({ onClose }: ProjectsModalProps) {
  const SLIDE_COUNT = 3;
  const [startIdx, setStartIdx] = useState(0);
  const visible = useMemo(
    () =>
      Array.from({ length: SLIDE_COUNT }).map((_, i) =>
        projects[(startIdx + i) % projects.length]
      ),
    [startIdx]
  );

  const prev = () =>
    setStartIdx((s) => (s - SLIDE_COUNT + projects.length) % projects.length);
  const next = () => setStartIdx((s) => (s + SLIDE_COUNT) % projects.length);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl max-w-5xl w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✕ Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <IoMdClose size={28} />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-white px-8 pt-6">
          My Projects
        </h2>

        {/* Slider Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8 py-6">
          {visible.map((p, idx) => (
            <div
              key={idx}
              className="relative h-80 rounded-2xl overflow-hidden bg-black"
            >
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10" />

              {/* screenshot */}
              <Image src={p.image} alt={p.title} fill className="object-cover" />

              {/* title/subtitle */}
              <div className="absolute bottom-4 left-4 z-20 text-black">
                <p className="text-sm">{p.subtitle}</p>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
              </div>

              {/* GitHub link */}
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 text-black hover:text-white-300 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          ))}
        </div>

        {/* arrows */}
        <div className="flex justify-center gap-4 pb-6">
          <button
            onClick={prev}
            className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
