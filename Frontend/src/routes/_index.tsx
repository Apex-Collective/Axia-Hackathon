import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ChevronDown,
  Upload,
  Zap,
  Star,
  SquareUser,
  Paperclip,
  Maximize,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-purple-100">
      <Helmet>
        <title>Apex Collective - Stand Out. Get Noticed.</title>
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link
            to="/discover"
            className="hover:text-slate-900 transition-colors"
          >
            Discover
          </Link>
          <Link
            to="/how-it-works"
            className="hover:text-slate-900 transition-colors"
          >
            How it Works
          </Link>
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors">
            <span>Products</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Link to="/faqs" className="hover:text-slate-900 transition-colors">
            FAQs
          </Link>
        </div>

        {/* Logo Card */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 pt-4 pb-3 px-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-b-2xl border-b border-x border-slate-100">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <div className="w-6 h-6 bg-slate-900 rounded-sm flex items-center justify-center text-white text-xs">
              <Upload className="w-3 h-3" />
            </div>
            ApexCollective
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/auth/login"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="px-5 py-2.5 text-sm font-medium bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-40 pb-20 px-4 overflow-hidden">
        {/* Abstract Background Elements (Stipples) */}
        <div className="absolute top-20 left-10 opacity-20 pointer-events-none hidden lg:block">
          <svg
            width="200"
            height="400"
            fill="currentColor"
            className="text-slate-400"
          >
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" />
            </pattern>
            <rect width="200" height="400" fill="url(#dots)" />
          </svg>
        </div>
        <div className="absolute top-20 right-10 opacity-20 pointer-events-none hidden lg:block transform scale-x-[-1]">
          <svg
            width="200"
            height="400"
            fill="currentColor"
            className="text-slate-400"
          >
            <rect width="200" height="400" fill="url(#dots)" />
          </svg>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center relative z-10 mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-600">
              Create a clean, shareable profile that puts your skills front and
              center
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-purple-600 block sm:inline">Stand Out.</span>{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-amber-500">
              Get Noticed.
            </span>{" "}
            <span className="text-slate-900">In minutes.</span>
          </h1>
        </div>

        {/* Connecting Lines Visualization (SVG Overlay) */}
        {/* This approximates the circuit lines connecting the central upload icon to the grid */}
        <div className="absolute top-120 left-1/2 -translate-x-1/2 w-300 h-100 pointer-events-none -z-10 hidden lg:block">
          <svg
            className="w-full h-full stroke-slate-300 fill-none"
            strokeWidth="1.5"
          >
            {/* Central vertical line down */}
            <path d="M600,0 L600,60" />
            {/* Branching to cards */}
            <path d="M600,60 C400,60 400,60 250,120" /> {/* To Card 1 */}
            <path d="M600,60 C500,60 500,60 450,120" /> {/* To Card 2 */}
            <path d="M600,60 C700,60 700,60 750,120" /> {/* To Card 3 */}
            <path d="M600,60 C800,60 800,60 950,120" /> {/* To Card 4 */}
            {/* Lines from cards collecting to bottom button */}
            <path d="M250,300 C250,350 450,350 480,380" />
            <path d="M950,300 C950,350 750,350 720,380" />
          </svg>
        </div>

        {/* Central Anchor Icon */}
        <div className="flex justify-center mb-12 relative z-10">
          <div className="w-20 h-20 bg-white border border-purple-100 shadow-xl shadow-purple-100/50 rounded-2xl flex items-center justify-center relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
            <Upload className="w-10 h-10 text-slate-800" />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative z-10">
          {/* Card 1 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
              <Maximize className="w-5 h-5 text-slate-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">
              All your work in one spot
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Link your GitHub, personal site, Behance, Dribbble, or LinkedIn.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
              <Zap className="w-5 h-5 text-slate-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">
              Lightning-fast setup
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Guided form with smart suggestions. Add your name, bio, and links.
            </p>
          </div>

          {/* Card 3 (Highlighted) */}
          <div className="group bg-slate-50/50 p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-all relative">
            <Paperclip className="absolute -top-3 -right-3 w-8 h-8 text-purple-400 transform rotate-12" />
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <Star className="w-5 h-5 text-slate-900 fill-slate-900" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">
              Skill tags that pop
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Pick from popular skills or add your own. They show up
              prominently.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
              <SquareUser className="w-5 h-5 text-slate-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">
              Availability badge
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Let people know if you're actively looking, open to opportunities.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center mb-24 relative z-10">
          <Link
            to="/auth/signup"
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:scale-105"
          >
            Create Profile Now
          </Link>
        </div>

        {/* Discovery Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Discover what's possible!
          </h2>

          <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-full">
            <button className="px-6 py-2 rounded-full bg-white text-slate-900 text-sm font-medium shadow-sm border border-slate-200">
              Discover Talents
            </button>
            <button className="px-6 py-2 rounded-full text-slate-500 text-sm font-medium hover:text-slate-900">
              Hiring Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
