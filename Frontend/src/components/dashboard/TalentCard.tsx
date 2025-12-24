import { MapPin, ExternalLink } from "lucide-react";

export default function TalentCard({ data }: { data: any }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header: Avatar, Name, Link */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-4">
          {/* Avatar with Online Badge */}
          <div className="relative">
            <div className="w-14 h-14 bg-gray-200 rounded-xl overflow-hidden">
              {/* Replace with actual image tag */}
              <img
                src={`https://i.pravatar.cc/150?u=${data.id}`}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            {data.online && (
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-lg">{data.name}</h3>
            <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-2 py-0.5 rounded mb-1">
              {data.role}
            </span>
            <div className="flex items-center text-gray-400 text-xs gap-1">
              <MapPin size={12} />
              {data.location}
            </div>
          </div>
        </div>

        <button className="flex items-center gap-1 text-pink-500 text-sm font-medium hover:underline">
          View Profile <ExternalLink size={14} />
        </button>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {data.skills.map((skill: any, idx: number) => (
          <span
            key={idx}
            className="flex items-center gap-1.5 border border-gray-200 bg-white px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 shadow-sm"
          >
            <span>{skill.icon}</span> {skill.name}
          </span>
        ))}
        <span className="px-3 py-1.5 bg-pink-50 text-pink-500 text-xs font-bold rounded-lg">
          +{data.extraSkills}
        </span>
      </div>

      {/* Bio */}
      <p className="text-gray-500 text-sm mb-6">{data.bio}</p>

      {/* Portfolio Preview Grid */}
      <div className="grid grid-cols-2 gap-4 h-32">
        {/* Using background colors to simulate the portfolio images from screenshot */}
        <div
          className={`rounded-lg ${data.images[0]} bg-cover bg-center overflow-hidden relative group`}
        >
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
        <div
          className={`rounded-lg ${data.images[1]} bg-cover bg-center overflow-hidden relative group`}
        >
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
}
