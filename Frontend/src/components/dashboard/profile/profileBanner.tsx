import { useEffect, useState } from "react";
import {
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  CloudUpload,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserData {
  fullName: string;
  country: string;
  role: string; // Note: specific mapping might be needed if saved as 'jobTitle'
  jobTitle?: string; // Fallback for the key name saved in SignUp
  skills: string; // Comma separated string
}

export function ProfileBanner() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // 1. Retrieve data saved during SignUp
    const storedData = localStorage.getItem("temp_user_data");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setUser(parsed);
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  // 2. Prepare Display Data (with Fallbacks)
  const displayName = user?.fullName || "Your Name";
  // Check both 'role' and 'jobTitle' keys depending on how it was saved
  const displayRole = user?.role || user?.jobTitle || "Software Engineer";
  const displayLocation = /* user?.country ||  */ "Lagos, Nigeria";

  // 3. Process Skills (Split string into array)
  const getSkillsList = () => {
    if (!user?.skills) return ["React", "JavaScript", "Design"]; // Default
    return user.skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };

  const allSkills = getSkillsList();
  const visibleSkills = ["React", "JavaScript", "CSS", "Bootstrap", "Git"];
  const hiddenCount = Math.max(0, allSkills.length - 5);

  // 4. Generate Initials from Display Name
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 mb-8">
      {/* Upload/Banner Zone */}
      <div className="relative w-full h-48 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition-colors">
        <div className="p-3 bg-white rounded-full shadow-sm mb-3">
          <CloudUpload className="text-gray-600 w-6 h-6" />
        </div>
        <p className="text-blue-600 font-semibold text-sm mb-1">
          Click to upload{" "}
          <span className="text-gray-500 font-normal">or drag and drop</span>
        </p>
        <p className="text-gray-400 text-xs">
          SVG, PNG, JPG or GIF (max. 800×400px)
        </p>
      </div>

      {/* Profile Info Section */}
      <div className="px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end -mt-12 mb-6">
          <div className="relative">
            {/* Avatar with Initials Fallback */}
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-sm">
              <Avatar className="w-32 h-32">
                <AvatarImage
                  src="https://image.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop"
                  alt="Profile"
                  className="object-cover"
                />
                <AvatarFallback className="bg-gray-200 text-3xl font-bold text-gray-500">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                {displayName}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <Badge className="bg-[#dbd8fc] text-gray-900 hover:bg-[#ebe9fe] border-gray-900 px-3 py-1 text-md rounded-full pointer-events-none capitalize">
                  {displayRole}
                </Badge>
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <div className="flex items-center text-gray-500 text-sm capitalize">
              <MapPin className="w-4 h-4 mr-1" />
              {displayLocation}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-gray-200 text-gray-600 hover:text-black"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-gray-200 text-gray-600 hover:text-black"
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-gray-200 text-gray-600 hover:text-black"
            >
              <Instagram className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Tech Stack & Salary */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-100 gap-4">
          <div className="flex flex-wrap gap-3">
            {visibleSkills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg bg-white shadow-sm text-sm font-medium text-gray-700 capitalize"
              >
                <span>{skill}</span>
              </div>
            ))}

            {hiddenCount > 0 && (
              <div className="px-3 py-1.5 border border-gray-200 rounded-lg bg-gray-50 text-sm font-medium text-gray-600">
                +{hiddenCount}
              </div>
            )}
          </div>

          <div className="text-sm">
            <span className="text-gray-500">Desired Salary: </span>
            <span className="font-bold text-gray-900">$5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
