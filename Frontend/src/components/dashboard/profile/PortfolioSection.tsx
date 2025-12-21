import { FolderGit2, ExternalLink, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    id: 1,
    title: "SwiftPay Dashboard",
    desc: "A fintech dashboard application for managing international transfers.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "bg-blue-50",
    link: "#",
  },
  {
    id: 2,
    title: "Axia Hackathon Portal",
    desc: "The platform built for the 2025 Grand Slam challenge.",
    tags: ["Vue", "Firebase", "Stripe"],
    color: "bg-purple-50",
    link: "#",
  },
];

export function PortfolioSection() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Featured Projects</h2>
        <Button variant="outline" size="sm" className="gap-2">
          <FolderGit2 size={16} /> Import from GitHub
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all bg-white"
          >
            {/* Thumbnail Area */}
            <div className={`h-40 ${project.color} w-full relative`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                <a
                  href={project.link}
                  className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gray-100 text-gray-600 font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Add New Project Card */}
        <button className="border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center min-h-[300px] text-gray-400 hover:border-pink-500 hover:text-pink-500 hover:bg-pink-50/10 transition-colors gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-pink-100 flex items-center justify-center transition-colors">
            <Plus className="group-hover:text-pink-500" size={24} />
          </div>
          <span className="font-medium">Add New Project</span>
        </button>
      </div>
    </div>
  );
}