import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import AutocutVisualizer from './AutocutVisualizer';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
interface ProjectsProps {
  isFullView?: boolean;
}

export default function Projects({ isFullView = false }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects if in full projects view
  const displayedProjects = isFullView
    ? selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory)
    : PROJECTS.filter((p) => p.featured);

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'yapay-zeka', label: 'Yapay Zeka' },
    { id: 'otomasyon', label: 'Otomasyon' },
    { id: 'video-kurgu', label: 'Video Kurgu' },
  ];

  return (
    <section className="py-20 border-t border-[#27272A]/30 max-w-[1200px] mx-auto px-6">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-wide text-white font-display">
              {isFullView ? 'Tüm Projelerim' : 'Öne Çıkan Projeler'}
            </h2>
            <p className="text-sm text-[#A1A1AA] max-w-[500px]">
              {isFullView
                ? 'Geliştirdiğim yapay zeka entegreli sistemler, otomatik veri akışları ve kurgu araçlarının tamamı.'
                : 'Fikir aşamasından kodlamaya, üretim ve yayılama kadar uçtan uca otonom hale getirdiğim öne çıkan projeler.'}
            </p>
          </div>

          {/* Categories bar only visible in full view */}
          {isFullView && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-[#A1A1AA] border-[#27272A] hover:border-white/50 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Projects List Container */}
        <div className="space-y-10">
          {displayedProjects.map((project, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                key={project.id}
                className="bg-[#0A0A0A] rounded-2xl border border-[#27272A]/70 overflow-hidden hover:border-[#3E3E42]/90 transition-all duration-300 p-6 md:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left part: Info */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#1A1A1A]/70 text-[#A1A1AA] border border-[#27272A]/50 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Buttons */}
                    <div className="flex items-center gap-4 pt-2">
                      {project.longDescription && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-semibold text-white hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          Detayları Gör <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right part: Interactive simulator OR visual block */}
                  <div className="lg:col-span-7 w-full">
                    {project.id === 'pengu-autocut' ? (
                      <AutocutVisualizer />
                    ) : (
                      // Fallback visual representations
                      <div className="relative rounded-xl overflow-hidden border border-[#27272A]/40 aspect-[16/9] group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                          <span className="text-[10px] font-mono text-white/50 bg-black/60 px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest">
                            Proje Görseli
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project details overlay modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] rounded-2xl border border-[#27272A] max-w-2xl w-full p-6 sm:p-8 space-y-6 relative overflow-hidden animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white hover:scale-110 transition cursor-pointer"
            >
              ✕
            </button>
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-white/10 px-2.5 py-1 text-white border border-white/5 rounded">
                Proje İncelemesi
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              <p className="text-sm text-emerald-400 font-mono">Kategori: {selectedProject.category.toUpperCase()}</p>
            </div>

            <div className="text-sm text-[#A1A1AA] space-y-4 leading-relaxed">
              <p className="font-medium text-white">{selectedProject.description}</p>
              <div className="border-t border-[#27272A]/40 pt-4">
                <p>{selectedProject.longDescription}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#27272A]/20">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-[#1C1B1B] text-[#A1A1AA] text-xs border border-[#27272A] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-zinc-200 cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
