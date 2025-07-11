// app/Certificate.tsx
'use client';

import { useState, useMemo } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: 'Foundations of Prompt Engineering',
    issuer: 'Amazon Web Services',
    image: '/aws.png',
    link: 'https://www.your-link.com/aws-sol-arch',
  },
  {
    title: 'Gen AI Powered Data Analytics',
    issuer: 'Tata Group / Forage',
    image: '/tata.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_z4onoAb2QCEfZEHx8_1751843491388_completion_certificate.pdf',
  },
  {
    title: 'Technology',
    issuer: 'Deloitte',
    image: '/tech.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_z4onoAb2QCEfZEHx8_1751348369223_completion_certificate.pdf',
  },
  {
    title: 'The Complete Prompt Engineering for AI Bootcamp',
    issuer: 'Udemy',
    image: '/udemy.png',
    link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/',
  },
  {
    title: 'Audio Visual Associate',
    issuer: 'Extron',
    image: '/extron.png',
    link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/',
  },
  {
    title: 'AI Python for Beginners',
    issuer: 'DeepLearning.ai',
    image: '/aipython.png',
    link: 'https://www.udemy.com/certificate/UC-80dfcdf5-7165-4aef-a373-acdc03fadea3/',
  },
  // …add yours here…
];

type CertificateModalProps = {
  onClose: () => void;
};

export default function CertificateModal({ onClose }: CertificateModalProps) {
  const SLIDE_COUNT = 3;
  const [startIdx, setStartIdx] = useState(0);

  const visible = useMemo(
    () =>
      Array.from({ length: SLIDE_COUNT }).map((_, i) =>
        certificates[(startIdx + i) % certificates.length]
      ),
    [startIdx]
  );

  const prev = () =>
    setStartIdx((s) => (s - SLIDE_COUNT + certificates.length) % certificates.length);
  const next = () =>
    setStartIdx((s) => (s + SLIDE_COUNT) % certificates.length);

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
          My Certifications
        </h2>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8 py-6">
          {visible.map((cert, idx) => (
            <div
              key={idx}
              className="relative h-80 rounded-2xl overflow-hidden bg-black transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10" />

              {/* Certificate image */}
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />

              {/* Issuer & title */}
              <div className="absolute bottom-4 left-4 z-20 text-black">
                <p className="text-sm">{cert.issuer}</p>
                <h3 className="text-2xl font-semibold">{cert.title}</h3>
              </div>

              {/* View link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 text-white hover:text-gray-300 transition-colors"
              >
                View
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
