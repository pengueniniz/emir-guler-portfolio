import { SKILLS } from '../data';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-20 border-t border-[#27272A]/30 max-w-[1200px] mx-auto px-6">
      <div className="space-y-16">
        
        {/* Hakkımda Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h2 className="text-xl font-semibold tracking-wide text-white font-display md:sticky md:top-28">
              Hakkımda
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-6 text-[#A1A1AA] leading-relaxed text-base"
          >
            <p>
              İstanbul Bilgi Üniversitesi'nde Bilgisayar Programcılığı öğrencisi olarak, yazılım dünyasının analitik yapısıyla dijital üretimin yaratıcı ruhunu harmanlayan bir geliştirici ve içerik üreticisiyim.
            </p>
            <p>
              Teknolojiye olan tutkum sadece kod satırlarından ibaret değil; algoritmaların, sistem optimizasyonlarının ve otomasyonların günlük hayatımızı ve dijital içerik tüketimimizi nasıl kökten dönüştürebileceği üzerine kafa yoruyorum. Geliştirdiğim yazılımlara sadece teknik birer ürün olarak değil; kullanıcı deneyimini, estetiği ve işlevselliği gözeten yaratıcı projeler olarak yaklaşıyorum.
            </p>
            
            <div className="pt-4 space-y-3">
              <h3 className="text-white font-semibold text-lg">Teknik Odak ve Geliştirici Kimliğim</h3>
              <p>
                Yazılım geliştirme süreçlerinde temel olarak Python ve C# dillerine odaklanıyorum. Sistemlerin daha verimli çalışmasını sağlayan optimizasyon araçları ve karmaşık süreçleri basitleştiren hayatı kolaylaştırıcı otomasyon betikleri tasarlıyorum.
              </p>
              <p>
                Benim için kod yazmak, sadece bir problemi çözmek değil; o problemin çözümünü en performanslı ve kullanıcı dostu mimariyle yeniden inşa etmektir.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-white font-semibold text-lg">Dijital Medya, Prodüksiyon ve "PenGu AI"</h3>
              <p>
                Geliştirici kimliğimin yanı sıra, güçlü bir dijital içerik ve medya altyapısına sahibim. Teknolojinin yaratıcı süreçleri hızlandırması gerektiğine inanıyor ve şu sıralar kodlama yeteneklerimi içerik üretimiyle birleştiren "PenGu AI - AutoCut for Premiere" projesi üzerinde aktif olarak çalışıyorum.
              </p>
              <p>
                FL Studio ve Adobe Premiere Pro gibi profesyonel araçlara olan hakimiyetim sayesinde ses, müzik ve video prodüksiyonu süreçlerini uçtan uca, multidisipliner bir şekilde yönetebiliyorum. Medya üretiminin getirdiği estetik bakış açısını, yazılım dünyasındaki analitik yaklaşımlarımla besliyorum.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-white font-semibold text-lg">Vizyon ve Sürekli Gelişim</h3>
              <p>
                Teknolojinin hızına yetişmek yerine onunla birlikte yürümeyi tercih ediyorum. Web Developer Conference gibi sektörel etkinlikleri yakından takip ederek vizyonumu sürekli güncel tutuyor, topluluk dinamiklerinden besleniyorum.
              </p>
              <p>
                Kişisel web sitemde, hem yazılım geliştirme süreçlerine katkı sağlayabileceğim hem de otomasyon ve yaratıcı çözümler üretebileceğim yenilikçi fikirlerimi hayata geçiriyorum. Sektör profesyonelleriyle tanışmaya, ortak değer yaratabileceğimiz projelerde rol almaya ve sınırları zorlayan vizyoner ekiplerle bir araya gelmeye her zaman açığım.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Yetenekler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 pt-12 border-t border-[#27272A]/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h2 className="text-xl font-semibold tracking-wide text-white font-display md:sticky md:top-28">
              Yetenekler
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + (idx * 0.05) }}
                  className="px-6 py-3 bg-[#131313]/50 border border-[#27272A] hover:border-white/50 text-[#D4D4D8] hover:text-white rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 cursor-default flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
