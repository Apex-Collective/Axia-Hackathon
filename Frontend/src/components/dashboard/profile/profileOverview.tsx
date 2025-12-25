export function ProfileOverview() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* About Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
        <p className="text-sm text-gray-500 mb-4">A peek into your career profile</p>
        <p className="text-gray-600 leading-relaxed text-sm">
          I am passionate about supporting people and solving problems by sharing my knowledge and skills. 
          I value clear communication and meaningful connections, as building trust and understanding with 
          others motivates me and drives my commitment to making a positive impact.
        </p>
      </div>

      {/* Experience Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Experience</h3>
        <p className="text-sm text-gray-500 mb-6">An overview of my professional experience</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job Card 1 */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-gray-900">Product Designer</h4>
              <span className="text-xs text-gray-400">Jan 2025 - Nov 2025</span>
            </div>
            <p className="text-gray-500 text-sm">AxiaAfrica (Remote)</p>
          </div>

          {/* Job Card 2 */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-gray-900">Product Designer</h4>
              <span className="text-xs text-gray-400">Jan 2025 - Nov 2025</span>
            </div>
            <p className="text-gray-500 text-sm">AxiaAfrica (Remote)</p>
          </div>
        </div>
      </div>

      {/* Skills and Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Skills */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4">My Skills</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              User Experience
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              User Interface
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              Time Management
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Education</h3>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Mathematics</h4>
              <p className="text-gray-500 text-sm mt-1">Lagos State University</p>
            </div>
            <span className="text-xs text-gray-400">Jan 2025 - Nov 2025</span>
          </div>
        </div>

      </div>
    </div>
  );
}