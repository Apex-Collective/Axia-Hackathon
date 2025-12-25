import { Outlet } from "react-router";
import { ContentTabs } from "@/components/dashboard/profile/ContentTabs";

export default function ProfileLayout() {
  const profileTabs = [
    {
      label: "Overview",
      path: "/dashboard/profile/preview",
    },
    {
      label: "Edit Profile",
      path: "/dashboard/profile/edit",
    },
  ];

  return (
    <section className="relative z-10 min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-300 mx-auto px-4 md:px-6 py-8">
        {/* --- Hero Section --- */}
        <div className="mb-10 text-center md:text-left relative">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            My Profile <span className="text-3xl">📜</span>
          </h1>
          <p className="text-gray-500">
            Manage your personal information and portfolio
          </p>
        </div>

        {/* --- Navigation Tabs --- */}
        <ContentTabs tabs={profileTabs} className="mb-8" />

        {/* --- Dynamic Content Area --- */}
        <div className="min-h-100">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
