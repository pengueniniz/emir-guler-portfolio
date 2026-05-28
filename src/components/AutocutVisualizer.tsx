import { useState, useEffect } from 'react';
import { Play, Pause, Scissors, Sparkles, RefreshCw } from 'lucide-react';

export default function AutocutVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCut, setIsCut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Simulated Waveform heights
  const waveforms = [
    25, 40, 15, 10, 5, 5, 8, 45, 60, 55, 15, 8, 4, 3, 5, 35, 70, 85, 90, 40,
    15, 8, 5, 5, 4, 30, 50, 45, 15, 35, 65, 80, 20, 8, 4, 4, 5, 25, 40, 15
  ];

  // Indicate which indexes are "silent" (< 10)
  const isSilentIndices = waveforms.map(h => h < 12);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0; // Loop play
          }
          return prev + 1.5;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCut = () => {
    if (animating) return;
    setAnimating(true);
    setIsPlaying(false);
    setProgress(0);
    setTimeout(() => {
      setIsCut(!isCut);
      setAnimating(false);
    }, 1500);
  };

  return (
    <div className="w-full bg-[#0E0E0E] rounded-xl border border-[#27272A]/40 p-5 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-[11px] font-sans text-[#A1A1AA] uppercase tracking-wider">
            Yapay Zeka Dalga Analizi
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            disabled={animating}
            className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition disabled:opacity-50 cursor-pointer"
            title={isPlaying ? "Durdur" : "Oynat"}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>
          <button
            onClick={handleCut}
            disabled={animating}
            className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
              isCut
                ? 'bg-[#1C1B1B] text-[#A1A1AA] border border-[#27272A]'
                : 'bg-white text-black'
            }`}
          >
            {animating ? (
              <RefreshCw size={12} className="animate-spin" />
            ) : isCut ? (
              <>
                <RefreshCw size={12} /> Geri Al
              </>
            ) : (
              <>
                <Scissors size={12} /> Sessizlikleri Kes
              </>
            )}
          </button>
        </div>
      </div>

      {/* Waveform View */}
      <div className="relative h-24 bg-black/60 rounded-lg border border-[#27272A]/20 flex items-center justify-between px-3 overflow-hidden">
        {/* Progress Cursor */}
        {isPlaying && (
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-white z-10 shadow-[0_0_8px_white]"
            style={{ left: `${progress}%` }}
          ></div>
        )}

        {/* Waves list */}
        <div className="flex items-end justify-between w-full h-16 relative">
          {waveforms.map((height, idx) => {
            const isSilent = isSilentIndices[idx];
            // If cut, hide silent bars entirely
            if (isCut && isSilent) return null;

            return (
              <div
                key={idx}
                className="flex flex-col justify-end h-full flex-1 mx-[1px]"
              >
                <div
                  className={`w-full rounded-t-sm transition-all duration-700 ease-out`}
                  style={{
                    height: `${height}%`,
                    backgroundColor: isCut
                      ? 'rgba(255, 255, 255, 0.85)' // Clean active wave
                      : isSilent
                      ? 'rgba(239, 68, 68, 0.45)' // Red alert silent
                      : 'rgba(161, 161, 170, 0.65)' // Grey sound waves
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Ambient Overlay for "Silent Intervals Cut!" banner */}
        {isCut && (
          <div className="absolute inset-0 bg-[#0E0E0E]/10 backdrop-blur-[0.5px] flex items-center justify-center animate-fade-in">
            <div className="bg-black/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-sans px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
              <Sparkles size={10} className="animate-pulse" />
              12 SESSİZLİK TESPİT EDİLDİ VE KESİLDİ
            </div>
          </div>
        )}
      </div>

      {/* Info labels */}
      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-sans text-[#A1A1AA]">
        <div className="p-2 border border-[#27272A]/30 rounded bg-[#131313]/20">
          <p className="opacity-60 text-[9px]">Giriş Ham Video</p>
          <p className="text-white font-semibold mt-0.5">02:44 DK</p>
        </div>
        <div className="p-2 border border-[#27272A]/30 rounded bg-[#131313]/20">
          <p className="opacity-60 text-[9px]">Kesilen Sessizlik</p>
          <p className="text-red-400 font-semibold mt-0.5">18.4 SN</p>
        </div>
        <div className="p-2 border border-[#27272A]/30 rounded bg-[#131313]/20">
          <p className="opacity-60 text-[9px]">Analiz Süresi</p>
          <p className="text-emerald-400 font-semibold mt-0.5">0.3 SN</p>
        </div>
      </div>
    </div>
  );
}
