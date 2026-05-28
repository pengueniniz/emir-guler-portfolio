import { MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openContact: () => void;
}

export default function Navbar({ activeTab, setActiveTab, openContact }: NavbarProps) {
  const tabs = [
    { id: 'home', label: 'Anasayfa' },
    { id: 'blog', label: 'Blog' },
    { id: 'projects', label: 'Projelerim' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131313]/80 backdrop-blur-md border-b border-[#27272A]/30">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Navigation Links */}
        <nav className="flex items-center space-x-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side: Contact Button */}
        <button
          onClick={openContact}
          className="px-6 py-2.5 bg-white text-black font-medium text-sm rounded-full tracking-wide hover:bg-[#E4E4E7] transition-all duration-300 transform active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <MessageSquare size={16} />
          İletişime Geç
        </button>
      </div>
    </header>
  );
}
