import { useState, useRef, FormEvent } from 'react';
import { Send, CheckCircle, Mail, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Proje Hakkında',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Lütfen tüm gerekli alanları doldurun.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Saved in localStorage for tracking locally if needed
      const existing = localStorage.getItem('emir_messages');
      const messages = existing ? JSON.parse(existing) : [];
      messages.push({
        ...formData,
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('tr-TR')
      });
      localStorage.setItem('emir_messages', JSON.stringify(messages));
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Proje Hakkında',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-[#0A0A0A] rounded-2xl border border-[#27272A] w-full max-w-[900px] h-fit max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-12 relative overflow-hidden shadow-2xl animate-fade-in"
      >
        {/* Absolute Close handle */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white hover:scale-110 transition z-10 cursor-pointer text-lg p-2 font-mono"
        >
          ✕
        </button>

        {/* Left pane: Contact details & specs (5 Columns) */}
        <div className="md:col-span-5 bg-[#131313] p-8 flex flex-col justify-between border-r md:border-[#27272A]/40 min-h-[350px] md:min-h-[500px]">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-widest block">
                Bağlantı Kurun
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">İletişime Geçin</h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Bir proje fikriniz mi var, otomasyon sistemleri yaptırmak mı istiyorsunuz veya sadece sohbet mi etmek istiyorsunuz? Çekinmeden yollayın!
              </p>
            </div>

            <div className="space-y-4 pt-4 text-xs sm:text-sm text-[#D4D4D8]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black/50 rounded-lg border border-[#27272A]/40 text-[#A1A1AA]">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#A1A1AA]">E-Posta</p>
                  <a href="mailto:gulersemir123@gmail.com" className="hover:underline font-semibold text-white">
                    gulersemir123@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-black/50 rounded-lg border border-[#27272A]/40 text-[#A1A1AA]">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#A1A1AA]">Konum</p>
                  <p className="font-semibold text-white">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons footer */}
          <div className="space-y-3 pt-6 md:pt-0">
            <p className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-widest">Sosyal Ağlar</p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/emir-g%C3%BCler-465b04206/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-black hover:bg-white hover:text-black hover:border-white border border-[#27272A]/60 text-[#A1A1AA] transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/pengueniniz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-black hover:bg-white hover:text-black hover:border-white border border-[#27272A]/60 text-[#A1A1AA] transition-all duration-300"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right pane: Interactive Form (7 Columns) */}
        <div className="md:col-span-7 p-8 flex flex-col justify-center min-h-[400px]">
          {isSuccess ? (
            <div className="text-center space-y-5 py-8 animate-fade-in flex flex-col items-center">
              <div className="p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full w-fit">
                <CheckCircle size={36} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white tracking-tight">Mesajınız Alındı!</h4>
                <p className="text-sm text-[#A1A1AA] max-w-sm mx-auto">
                  Tebrikler, mesajınız başarıyla sisteme kaydedildi. En kısa sürede size geri dönüş sağlayacağım.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition cursor-pointer"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs font-mono strings-mono uppercase tracking-wider text-[#A1A1AA]">
                    İsminiz <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Emir Güler"
                    className="w-full bg-[#131313] border border-[#27272A]/70 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs font-mono strings-mono uppercase tracking-wider text-[#A1A1AA]">
                    E-Posta Adresiniz <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@domain.com"
                    className="w-full bg-[#131313] border border-[#27272A]/70 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs font-mono strings-mono uppercase tracking-wider text-[#A1A1AA]">
                  Konu
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#131313] border border-[#27272A]/70 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-all duration-300"
                >
                  <option value="Proje Hakkında">Proje Geliştirme / Entegrasyon</option>
                  <option value="Otomasyon Talebi">n8n / Python Otomasyon Sistemi</option>
                  <option value="Video Montaj">Video Kurgu / Düzenleme</option>
                  <option value="Genel Sohbet">Genel Soru / İletişim</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs font-mono strings-mono uppercase tracking-wider text-[#A1A1AA]">
                  Mesajınız <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Projenizden veya sorunuzdan bahsedin..."
                  className="w-full bg-[#131313] border border-[#27272A]/70 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit trigger button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-lg hover:bg-[#E4E4E7] transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Mesaj Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    Mesajı İlet
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
