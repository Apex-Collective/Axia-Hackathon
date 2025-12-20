import { ContentTabs } from "@/components/dashboard/ContentTabs";

export default function DashboardProfilePage() {

const profileTabs = [
    {
      label: "Overview",
      path: "/dashboard"
    },
    {
      label: "Edit Profile",
      path: "/dashboard/discover"
    }
  ];

  return (
    <section className="relative z-10 min-h-screen bg-white text-gray-900 font-sans">
      {/* --- Main Content Container --- */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        {/* --- Hero Section --- */}
        <div className="mb-10 text-center md:text-left relative">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            Edit your profile <span className="text-3xl">📜</span>
          </h1>
          <p className="text-gray-500">
            Update your personal information easily{" "}
          </p>
        </div>

        <ContentTabs tabs={profileTabs}/>
      </div>
    </section>
  );
}
