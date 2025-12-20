import {
  Search,
  ArrowRight,
  ArrowLeft,
  Globe,
  Code,
  Shield,
  PenTool,
  Database,
  LayoutTemplate,
} from "lucide-react";
import TalentCard from "@/components/dashboard/TalentCard"; // Assuming component is in same folder
import JobCategoryCarousel from "@/components/dashboard/JobCategoryCarousel";

// --- Mock Data based on your screenshots ---
const TALENT_DATA = [
  {
    id: 1,
    name: "Tunde K. Prague",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    online: true,
    skills: [
      { name: "Next.js", icon: "⚡" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Typescript", icon: "TS" },
    ],
    extraSkills: 10,
    bio: "Building clean, fast web apps that users love.",
    images: ["bg-orange-200", "bg-gray-800"], // Placeholders for portfolio images
  },
  {
    id: 2,
    name: "Aisha K. Selenski",
    role: "Product manager",
    location: "Nairobi, Kenya",
    online: true,
    skills: [
      { name: "Analytics", icon: "📊" },
      { name: "Roadmap", icon: "🗺️" },
      { name: "Stakeholder Management", icon: "🤝" },
    ],
    extraSkills: 15,
    bio: "Shipping products that solve real problems.",
    images: ["bg-green-900", "bg-emerald-100"],
  },
  {
    id: 3,
    name: "Chioma E. Brasil",
    role: "Product Designer",
    location: "Accra, Ghana",
    online: true,
    skills: [
      { name: "User Research", icon: "🔍" },
      { name: "Prototyping", icon: "✨" },
      { name: "Adobe XD", icon: "💎" },
    ],
    extraSkills: 10,
    bio: "Turning ideas into intuitive experiences.",
    images: ["bg-pink-200", "bg-blue-50"],
  },
  {
    id: 4,
    name: "Fatima A. Nice",
    role: "Cybersecurity Analyst",
    location: "Abuja, Nigeria",
    online: true,
    skills: [
      { name: "Penetration Testing", icon: "🛡️" },
      { name: "Cloud Security", icon: "☁️" },
      { name: "Ethical Hacking", icon: "💻" },
    ],
    extraSkills: 21,
    bio: "Securing systems and hunting threats so businesses can innovate without fear.",
    images: ["bg-white border", "bg-gray-100"],
  },
];

const CATEGORIES = [
  { name: "Security", icon: <Shield size={14} /> },
  { name: "Branding", icon: <PenTool size={14} /> },
  { name: "Data Analysis", icon: <Database size={14} /> },
  { name: "Frontend Developer", icon: <Code size={14} /> },
  { name: "Robotics", icon: <Globe size={14} /> }, // Placeholder icon
  { name: "Product Designer", icon: <LayoutTemplate size={14} /> },
  { name: "Backend Developer", icon: <Database size={14} /> },
];

export default function DiscoverPage() {
  return (
    <div className="z-10 min-h-screen bg-white text-gray-900 font-sans">
      {/* --- Main Content Container --- */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        {/* --- Hero Section --- */}
        <div className="mb-10 text-center md:text-left relative">
          {/* Background dots decoration (simplified) */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:8px_8px]"></div>

          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            Discover your talent! <span className="text-3xl">🧭</span>
          </h1>
          <p className="text-gray-500">
            Browse our directory of qualified talented professionals
          </p>
        </div>

        {/* --- Search Bar --- */}
        <div className="relative max-w-2xl mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="What do you need help with?"
            className="w-full pl-12 pr-48 py-4 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-700"
          />
          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#0F1115] text-white px-6 rounded-full text-sm font-medium hover:bg-black transition-colors">
            Explore Skilled Professionals
          </button>
        </div>

        {/* --- Categories / Tags (Scrollable) --- */}
        <JobCategoryCarousel />

        {/* --- Talent Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {TALENT_DATA.map((talent) => (
            <TalentCard key={talent.id} data={talent} />
          ))}
        </div>

        {/* --- Pagination --- */}
        <div className="flex justify-center items-center gap-4 text-sm font-medium text-gray-500">
          <button className="flex items-center gap-1 hover:text-gray-900">
            <ArrowLeft size={16} /> Previous
          </button>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center bg-[#0F1115] text-white rounded-lg">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
              3
            </button>
            <span className="px-1">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
              67
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
              68
            </button>
          </div>

          <button className="flex items-center gap-1 hover:text-gray-900">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
