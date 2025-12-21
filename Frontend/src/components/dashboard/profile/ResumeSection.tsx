import { Briefcase, GraduationCap, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex justify-between items-center pb-6 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Resume & Experience</h2>
          <p className="text-gray-500 text-sm">
            Professional history and educational background
          </p>
        </div>
        <Button variant="outline" className="gap-2 text-gray-600">
          <Download size={16} /> Download PDF
        </Button>
      </div>

      {/* Work Experience */}
      <div className="space-y-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <span className="p-2 bg-pink-50 text-pink-500 rounded-lg">
            <Briefcase size={18} />
          </span>
          Work Experience
        </h3>

        <div className="relative border-l-2 border-gray-100 ml-4 space-y-8 pl-8 pb-4">
          {/* Experience Item 1 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-pink-500 shadow-sm"></span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <h4 className="font-bold text-gray-900 text-base">
                Senior Frontend Engineer
              </h4>
              <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full w-fit">
                Current
              </span>
            </div>
            <div className="text-sm text-gray-600 font-medium mb-2">
              TechFlow Solutions • Lagos, Nigeria
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              Leading the frontend team in migrating a legacy monolithic application to a modern micro-frontend architecture.
            </p>
          </div>

          {/* Experience Item 2 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-gray-300"></span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <h4 className="font-bold text-gray-900 text-base">
                Frontend Developer
              </h4>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar size={12} /> 2021 - 2023
              </span>
            </div>
            <div className="text-sm text-gray-600 font-medium mb-2">
              Creative Agency • Remote
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              Collaborated with designers to implement pixel-perfect user interfaces for over 15 client projects.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <span className="p-2 bg-blue-50 text-blue-500 rounded-lg">
            <GraduationCap size={18} />
          </span>
          Education
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h4 className="font-bold text-gray-900">B.Sc Computer Science</h4>
            <p className="text-sm text-gray-600 mb-2">Lagos State University</p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Calendar size={12} /> 2019 - 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}