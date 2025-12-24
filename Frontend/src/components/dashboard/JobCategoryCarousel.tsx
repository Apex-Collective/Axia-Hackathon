import React from 'react';
import { 
  Shield, PenTool, Database, Code, Globe, LayoutTemplate, 
  Smartphone, Server, Cloud, Cpu, Terminal, Wifi, MonitorPlay
} from 'lucide-react';

// --- Expanded Career Data ---
const CATEGORIES = [
  { name: 'Security', icon: <Shield size={14} /> },
  { name: 'Stakejolder Management', icon: <PenTool size={14} /> },
  { name: 'Data Analysis', icon: <Database size={14} /> },
  { name: 'Frontend Dev', icon: <Code size={14} /> },
  { name: 'Ethical Hacking', icon: <Code size={14} /> },
  { name: 'Branding', icon: <PenTool size={14} /> },
  { name: 'Robotics', icon: <Globe size={14} /> },
  { name: 'Cloud Security', icon: <Globe size={14} /> },
  { name: 'Product Design', icon: <LayoutTemplate size={14} /> },
  { name: 'Branding', icon: <PenTool size={14} /> },
  { name: 'Backend Dev', icon: <Server size={14} /> },
  { name: 'Mobile Dev', icon: <Smartphone size={14} /> },
  { name: 'DevOps', icon: <Cloud size={14} /> },
  { name: 'AI Engineer', icon: <Cpu size={14} /> },
  { name: 'Game Dev', icon: <MonitorPlay size={14} /> },
  { name: 'System Admin', icon: <Terminal size={14} /> },
  { name: 'Penetration Testing', icon: <MonitorPlay size={14} /> },
  { name: 'IoT Specialist', icon: <Wifi size={14} /> },
];

export default function JobCategoryCarousel() {
  return (
    <div className="w-full overflow-hidden border-y border-transparent py-4 mb-8 relative">
      
      {/* Gradient masks for fading edges (Optional but looks pro) */}
      <div className="absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      {/* The Moving Track */}
      {/* We duplicate the list to create the seamless loop effect */}
      <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
        
        {/* First Set of Items */}
        {CATEGORIES.map((cat, idx) => (
          <CategoryPill key={`a-${idx}`} icon={cat.icon} name={cat.name} />
        ))}

        {/* Second Set of Items (Duplicate for loop) */}
        {CATEGORIES.map((cat, idx) => (
          <CategoryPill key={`b-${idx}`} icon={cat.icon} name={cat.name} />
        ))}
      </div>

      {/* Tailwind Custom Animation Config (Add this to your CSS or Tailwind config if needed) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Helper Sub-component for individual tags
function CategoryPill({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600 whitespace-nowrap hover:bg-[#0F1115] hover:text-white hover:border-[#0F1115] transition-all duration-300 group">
      <span className="text-gray-400 group-hover:text-white transition-colors">{icon}</span>
      {name}
    </button>
  );
}
