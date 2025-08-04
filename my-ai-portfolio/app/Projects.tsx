'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, Github, ExternalLink, Cpu, Brain, Code2, Database, Zap, Star, GitBranch, Eye, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- (Interfaces, projects data, and categories data remain the same) ---
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
  { id: 'vibecli', title: 'VibeCLI', subtitle: 'Dual-Mode AI Shell & Creative Assistant', image: '/vibe.png', githubUrl: 'https://github.com/dave21-py/VibeCLI', category: 'ai-tools', year: '2024', tech: ['Python', 'OpenAI API', 'Shell Scripting', 'CLI'], description: 'Advanced command-line interface that combines shell automation with creative AI capabilities. Features intelligent command prediction, context-aware assistance, and seamless integration with various AI models.', impact: 'Reduces developer workflow time by 40% through intelligent automation', features: [ 'Dual-mode operation (Shell & Creative)', 'Context-aware command suggestions', 'Multi-model AI integration', 'Custom plugin architecture', 'Real-time performance monitoring' ], metrics: { stars: 47, commits: 156, users: '200+' }, teamSize: 'Solo Project', duration: '3 months' },
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
  { id: 'all', label: 'All Projects', icon: <Code2 className="w-4 h-4" /> },
  { id: 'ai-tools', label: 'AI Tools', icon: <Brain className="w-4 h-4" /> },
  { id: 'gen-ai', label: 'GenAI', icon: <Zap className="w-4 h-4" /> },
  { id: 'data-viz', label: 'Data Viz', icon: <Database className="w-4 h-4" /> },
  { id: 'web-dev', label: 'Web Dev', icon: <Code2 className="w-4 h-4" /> },
  { id: 'desktop-apps', label: 'Desktop', icon: <Cpu className="w-4 h-4" /> },
  { id: 'games', label: 'Games', icon: <Star className="w-4 h-4" /> }
];

const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
        'ai-tools': 'from-emerald-500 to-teal-600', 'gen-ai': 'from-purple-500 to-pink-600', 'web-dev': 'from-blue-500 to-indigo-600', 'data-viz': 'from-orange-500 to-red-600', 'desktop-apps': 'from-gray-500 to-slate-600', 'games': 'from-yellow-500 to-orange-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
};

type ProjectsPageProps = {
  onClose: () => void;
};

