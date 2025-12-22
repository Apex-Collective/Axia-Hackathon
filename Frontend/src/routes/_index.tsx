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
  Shield,
  Palette,
  Code,
  LineChart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Plus,
  Minus
} from "lucide-react";
import { useState } from "react";
import TalentCard from "@/components/dashboard/TalentCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- Mock Data for Sections ---

const TALENT_DATA = [
  {
    id: 1,
    name: "Tunde K. Prague",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    online: true,
    bio: "Building clean, fast web apps that users love.",
    skills: [
      { name: "Next.js", icon: <Code size={12} /> },
      { name: "Tailwind", icon: <Palette size={12} /> },
      { name: "Typescript", icon: <Code size={12} /> },
    ],
    extraSkills: 10,
    images: ["bg-orange-100", "bg-slate-900"], // Placeholders for gradients/images
  },
  {
    id: 2,
    name: "Aisha K. Selenski",
    role: "Product Manager",
    location: "Nairobi, Kenya",
    online: true,
    bio: "Shipping products that solve real problems.",
    skills: [
      { name: "Analytics", icon: <LineChart size={12} /> },
      { name: "Roadmap", icon: <Zap size={12} /> },
      { name: "Stakeholder", icon: <Star size={12} /> },
    ],
    extraSkills: 15,
    images: ["bg-green-900", "bg-yellow-100"],
  },
  {
    id: 3,
    name: "Chioma E. Brasil",
    role: "Product Designer",
    location: "Accra, Ghana",
    online: false,
    bio: "Turning ideas into intuitive experiences.",
    skills: [
      { name: "User Research", icon: <SquareUser size={12} /> },
      { name: "Prototyping", icon: <Palette size={12} /> },
      { name: "Adobe XD", icon: <Palette size={12} /> },
    ],
    extraSkills: 10,
    images: ["bg-pink-200", "bg-purple-100"],
  },
  {
    id: 4,
    name: "Fatima A. Nice",
    role: "Cybersecurity Analyst",
    location: "Abuja, Nigeria",
    online: true,
    bio: "Securing systems and hunting threats so businesses can innovate.",
    skills: [
      { name: "Penetration", icon: <Shield size={12} /> },
      { name: "Cloud Security", icon: <Shield size={12} /> },
      { name: "Ethical Hack", icon: <Code size={12} /> },
    ],
    extraSkills: 21,
    images: ["bg-blue-50", "bg-slate-800"],
  },
];

const TESTIMONIALS = [
  {
    name: "Tunde O.",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?u=tunde",
    content: "I spent years tweaking my CV and still felt invisible. Created my Apex profile in 8 minutes – got two recruiter messages the same week.",
    rating: 4.5,
    metric: "10x",
    metricLabel: "Increased Visibility"
  },
  {
    name: "Dianne B.",
    role: "Tech Recruiter",
    image: "https://i.pravatar.cc/150?u=dianne",
    content: "As a recruiter, I hate digging through attachments. Apex profiles are clean, fast to scan, and actually show real work. Game changer.",
    rating: 4.5,
    metric: "15x",
    metricLabel: "Recruiting Ease"
  }
];

const FAQ_ITEMS = [
  {
    question: "Is Apex Collective free?",
    answer: "Yep, 100% free! Creating your profile, publishing it, and sharing the link costs nothing – now or ever. We're keeping it simple and accessible for everyone."
  },
  {
    question: "How long does it take to create a profile?",
    answer: "Most people wrap it up in under 10 minutes. The form is straightforward, just your basics, skills, and a quick bio."
  },
  {
    question: "Do I need an account to start?",
    answer: "Not at all. Jump right in and start filling out your profile – no sign-up wall. We only ask for your email when you're ready to publish."
  },
  {
    question: "Can I edit my profile later?",
    answer: "Absolutely, anytime. Just log back in with a quick magic link (no password hassle), tweak your skills, update links, or refresh your bio."
  }
];

