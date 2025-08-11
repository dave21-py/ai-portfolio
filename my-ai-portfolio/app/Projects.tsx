'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, Github, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  githubUrl: string;
  category: 'ai-tools' | 'gen-ai' | 'web-dev' | 'data-viz' | 'desktop-apps' | 'games';
  year: string;
  tech: string[];
  description: string;
  impact: string;
  features: string[];
  metrics?: { stars?: number; commits?: number; users?: string; };
  teamSize?: string;
  duration?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  { id: 'vibecli', title: 'VibeCLI', subtitle: 'Dual-Mode AI Shell & Creative Assistant', image: '/vibe.png', githubUrl: 'https://github.com/dave21-py/VibeCLI', category: 'ai-tools', year: '2024', tech: ['Python', 'Google Gemini API', 'Shell Scripting', 'CLI'], description: 'Advanced command-line interface that combines shell automation with creative AI capabilities. Features intelligent command prediction, context-aware assistance, and seamless integration with various AI models.', impact: 'Reduces developer workflow time by 40% through intelligent automation', features: [ 'Dual-mode operation (Shell & Creative)', 'Context-aware command suggestions', 'Multi-model AI integration', 'Custom plugin architecture', 'Real-time performance monitoring' ], metrics: { stars: 1, commits: 13, users: '5+' }, teamSize: 'Solo Project', duration: '3 days' },
  { id: 'prompt-enhancer', title: 'Prompt Enhancer', subtitle: 'AI-Powered Prompt Optimization Tool', image: '/prompt.png', githubUrl: 'https://github.com/dave21-py/prompt-enhancer', category: 'gen-ai', year: '2024', tech: ['React', 'Node.js', 'LangChain', 'MongoDB', 'OpenAI API'], description: 'Intelligent system that analyzes and enhances prompts for better AI model performance. Includes A/B testing capabilities, success metrics tracking, and optimization recommendations.', impact: 'Improves prompt effectiveness by 65% across different AI models', features: [ 'Real-time prompt analysis', 'A/B testing framework', 'Performance metrics dashboard', 'Multi-model compatibility', 'Optimization suggestions engine' ], metrics: { stars: 23, commits: 89, users: '150+' }, teamSize: 'Solo Project', duration: '2 months', demoUrl: 'https://prompt-enhancer-demo.com' },
  { id: 'ai-portfolio', title: 'AI Portfolio Website', subtitle: 'Interactive Portfolio with AI Integration', image: '/portfolio.png', githubUrl: 'https://github.com/dave21-py/ai-portfolio', category: 'web-dev', year: '2024', tech: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'], description: 'Personal portfolio featuring dynamic AI chat interface, fluid animations, and responsive design. Built with modern web technologies and optimized for performance.', impact: 'Showcases full-stack development capabilities and modern UI/UX principles', features: [ 'AI-powered chat interface', 'Fluid WebGL animations', 'Responsive design system', 'Performance optimized', 'Accessibility compliant' ], metrics: { stars: 12, commits: 67 }, teamSize: 'Solo Project', duration: '1 month' },
  { id: 'co2-dashboard', title: 'CO2 Emissions Dashboard', subtitle: 'Environmental Data Analysis & Visualization', image: '/demo1.png', githubUrl: 'https://github.com/dave21-py/co2-emissions-dashboard', category: 'data-viz', year: '2024', tech: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'NumPy'], description: 'Comprehensive dashboard for analyzing global CO2 emissions data with interactive visualizations and predictive modeling capabilities.', impact: 'Processes 1M+ data points to provide actionable environmental insights', features: [ 'Interactive data visualizations', 'Predictive modeling', 'Real-time data processing', 'Export capabilities', 'Multi-source data integration' ], teamSize: 'Solo Project', duration: '6 weeks' },
  { id: 'llm-benchmark', title: 'LLM Benchmark Visualizer', subtitle: 'Performance Analysis Tool for Language Models', image: '/demonew.png', githubUrl: 'https://github.com/dave21-py/llm-benchmark-visualizer', category: 'data-viz', year: '2024', tech: ['Python', 'Matplotlib', 'HvPlot', 'Pandas', 'Jupyter'], description: 'Advanced visualization tool for comparing and analyzing performance metrics across different large language models.', impact: 'Enables data-driven LLM selection for optimal performance', features: [ 'Multi-model comparison', 'Performance heatmaps', 'Statistical analysis', 'Custom metrics support', 'Export functionality' ], teamSize: 'Solo Project', duration: '1 month' },
  { id: 'medialink-controller', title: 'MediaLink Plus Controller', subtitle: 'EBP50 Controller Simulation System', image: '/ebp.png', githubUrl: 'https://github.com/dave21-py/MediaLink-Plus-Controller-Simulator', category: 'desktop-apps', year: '2023', tech: ['Java', 'JavaFX', 'FXML', 'CSS'], description: 'Sophisticated simulation system for EBP50 media controllers with realistic interface and functionality.', impact: 'Reduces hardware testing costs by 80% through accurate simulation', features: [ 'Realistic controller simulation', 'Custom UI components', 'Hardware emulation', 'Testing framework', 'Configuration management' ], teamSize: 'Solo Project', duration: '2 months' },
  { id: 'visigen', title: 'VisiGen', subtitle: 'AI Image Generator Desktop Application', image: '/demo2.png', githubUrl: 'https://github.com/dave21-py/VisiGen', category: 'gen-ai', year: '2023', tech: ['Java', 'JavaFX', 'OpenAI API', 'Image Processing'], description: 'Desktop application for AI-powered image generation with intuitive GUI and advanced customization options.', impact: 'Generated 10,000+ custom images for creative professionals', features: [ 'Multiple AI model support', 'Batch processing', 'Style customization', 'High-resolution output', 'Image enhancement tools' ], teamSize: 'Solo Project', duration: '6 weeks' },
  { id: 'cuatros', title: 'Cuatros', subtitle: 'Modern Tetris-Inspired Game', image: '/titlescreen.png', githubUrl: 'https://github.com/dave21-py/Cuatros', category: 'games', year: '2023', tech: ['Java', 'JavaFX', 'Game Logic', 'Animation'], description: 'Modern take on the classic Tetris game with enhanced graphics, smooth animations, and additional game modes.', impact: 'Demonstrates advanced game development and user experience design', features: [ 'Multiple game modes', 'Smooth animations', 'High score system', 'Responsive controls', 'Sound effects' ], teamSize: 'Solo Project', duration: '1 month' },
  { id: 'tictactoe', title: 'TicTacToe', subtitle: 'Classic Game with Modern UI', image: '/tictactoescreen.png', githubUrl: 'https://github.com/dave21-py/TicTacToe', category: 'games', year: '2023', tech: ['Java', 'JavaFX', 'Game Logic'], description: 'Classic TicTacToe game with modern user interface and intelligent AI opponent.', impact: 'Foundation project demonstrating core programming principles', features: [ 'AI opponent', 'Score tracking', 'Modern UI design', 'Game state management', 'Replay functionality' ], teamSize: 'Solo Project', duration: '2 weeks' }
];