export default function ProjectsPage({ onClose }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

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
    <div className="fixed inset-0 bg-gray-50 z-50 overflow-hidden">
      {/* ... Header and Category Filters ... */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40"><div className="max-w-7xl mx-auto px-6 py-6"><div className="flex items-center justify-between"><button onClick={onClose} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"><ArrowLeft className="w-5 h-5" /><span className="font-medium">Back to Portfolio</span></button><div className="text-right"><h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">AI Projects</h1><p className="text-gray-600 mt-1">Building the future, one algorithm at a time</p></div></div><div className="flex gap-3 mt-8 overflow-x-auto pb-2">{categories.map(category => (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{category.icon}{category.label}<span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">{category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length}</span></button>))}</div></div></div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 overflow-y-auto h-full pb-32">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group cursor-default"
                onMouseEnter={() => setHoveredProject(project)}
                // <-- FIX 1: onMouseLeave is removed so the card doesn't disappear automatically
              >
                <div 
                  onClick={() => setSelectedProject(project)} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] cursor-pointer"
                >
                  {/* ... Project Card Content ... */}
                  <div className="relative h-48 overflow-hidden bg-gray-100"><Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute top-4 left-4"><span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium shadow-sm">{categories.find(c => c.id === project.category)?.label}</span></div><div className="absolute top-4 right-4"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="bg-white/95 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"><Github className="w-4 h-4" /></a></div><div className="absolute bottom-4 right-4"><span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">{project.year}</span></div></div><div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{project.title}</h3><p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">{project.subtitle}</p><div className="flex flex-wrap gap-1.5 mb-4">{project.tech.slice(0, 3).map(tech => ( <span key={tech} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 group-hover:bg-gray-100 group-hover:border-gray-300 transition-all duration-300">{tech}</span>))}{project.tech.length > 3 && (<span className="text-gray-500 text-xs px-2 py-1.5 font-medium">+{project.tech.length - 3} more</span>)}</div>{project.metrics && (<div className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{project.metrics.stars && (<span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5" />{project.metrics.stars}</span>)}{project.metrics.commits && (<span className="flex items-center gap-1.5"><GitBranch className="w-3.5 h-3.5" />{project.metrics.commits}</span>)}{project.metrics.users && (<span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" />{project.metrics.users}</span>)}</div>)}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Centered "Locking" Preview Card */}
      <AnimatePresence>
        {hoveredProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60"
              onClick={() => setHoveredProject(null)} // <-- FIX 2: Clicking background closes the card
            />
            
            {/* Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-70"
              // <-- FIX 2: pointer-events-none is removed to make card interactive
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 max-w-lg w-full mx-4 relative">
                {/* <-- FIX 3: Added a close button --> */}
                <button 
                  onClick={() => setHoveredProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Card Content... */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gray-100"><Image src={hoveredProject.image} alt={hoveredProject.title} fill className="object-cover" /><div className="absolute top-4 right-4"><span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">{hoveredProject.year}</span></div></div><div className="text-center mb-6"><h3 className="text-2xl font-bold text-gray-900 mb-2">{hoveredProject.title}</h3><p className="text-gray-600 font-medium mb-4">{hoveredProject.subtitle}</p><p className="text-gray-700 text-sm leading-relaxed">{hoveredProject.description}</p></div><div className="mb-6"><div className="flex flex-wrap gap-2 justify-center">{hoveredProject.tech.map(tech => ( <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium">{tech}</span>))}</div></div><div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"><p className="text-blue-900 text-sm font-medium text-center">💡 {hoveredProject.impact}</p></div><div className="text-center"><a href={hoveredProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"><Github className="w-4 h-4" />View Project</a></div>{hoveredProject.metrics && (<div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">{hoveredProject.metrics.stars && (<span className="flex items-center gap-1"><Star className="w-4 h-4" />{hoveredProject.metrics.stars} stars</span>)}{hoveredProject.metrics.commits && (<span className="flex items-center gap-1"><GitBranch className="w-4 h-4" />{hoveredProject.metrics.commits} commits</span>)}{hoveredProject.metrics.users && (<span className="flex items-center gap-1"><Eye className="w-4 h-4" />{hoveredProject.metrics.users} users</span>)}</div>)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- (ProjectDetailView component remains unchanged) ---
function ProjectDetailView({ project, onBack, onClose }: { project: Project; onBack: () => void; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} >
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-40"><div className="max-w-6xl mx-auto px-6 py-4"><div className="flex items-center justify-between"><button onClick={onBack} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"><ArrowLeft className="w-5 h-5" /><span className="font-medium">Back to Projects</span></button><button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div></div>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12"><div className="md:flex items-center justify-between mb-6"><div className="mb-4 md:mb-0"><h1 className="text-5xl font-bold text-gray-900 mb-2">{project.title}</h1><p className="text-xl text-gray-600">{project.subtitle}</p></div><div className="flex gap-3 flex-shrink-0"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"><Github className="w-4 h-4" />View Code</a>{project.demoUrl && (<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"><ExternalLink className="w-4 h-4" />Live Demo</a>)}</div></div></div>
        <motion.div className="relative h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl" layoutId={`project-card-${project.id}`}><div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-20`} /><Image src={project.image} alt={project.title} fill className="object-contain p-8" priority /></motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8"><motion.div className="lg:col-span-2 space-y-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}><div><h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Project Overview</h2><p className="text-gray-600 text-lg leading-relaxed">{project.description}</p></div><div className="bg-green-50/80 border border-green-200/80 rounded-xl p-6 shadow-sm"><h3 className="text-lg font-semibold text-green-900 mb-2">Impact & Results</h3><p className="text-green-800">{project.impact}</p></div><div><h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Key Features</h2><ul className="space-y-3">{project.features.map((feature, index) => (<li key={index} className="flex items-start gap-3"><div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><div className="w-2 h-2 bg-blue-600 rounded-full" /></div><span className="text-gray-700">{feature}</span></li>))}</ul></div></motion.div><motion.div className="space-y-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}><div className="bg-white border rounded-xl p-6 shadow-sm"><h3 className="text-lg font-semibold text-gray-900 mb-4">Project Info</h3><div className="space-y-3 text-sm"><div className="flex justify-between"><span className="text-gray-500">Category:</span><span className="font-medium text-gray-800">{categories.find(c => c.id === project.category)?.label}</span></div><div className="flex justify-between"><span className="text-gray-500">Year:</span><span className="font-medium text-gray-800">{project.year}</span></div><div className="flex justify-between"><span className="text-gray-500">Team:</span><span className="font-medium text-gray-800">{project.teamSize}</span></div><div className="flex justify-between"><span className="text-gray-500">Duration:</span><span className="font-medium text-gray-800">{project.duration}</span></div></div></div><div className="bg-white border rounded-xl p-6 shadow-sm"><h3 className="text-lg font-semibold text-gray-900 mb-4">Tech Stack</h3><div className="flex flex-wrap gap-2">{project.tech.map(tech => (<span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium border">{tech}</span>))}</div></div>{project.metrics && (<div className="bg-white border rounded-xl p-6 shadow-sm"><h3 className="text-lg font-semibold text-gray-900 mb-4">Project Stats</h3><div className="space-y-3 text-sm">{project.metrics.stars && (<div className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-600"><Star className="w-4 h-4" /> GitHub Stars</span><span className="font-semibold">{project.metrics.stars}</span></div>)}{project.metrics.commits && (<div className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-600"><GitBranch className="w-4 h-4" /> Commits</span><span className="font-semibold">{project.metrics.commits}</span></div>)}{project.metrics.users && (<div className="flex items-center justify-between"><span className="flex items-center gap-2 text-gray-600"><Users className="w-4 h-4" /> Users</span><span className="font-semibold">{project.metrics.users}</span></div>)}</div></div>)}</motion.div></div>
      </div>
    </motion.div>
  );
}