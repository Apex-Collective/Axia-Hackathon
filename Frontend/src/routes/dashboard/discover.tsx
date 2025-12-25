import { useState, useMemo } from "react";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import TalentCard from "@/components/dashboard/TalentCard";
import JobCategoryCarousel from "@/components/dashboard/JobCategoryCarousel";

// --- 1. DATA CONFIGURATION ---
// We multiply the original 4 items to create enough data for pagination
const BASE_DATA = [
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
    images: ["bg-orange-200", "bg-gray-800"],
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

// Generate 48 items by repeating the base data
const ALL_TALENTS = Array.from({ length: 48 }).map((_, i) => ({
  ...BASE_DATA[i % 4],
  id: i + 1, // Unique ID
  // Add slight variation to names so they don't look identical
  name: `${BASE_DATA[i % 4].name.split(" ")[0]} ${String.fromCharCode(
    65 + (i % 26)
  )}.`,
}));

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // --- 2. SEARCH LOGIC ---
  // Filter the full list based on the search query
  const filteredData = useMemo(() => {
    if (!searchQuery) return ALL_TALENTS;

    const lowerQuery = searchQuery.toLowerCase();
    return ALL_TALENTS.filter(
      (talent) =>
        talent.name.toLowerCase().includes(lowerQuery) ||
        talent.role.toLowerCase().includes(lowerQuery) ||
        talent.skills.some((s) => s.name.toLowerCase().includes(lowerQuery))
    );
  }, [searchQuery]);

  // --- 3. PAGINATION LOGIC ---
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current slice of data to display
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [currentPage, filteredData]);

  // Reset to page 1 if search changes
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="z-10 min-h-screen bg-white text-gray-900 font-sans">
      {/* --- Main Content Container --- */}
      <div className="max-w-300 mx-auto px-4 md:px-6 py-8">
        {/* --- Hero Section --- */}
        <div className="mb-10 text-center md:text-left relative">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-size-[8px_8px]"></div>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#0F1115] text-white px-6 rounded-full text-sm font-medium hover:bg-black transition-colors">
            Explore Skilled Professionals
          </button>
        </div>

        {/* --- Categories --- */}
        <JobCategoryCarousel />

        {/* --- Talent Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 min-h-100">
          {currentData.length > 0 ? (
            currentData.map((talent) => (
              <TalentCard key={talent.id} data={talent} />
            ))
          ) : (
            <div className="col-span-2 text-center py-20 text-gray-400">
              No professionals found matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 text-sm font-medium text-gray-500">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} /> Previous
            </button>

            <div className="flex items-center gap-2">
              {getPageNumbers().map((p, idx) =>
                typeof p === "number" ? (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(p)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                      currentPage === p
                        ? "bg-[#0F1115] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </button>
                ) : (
                  <span key={idx} className="px-1">
                    ...
                  </span>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