// --- Components ---

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 transition-all hover:border-purple-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-bold text-slate-900">{question}</span>
        <div className={`w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center transition-colors ${isOpen ? 'bg-green-50 border-green-200 text-green-600' : 'text-gray-400'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-slate-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-purple-100">
      <Helmet>
        <title>Apex Collective - Stand Out. Get Noticed.</title>
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-md border-b border-transparent">
        <div className="items-center gap-8 text-sm font-medium text-slate-600 hidden md:flex">
          <Link to="/discover" className="hover:text-slate-900 transition-colors">Discover</Link>
          <Link to="/how-it-works" className="hover:text-slate-900 transition-colors">How it Works</Link>
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors">
            <span>Products</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Link to="#faqs" className="hover:text-slate-900 transition-colors">FAQs</Link>
        </div>

        {/* Logo Card */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 pt-4 pb-3 px-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-b-2xl border-b border-x border-slate-100">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <div className="w-6 h-6 bg-slate-900 rounded-sm flex items-center justify-center text-white text-xs">
              <Upload className="w-3 h-3" />
            </div>
            ApexCollective
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/auth/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
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
      <main className="relative pt-40 pb-20 overflow-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="px-4 mb-32 relative">
             {/* Abstract Background Elements (Stipples) */}
            <div className="absolute top-20 left-10 opacity-20 pointer-events-none hidden lg:block">
            <svg width="200" height="400" fill="currentColor" className="text-slate-400">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" />
                </pattern>
                <rect width="200" height="400" fill="url(#dots)" />
            </svg>
            </div>
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none hidden lg:block transform scale-x-[-1]">
            <svg width="200" height="400" fill="currentColor" className="text-slate-400">
                <rect width="200" height="400" fill="url(#dots)" />
            </svg>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-8">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-slate-600">
                Create a clean, shareable profile that puts your skills front and center
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                <span className="text-purple-600 block sm:inline">Stand Out.</span>{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-amber-500">
                Get Noticed.
                </span>{" "}
                <span className="text-slate-900">In minutes.</span>
            </h1>

            {/* Central Anchor Icon & Lines */}
            <div className="relative h-24 mb-12 flex justify-center items-end">
                 {/* Connecting Lines SVG */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-full -z-10 hidden md:block">
                   <svg className="w-full h-full stroke-slate-300 fill-none" strokeWidth="1.5">
                     <path d="M400,0 L400,100" />
                     <path d="M400,20 C200,20 200,80 100,100" />
                     <path d="M400,20 C600,20 600,80 700,100" />
                   </svg>
                 </div>
                 
                 <div className="w-20 h-20 bg-white border border-purple-100 shadow-xl shadow-purple-100/50 rounded-2xl flex items-center justify-center relative z-20">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                    <Upload className="w-10 h-10 text-slate-800" />
                 </div>
            </div>
            </div>

            {/* Feature Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 px-4">
                <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
                    <Maximize className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">All your work in one spot</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Link your GitHub, personal site, Behance, Dribbble, or LinkedIn.</p>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    <Zap className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Lightning-fast setup</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Guided form with smart suggestions. Add your name, bio, and links.</p>
                </div>

                <div className="group bg-slate-50/50 p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-all relative">
                    <Paperclip className="absolute -top-3 -right-3 w-8 h-8 text-purple-400 transform rotate-12" />
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Star className="w-5 h-5 text-slate-900 fill-slate-900" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Skill tags that pop</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Pick from popular skills or add your own. They show up prominently.</p>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                    <SquareUser className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Availability badge</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Let people know if you're actively looking, open to opportunities.</p>
                </div>
            </div>

            <div className="flex justify-center mt-12 mb-20 relative z-10">
                <Link to="/auth/signup" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:scale-105 flex items-center gap-2">
                    Create Profile Now
                </Link>
            </div>
        </section>

        {/* --- DISCOVER / TALENT SHOWCASE --- */}
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
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

                {/* Filter Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {["Cybersecurity", "Branding", "Data Analysis", "Frontend Developer", "Robotics", "Product Designer", "Backend Developer"].map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-slate-300 cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Talent Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {TALENT_DATA.map((talent) => (
                        <TalentCard key={talent.id} data={talent} />
                    ))}
                </div>
                
                <div className="text-center mt-12">
                     <p className="text-xl font-bold text-slate-900 mb-4">...and so much more!</p>
                </div>
            </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        What <span className="text-purple-600 bg-purple-50 px-2 rounded-lg">Our Customers</span> Say
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-lg mx-auto">
                        Real stories from devs, designers, recruiters, and more who've made their skills impossible to miss.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {TESTIMONIALS.map((item, idx) => (
                        <div key={idx} className="bg-purple-50/50 rounded-3xl p-8 border border-purple-100">
                            <h3 className="font-bold text-slate-900 text-lg mb-4">{item.content}</h3>
                            
                            <div className="flex items-end justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                                        <div className="text-slate-500 text-xs">{item.role}</div>
                                    </div>
                                </div>
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-purple-100 flex items-center justify-between">
                                <div className="font-bold text-slate-900 text-2xl">{item.metric}</div>
                                <div className="text-slate-500 text-sm flex items-center gap-1">
                                    <LineChart size={14} /> {item.metricLabel}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- FAQs --- */}
        <section id="faqs" className="py-20 bg-slate-50/50">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
                    <p className="text-slate-500">All the things you need to know about the ApexCollective</p>
                </div>

                <Tabs defaultValue="general" className="w-full mb-12">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-white border border-slate-200 p-1 h-auto rounded-full">
                        <TabsTrigger value="general" className="rounded-full data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">General</TabsTrigger>
                        <TabsTrigger value="product" className="rounded-full data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">Product</TabsTrigger>
                        <TabsTrigger value="support" className="rounded-full data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">Support</TabsTrigger>
                        <TabsTrigger value="other" className="rounded-full data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">Other</TabsTrigger>
                    </TabsList>
                    <TabsContent value="general" className="space-y-4 mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {FAQ_ITEMS.map((faq, i) => (
                                <AccordionItem key={i} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="product" className="text-center py-10 text-slate-400">
                        Product FAQs coming soon...
                    </TabsContent>
                </Tabs>
            </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 font-bold text-xl text-white mb-6">
                        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-slate-900">
                            <Upload className="w-4 h-4" />
                        </div>
                        ApexCollective
                    </div>
                    <p className="text-sm max-w-sm leading-relaxed mb-8">
                        Making the hiring process easier by putting the right talents in your face.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"><Twitter size={18} className="text-white"/></div>
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"><Facebook size={18} className="text-white"/></div>
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"><Instagram size={18} className="text-white"/></div>
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"><Linkedin size={18} className="text-white"/></div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors">What We Offer</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Blog & Insights</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Resources</li>
                        <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                        <li className="hover:text-white cursor-pointer transition-colors">About</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Service</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Career</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs">© ApexCollective Inc. All Rights Reserved.</p>
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 text-xs font-medium text-white hover:text-purple-400 transition-colors"
                >
                    Back to top <div className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center"><ArrowUp size={12}/></div>
                </button>
            </div>
            
            {/* Giant Footer Text Effect */}
            <div className="mt-20 opacity-5 select-none pointer-events-none">
                 <h1 className="text-[12vw] font-bold text-center leading-none text-white tracking-tighter">ApexCollective</h1>
            </div>
        </div>
      </footer>
    </div>
  );
}