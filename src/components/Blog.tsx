import { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import { motion } from 'motion/react';
export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="py-12 max-w-[800px] mx-auto px-6 space-y-8 animate-fade-in">
        {/* Back navigation */}
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Yazılara Geri Dön
        </button>

        {/* Article header */}
        <article className="space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 text-white px-2.5 py-1 rounded w-fit border border-white/5">
              {selectedPost.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {selectedPost.title}
            </h1>
            <div className="flex items-center gap-6 text-xs text-[#A1A1AA] font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} /> {selectedPost.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> {selectedPost.readTime}
              </span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="h-64 sm:h-96 rounded-2xl overflow-hidden border border-[#27272A]/50 relative">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
          </div>

          {/* Article Body Content */}
          <div className="prose prose-invert max-w-none text-[#D4D4D8] leading-relaxed space-y-6 text-base sm:text-lg">
            {selectedPost.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('* ')) {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-2 text-[#A1A1AA]">
                    {paragraph.split('\n').map((li, liIdx) => (
                      <li key={liIdx}>{li.replace('* ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </article>

        {/* Article footer sign-off */}
        <div className="pt-8 border-t border-[#27272A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#27272A] bg-zinc-900">
              <img
                src={profileImage}
                alt="Emir Güler"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Emir Güler</p>
              <p className="text-[10px] font-mono text-[#A1A1AA]">Yazar &amp; Dijital Üretici</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedPost(null)}
            className="px-5 py-2 border border-[#27272A] text-[#A1A1AA] hover:text-white rounded-full text-xs font-semibold cursor-pointer"
          >
            Blog Listesine Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="space-y-4 max-w-2xl"
      >
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Kurgu, Kod &amp; Kültür</h2>
        <p className="text-base text-[#A1A1AA]">
          Geliştirdiğim yazılımların tasarım hikayelerini, otomasyon süreçlerinin teknik aşamalarını ve dijital içerik üretimine dair deneyimlerimi aktardığım kişisel günlüğüm.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group bg-[#0A0A0A] rounded-2xl border border-[#27272A]/70 overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer flex flex-col h-full"
          >
            {/* Visual Header */}
            <div className="aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-[#27272A]/50 relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover grayscale transition-transform duration-75 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 text-white border border-white/10 px-2.5 py-1 rounded backdrop-blur">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[11px] font-mono text-[#A1A1AA] opacity-80">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-neutral-200 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-white flex items-center gap-1 group-hover:underline">
                  Okumaya Başla <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
