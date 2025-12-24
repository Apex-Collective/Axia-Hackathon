import { X, CheckCircle2, Circle, Play, BookOpen } from "lucide-react";
import { Link } from "react-router";

interface ProfileHeaderProps {
  user?: any;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  // Calculate completion based on data existence
  const calculateProgress = () => {
    if (!user) return 30;
    let score = 0;
    const totalPoints = 5; 
    
    // Simple logic: check key fields
    if (user.about?.fullName) score++;
    if (user.about?.bio) score++;
    if (user.about?.skills?.length > 0) score++; // Assuming skills might be array or string
    if (user.passportPhoto) score++;
    if (user.about?.tools?.length > 0) score++;

    return Math.min(100, (score / totalPoints) * 100);
  };

  const progress = calculateProgress();
  const isVerified = true; // Assuming if they are here, they are verified via magic link

  return (
    <div className="w-full mx-auto py-8">
      {/* --- Section 4: Main Widgets Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* LEFT CARD: Onboarding / Basics */}
        <div className="lg:col-span-2 bg-gray-50 rounded-2xl border border-gray-100 p-6 relative shadow-sm hover:shadow-md transition-shadow">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full p-1 cursor-pointer">
            <X size={16} />
          </button>

          {/* Header & Description */}
          <div className="mb-6 pr-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Let’s start with the basics
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-gray-500 text-sm max-w-md">
                Your profile is up and running. Get more by setting it up to a
                profile you love.
              </p>
              {/* Badge */}
              <span className="inline-block bg-green-50 border border-green-200 text-green-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                {progress}% Complete. {progress === 100 ? "You're all set!" : "Keep going."}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div
              className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Checklist & Action Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-3">
              {/* Item 1: Verified Email */}
              <div className="flex items-center gap-3">
                <div className={isVerified ? "bg-green-500 rounded-full p-0.5" : "bg-gray-200 rounded-full p-0.5"}>
                  <CheckCircle2
                    size={18}
                    className={isVerified ? "text-white fill-green-500" : "text-gray-400"}
                  />
                </div>
                <span className={`text-sm ${isVerified ? "text-gray-400 line-through decoration-gray-400" : "text-gray-900"}`}>
                  Verify email
                </span>
              </div>

              {/* Item 2: Boost Visibility */}
              <div className="flex items-center gap-3">
                {progress === 100 ? (
                   <div className="bg-green-500 rounded-full p-0.5"><CheckCircle2 size={18} className="text-white fill-green-500"/></div>
                ) : (
                   <Circle size={22} className="text-gray-300 stroke-[1.5]" />
                )}
                <span className="text-gray-900 text-sm font-medium">
                  Boost your visibility{" "}
                  <span className="text-gray-500 font-normal">
                    - Upload your projects to enhance profile
                  </span>
                </span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <Link to="/dashboard/profile" className="w-full md:w-auto">
              <button className="bg-[#0F1115] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-black transition-colors w-full cursor-pointer">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT CARD: Gamification / Rank */}
        <div className="lg:col-span-1 bg-[#2E1035] rounded-2xl p-6 flex flex-col justify-between h-35 relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-gray-300 text-xs mb-2">
                Your profile strength
              </p>
              <div className="flex items-center gap-2">
                <h3 className="text-[#FF6B6B] text-3xl font-bold tracking-tight">
                  {progress < 50 ? "Youngling" : progress < 100 ? "Padawan" : "Jedi"}
                </h3>
                <BookOpen className="text-[#FF6B6B]" size={24} />
              </div>
            </div>

            {/* Play Button */}
            <button className="text-white hover:text-gray-200 transition-colors mt-2 cursor-pointer">
              <Play fill="currentColor" size={20} />
            </button>
          </div>

          {/* Small Progress Bar at bottom */}
          <div className="relative z-10 w-full mt-8">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-white h-1 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Decorative Blur */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}