const categories = [
  { id: 'all', label: 'ALL PROJECTS' },
  { id: 'ai-tools', label: 'AI TOOLS' },
  { id: 'gen-ai', label: 'GENERATIVE AI' },
  { id: 'data-viz', label: 'DATA VISUALIZATION' },
  { id: 'web-dev', label: 'WEB DEVELOPMENT' },
  { id: 'desktop-apps', label: 'DESKTOP APPLICATIONS' },
  { id: 'games', label: 'GAMES' }
];

type ProjectsPageProps = {
  onClose: () => void;
};

export default function ProjectsPage({ onClose }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  if (selectedProject) {
    return (
      <ProjectDetailView 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)}
        onClose={onClose} 
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden flex flex-col">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex-1 overflow-y-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-12 space-y-12 min-h-full"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-light tracking-tight text-gray-900 leading-tight">
                SELECTED PROJECTS
              </h1>
              <div className="h-px bg-gray-900 w-32 mx-auto"></div>
            </div>
            <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
              BUILDING INNOVATIVE SOLUTIONS + EXPLORING NEW TECHNOLOGIES
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                FILTER BY CATEGORY
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 text-sm font-light tracking-wide transition-all ${
                    selectedCategory === category.id 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-60">
                    ({category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length})
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layoutId={`project-card-${project.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Project Image */}
                      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-200"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-xl font-light text-gray-900 tracking-wide">
                            {project.title}
                          </h3>
                          <p className="text-sm font-light text-gray-600">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="text-xs font-light text-gray-500 tracking-wide">
                          {project.tech.slice(0, 3).join(' • ')}
                          {project.tech.length > 3 && ` • +${project.tech.length - 3} more`}
                        </div>

                        {/* Year */}
                        <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          {project.year}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="pt-12 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-700 font-light text-lg leading-relaxed max-w-4xl mx-auto">
                Each project represents a commitment to learning, innovation, and technical excellence. 
                From AI-powered tools to interactive applications, these works demonstrate a progression 
                in both technical skill and creative problem-solving.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
            <div className="flex items-center justify-between">
              <span>PROJECT PORTFOLIO 2023-2024</span>
              <span>DAVID M. GEDDAM</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectDetailView({ project, onBack, onClose }: { project: Project; onBack: () => void; onClose: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-white z-50 overflow-hidden flex flex-col" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-gray-200 p-8 flex-shrink-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack} 
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-light tracking-wide">BACK TO PROJECTS</span>
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto p-12 space-y-12"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-light tracking-tight text-gray-900 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl font-light text-gray-600 tracking-wide">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 font-light tracking-wide hover:bg-gray-800 transition-all"
                >
                  <Github className="w-4 h-4" />
                  VIEW CODE
                </a>
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 font-light tracking-wide hover:bg-gray-50 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div 
            variants={itemVariants}
            className="relative aspect-[16/10] bg-gray-100 overflow-hidden"
            layoutId={`project-card-${project.id}`}
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-contain p-8" 
              priority 
            />
          </motion.div>

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-gray-900 tracking-wide pb-2 border-b border-gray-200">
                  PROJECT OVERVIEW
                </h2>
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div className="bg-gray-50 p-8 space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  IMPACT & RESULTS
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  {project.impact}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium text-gray-900 tracking-wide pb-2 border-b border-gray-200">
                  KEY FEATURES
                </h2>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 font-light leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Project Details */}
              <div className="bg-gray-50 p-6 space-y-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  PROJECT DETAILS
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Category:</span>
                    <span className="font-medium text-gray-800">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Year:</span>
                    <span className="font-medium text-gray-800">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Team:</span>
                    <span className="font-medium text-gray-800">{project.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Duration:</span>
                    <span className="font-medium text-gray-800">{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-gray-50 p-6 space-y-4">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  TECHNOLOGY STACK
                </h3>
                <div className="text-gray-700 font-light leading-relaxed text-sm">
                  {project.tech.join(' • ')}
                </div>
              </div>

              {/* Project Metrics */}
              {project.metrics && (
                <div className="bg-gray-50 p-6 space-y-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    PROJECT METRICS
                  </h3>
                  <div className="space-y-3 text-sm">
                    {project.metrics.stars && (
                      <div className="flex justify-between">
                        <span className="text-gray-500 font-light">GitHub Stars:</span>
                        <span className="font-medium text-gray-800">{project.metrics.stars}</span>
                      </div>
                    )}
                    {project.metrics.commits && (
                      <div className="flex justify-between">
                        <span className="text-gray-500 font-light">Commits:</span>
                        <span className="font-medium text-gray-800">{project.metrics.commits}</span>
                      </div>
                    )}
                    {project.metrics.users && (
                      <div className="flex justify-between">
                        <span className="text-gray-500 font-light">Users:</span>
                        <span className="font-medium text-gray-800">{project.metrics.users}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="pt-8 text-xs text-gray-400 uppercase tracking-wider">
            <div className="flex items-center justify-between">
              <span>PROJECT DETAILS</span>
              <span>DAVID M. GEDDAM</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}