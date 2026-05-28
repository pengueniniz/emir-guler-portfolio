/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import ContactModal from './components/ContactModal';
import { ArrowUp, Linkedin, Github } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Back to top button visibility check
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col font-sans selection:bg-white selection:text-black">


      {/* Main navigation header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openContact={() => setIsContactOpen(true)}
      />

      {/* Main layout contents */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-fade-in divide-y divide-[#27272A]/20">
            <Hero onSeeProjects={() => setActiveTab('projects')} />
            <About />
            <Projects isFullView={false} />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="animate-fade-in">
            <Projects isFullView={true} />
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="animate-fade-in">
            <Blog />
          </div>
        )}
      </main>

      {/* Elegant minimalist footer */}
      <footer className="border-t border-[#27272A]/30 bg-[#0E0E0E]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">Emir Güler</p>
            <p className="text-xs text-[#A1A1AA] font-mono">
              © 2026 Emir Güler. Tüm hakları saklıdır.
            </p>
          </div>

          {/* Social Links matching UI style guide */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/emir-g%C3%BCler-465b04206/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black hover:bg-white hover:text-black hover:border-white border border-[#27272A]/60 text-[#A1A1AA] transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/pengueniniz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black hover:bg-white hover:text-black hover:border-white border border-[#27272A]/60 text-[#A1A1AA] transition-all duration-300"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Embedded Contact overlay Drawer Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Interactive Back to Top Pill */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-white text-black hover:bg-[#E4E4E7] transition-all rounded-full shadow-2xl z-40 transform active:scale-90 animate-fade-in border border-black/10 cursor-pointer"
          title="Yukarı Çık"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}

