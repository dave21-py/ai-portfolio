'use client';

import React from 'react';
import { X, Camera, Dumbbell, Coffee, Mountain, Bike, Gamepad2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface FunModalProps {
  onClose: () => void;
}

const hobbies = [
  { name: 'Vibe Coding', icon: <Coffee size={16} /> },
  { name: 'Working Out', icon: <Dumbbell size={16} /> },
  { name: 'Badminton', icon: <Gamepad2 size={16} /> },
  { name: 'Traveling', icon: <Mountain size={16} /> },
  { name: 'Hiking', icon: <Mountain size={16} /> },
  { name: 'Biking', icon: <Bike size={16} /> }
];

const adventures = [
  {
    id: 'sf',
    title: 'San Francisco Adventure',
    location: 'San Francisco, CA',
    image: '/sf.jpg',
    description: 'My first visit to SF was incredible! I saw the Golden Gate Bridge, visited tech giants like NVIDIA and Meta, and explored the amazing food scene.',
  },
  {
    id: 'gym',
    title: 'Fitness Journey',
    location: 'BJU Fitness Center',
    image: '/gym.jpg',
    description: 'Working out has become a core hobby. It has taught me discipline and has been crucial for maintaining both physical and mental health.',
  }
];

const FunModal = ({ onClose }: FunModalProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="relative bg-gray-50 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-8 flex-shrink-0 text-center">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"><X className="w-5 h-5" /></button>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="inline-block p-4 bg-orange-100/50 rounded-2xl mb-4">
                <Heart className="w-10 h-10 text-orange-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Life Beyond Code</h1>
              <p className="text-lg text-gray-600">Adventures, hobbies, and the passions that fuel creativity.</p>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
              
              {/* Recent Adventures Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Recent Adventures</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {adventures.map((adventure) => (
                    <div key={adventure.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="relative aspect-video">
                        <Image src={adventure.image} alt={adventure.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-gray-900 text-lg">{adventure.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{adventure.location}</p>
                        <p className="text-gray-700 leading-relaxed">{adventure.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hobbies & Interests Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Hobbies & Interests</h2>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hobbies.map((hobby) => (
                      <div key={hobby.name} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
                        {hobby.icon}
                        <span className="font-medium text-gray-700">{hobby.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Philosophy Section */}
              <motion.div variants={itemVariants} className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Philosophy</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  I believe in maintaining a healthy work-life balance. These activities fuel my creativity, keep me energized, and provide fresh perspectives that I bring back to my work in technology.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default FunModal;