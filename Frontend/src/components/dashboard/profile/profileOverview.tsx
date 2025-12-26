import { useEffect, useState } from "react";

// Matches the data saved by EditProfilePage
interface WorkExperience {
  id: string;
  jobTitle: string;
  employmentType: string;
  companyName: string;
  startDate: string;
  endDate: string;
}

interface Education {
  id: string;
  program: string;
  degree: string;
  schoolName: string;
  startDate: string;
  endDate: string;
}

interface UserData {
  role: string;
  jobTitle?: string;
  skills: string | string[]; // Can be string or array
  experience: string | number;
  country: string;
  bio: string;
  workExperience?: WorkExperience[];
  education?: Education[];
}

export function ProfileOverview() {
  const [user, setUser] = useState<UserData | null>(null);

  // 1. Retrieve data
  useEffect(() => {
    const loadData = () => {
        const storedData = localStorage.getItem("temp_user_data");
        if (storedData) {
            try {
                setUser(JSON.parse(storedData));
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
    }
    loadData();
    // Listen for updates from the Edit page
    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  // 2. Prepare Display Data (Fallback to defaults if empty)
  const displayBio = user?.bio || "I am passionate about supporting people and solving problems by sharing my knowledge and skills.";
  const displayRole = user?.role || user?.jobTitle || "Product Designer";
  const displayExp = user?.experience ? `${user.experience} Years Experience` : "Mid-Level";
  const displayLocation = user?.country || "Remote";

  // Handle skills: can be array or string
  const displaySkills = Array.isArray(user?.skills) 
    ? user.skills 
    : user?.skills?.split(',').map(s => s.trim()).filter(Boolean) 
    || ["User Experience", "User Interface", "Time Management"];

  const workList = user?.workExperience || [];
  const eduList = user?.education || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* About Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
        <p className="text-sm text-gray-500 mb-4">A peek into your career profile</p>
        <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-wrap">
          {displayBio}
        </p>
      </div>

      {/* Experience Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Experience</h3>
        <p className="text-sm text-gray-500 mb-6">An overview of my professional experience</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Dynamic Work Experience */}
          {workList.length > 0 ? (
            workList.map((job) => (
                <div key={job.id} className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-900 capitalize">{job.jobTitle}</h4>
                    <span className="text-xs text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                        {job.endDate === "Present" ? "Current" : `${job.startDate} - ${job.endDate}`}
                    </span>
                    </div>
                    <p className="text-gray-500 text-sm capitalize">{job.companyName} • {job.employmentType}</p>
                </div>
            ))
          ) : (
             /* Fallback if empty */
             <div className="flex flex-col gap-1 opacity-60">
                <p className="text-gray-500 text-sm">No experience added yet.</p>
             </div>
          )}

        </div>
      </div>

      {/* Skills and Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Skills */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4">My Skills</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            {displaySkills.map((item, index) => (
                <li key={index} className="flex items-center gap-2 capitalize">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  {item}
                </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Education</h3>
          <div className="space-y-4">
             {eduList.length > 0 ? (
                eduList.map((edu) => (
                    <div key={edu.id} className="flex justify-between items-start">
                        <div>
                        <h4 className="font-bold text-gray-900 text-sm">{edu.program} ({edu.degree})</h4>
                        <p className="text-gray-500 text-sm mt-1">{edu.schoolName}</p>
                        </div>
                        <span className="text-xs text-gray-400">{edu.startDate} - {edu.endDate}</span>
                    </div>
                ))
             ) : (
                <p className="text-gray-500 text-sm italic">No education details added.</p>
             )}
          </div>
        </div>

      </div>
    </div>
  );
}