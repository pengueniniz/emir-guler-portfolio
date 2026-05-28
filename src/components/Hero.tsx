import { Linkedin, ArrowRight } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import { motion } from 'motion/react';

interface HeroProps {
  onSeeProjects: () => void;
}

export default function Hero({ onSeeProjects }: HeroProps) {
  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column: Bio text and buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-[540px]"
        >
          <div className="space-y-4">
            <span className="text-lg md:text-xl text-[#A1A1AA] font-medium tracking-wide block">
              Emir Güler,
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Yazılım Geliştirici &amp; <br />
              <span className="text-white">Dijital İçerik Üreticisi</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
              Blending analytical software development with creative digital content production to build seamless and engaging experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onSeeProjects}
              className="px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-full tracking-wide hover:bg-[#E4E4E7] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              Projelerimi Gör
              <ArrowRight size={16} />
            </button>
            <a
              href="https://www.linkedin.com/in/emir-g%C3%BCler-465b04206/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-[#27272A] text-white font-medium text-sm rounded-full tracking-wide hover:bg-[#1A1A1A] hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin size={16} className="text-[#A1A1AA]" />
              LinkedIn Profilim
            </a>
          </div>
        </motion.div>

        {/* Right column: Beautiful black and white photo framed beautifully */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group w-full max-w-[420px]">
            {/* Ambient background glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The main picture card */}
            <div className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#27272A]/60 aspect-[3/4]">
              <img
                src={profileImage}
                alt="Emir Güler - Yazılım Geliştirici & Dijital İçerik Üreticisi"
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
