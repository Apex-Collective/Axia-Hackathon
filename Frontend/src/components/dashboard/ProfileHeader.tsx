import { X, CheckCircle2, Circle, Play, BookOpen } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="w-full max-w-300 mx-auto px-4 md:px-6 py-8">
      {/* --- Section 4: Main Widgets Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* LEFT CARD: Onboarding / Basics */}
        <div className="lg:col-span-2 bg-gray-50/50 rounded-2xl border border-gray-100 p-6 relative shadow-sm hover:shadow-md transition-shadow">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full p-1">
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
              {/* Green Badge */}
              <span className="inline-block bg-green-50 border border-green-200 text-green-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                50% Complete. You are halfway there.
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div
              className="bg-green-500 h-1.5 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          {/* Checklist & Action Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-3">
              {/* Item 1: Completed */}
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-0.5">
                  <CheckCircle2
                    size={18}
                    className="text-white fill-green-500"
                  />
                </div>
                <span className="text-gray-400 text-sm line-through decoration-gray-400">
                  Verify email
                </span>
              </div>

              {/* Item 2: Pending */}
              <div className="flex items-center gap-3">
                <Circle size={22} className="text-gray-300 stroke-[1.5]" />
                <span className="text-gray-900 text-sm font-medium">
                  Boost your visibility{" "}
                  <span className="text-gray-500 font-normal">
                    - Upload your projects to enhance profile
                  </span>
                </span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="bg-[#0F1115] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-black transition-colors w-full md:w-auto">
              Edit Profile
            </button>
          </div>
        </div>

        {/* RIGHT CARD: Gamification / Rank */}
        <div className="lg:col-span-1 bg-[#2E1035] rounded-2xl p-6 flex flex-col justify-between min-h-55 relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-gray-300 text-xs mb-2">
                Your profile strength
              </p>
              <div className="flex items-center gap-2">
                <h3 className="text-[#FF6B6B] text-3xl font-bold tracking-tight">
                  Youngling
                </h3>
                <BookOpen className="text-[#FF6B6B]" size={24} />
              </div>
            </div>

            {/* Play Button */}
            <button className="text-white hover:text-gray-200 transition-colors mt-2">
              <Play fill="currentColor" size={20} />
            </button>
          </div>

          {/* Small Progress Bar at bottom */}
          <div className="relative z-10 w-1/3 mt-8">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div className="bg-white h-1 rounded-full w-3/4"></div>
            </div>
          </div>

          {/* Optional: Subtle Background decorative blur to match image vibe */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* --- Section 5: Recommended Jobs --- */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Recommended Jobs
        </h2>
        Placeholder for the cut-off text in the image
        <p className="text-gray-500 text-sm">
          Jobs where you're a top applicant based on your profile job search...
        </p>
      </div> */}
    </div>
  );
}
