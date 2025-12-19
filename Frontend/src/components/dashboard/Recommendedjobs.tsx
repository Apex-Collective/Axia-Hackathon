import { Bookmark, FileSearch } from 'lucide-react';

// --- Types & Mock Data ---
interface Job {
  id: number;
  company: string;
  logoColor: string; // Helper for placeholder logos
  logoLetter: string;
  title: string;
  tags: string[];
  salary: string;
  location: string;
  isNew?: boolean;
}

const JOBS_DATA: Job[] = [
  {
    id: 1,
    company: 'Google',
    logoColor: 'bg-red-500',
    logoLetter: 'G',
    title: 'Product Designer',
    tags: ['Full-time', 'On-site', 'Mid-level'],
    salary: '$110/hr',
    location: 'San Francisco, CA',
    isNew: true,
  },
  {
    id: 2,
    company: 'Amazon',
    logoColor: 'bg-orange-400',
    logoLetter: 'A',
    title: 'Data Analyst',
    tags: ['Full-time', 'Remote', 'Entry level'],
    salary: '$200-250k',
    location: 'Seattle, WA',
    isNew: true,
  },
  {
    id: 3,
    company: 'Meta',
    logoColor: 'bg-blue-600',
    logoLetter: 'M',
    title: 'Senior Frontend Developer',
    tags: ['Contract', 'Remote', 'Senior level'],
    salary: '$120/hr',
    location: 'New York, NY',
    isNew: true,
  },
  {
    id: 4,
    company: 'Microsoft',
    logoColor: 'bg-blue-400',
    logoLetter: 'M',
    title: 'UX Designer',
    tags: ['Full-time', 'Hybrid', 'Mid-level'],
    salary: '$100/hr',
    location: 'Redmond, WA',
    isNew: true,
  },
  {
    id: 5,
    company: 'Google',
    logoColor: 'bg-red-500',
    logoLetter: 'G',
    title: 'Product Manager',
    tags: ['Full-time', 'Remote', 'Senior-level'],
    salary: '$140/hr',
    location: 'Mountain View, CA',
    isNew: true,
  },
  {
    id: 6,
    company: 'Amazon',
    logoColor: 'bg-orange-400',
    logoLetter: 'A',
    title: 'Data Scientist',
    tags: ['Full-time', 'On-site', 'Entry-level'],
    salary: '$200-250k',
    location: 'Seattle, WA',
    isNew: true,
  },
];

export default function RecommendedJobs() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
      
      {/* --- Section Header --- */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommended Jobs</h2>
        <p className="text-gray-500 text-sm">
          Jobs where you're a top applicant based on your profile job search
        </p>
      </div>

      {/* --- Jobs Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {JOBS_DATA.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* --- Recently Applied Section --- */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recently Applied Jobs</h2>
        <p className="text-gray-500 text-sm mb-6">
          Browse our directory of qualified talented professions
        </p>

        {/* Empty State Card */}
        <div className="bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 min-h-[300px] flex flex-col items-center justify-center p-8">
          {/* Illustration Placeholder */}
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 relative">
             <FileSearch size={40} className="text-blue-500" />
             {/* Decorative blob behind */}
             <div className="absolute top-0 right-0 w-full h-full bg-blue-200/30 rounded-full blur-xl"></div>
          </div>
          
          <button className="bg-[#0F1115] text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-black transition-colors shadow-sm">
            Start Applying
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Individual Job Card Component ---
function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200">
      
      {/* Top Row: Logo & Bookmark */}
      <div className="flex justify-between items-start mb-4">
        {/* Placeholder Logo (Replace with <img> for real logos) */}
        <div className={`w-10 h-10 ${job.logoColor} text-white rounded-lg flex items-center justify-center font-bold text-lg`}>
          {job.logoLetter}
        </div>
        <button className="text-gray-300 hover:text-gray-500">
          <Bookmark size={20} className="fill-current text-transparent stroke-current" />
        </button>
      </div>

      {/* Company & Badges */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-gray-900 font-medium">{job.company}</span>
        {job.isNew && (
          <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
            New post
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {job.tags.map((tag) => (
          <span 
            key={tag} 
            className="bg-[#EFF2F6] text-gray-600 text-xs font-medium px-3 py-1.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: Salary & Button */}
      <div className="flex items-end justify-between mt-auto">
        <div>
          <p className="text-[#7F56D9] text-lg font-bold">{job.salary}</p>
          <p className="text-gray-400 text-xs mt-1">{job.location}</p>
        </div>
        <button className="bg-[#0F1115] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-black transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}