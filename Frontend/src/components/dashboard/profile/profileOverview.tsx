import { useEffect, useState } from "react";

interface UserData {
  role: string;     
  jobTitle?: string;
  skills: string;   
  experience: string;
  country: string;
  bio: string;
}

export function ProfileOverview() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // 1. Retrieve data saved during SignUp
    const storedData = localStorage.getItem("temp_user_data");
    
    if (storedData) {
      try {
        setUser(JSON.parse(storedData));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  // 2. Helper to split comma-separated strings
  // const getList = (str?: string) => {
  //   if (!str) return [];
  //   return str.split(",").map((s) => s.trim()).filter(Boolean);
  // };

  // 3. Fallbacks
  const displayBio = user?.bio || "I am passionate about supporting people and solving problems by sharing my knowledge and skills.";
  const displayRole = user?.role || user?.jobTitle || "Product Designer";
  const displayExp = user?.experience ? `${user.experience} Years Experience` : "Mid-Level";
  const displayLocation = user?.country || "Remote";
  const displaySkills = ["User Experience", "User Interface", "Time Management"];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* About Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
        <p className="text-sm text-gray-500 mb-4">A peek into your career profile</p>
        <p className="text-gray-600 leading-relaxed text-sm">
          {displayBio}
        </p>
      </div>

      {/* Experience Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Experience</h3>
        <p className="text-sm text-gray-500 mb-6">An overview of my professional experience</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job Card 1 (Dynamic based on signup) */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-gray-900 capitalize">{displayRole}</h4>
              <span className="text-xs text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                Current
              </span>
            </div>
            <p className="text-gray-500 text-sm capitalize">Freelance / Contract • {displayLocation}</p>
            <p className="text-xs text-gray-400 mt-1">{displayExp}</p>
          </div>

          {/* Job Card 2 (Static Placeholder) */}
          <div className="flex flex-col gap-1 opacity-60">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-gray-900">Previous Role</h4>
              <span className="text-xs text-gray-400">2021 - 2023</span>
            </div>
            <p className="text-gray-500 text-sm">Previous Company</p>
          </div>
        </div>
      </div>

      {/* Skills and Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Skills */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4">My Skills</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            {displaySkills.slice(0, 6).map((item, index) => (
                <li key={index} className="flex items-center gap-2 capitalize">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  {item}
                </li>
            ))}
          </ul>
        </div>

        {/* Education (Static - Form didn't ask for this) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Education</h3>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Computer Science (B.Sc)</h4>
              <p className="text-gray-500 text-sm mt-1">Lagos State University</p>
            </div>
            <span className="text-xs text-gray-400">2019 - 2023</span>
          </div>
        </div>

      </div>
    </div>
  );
}