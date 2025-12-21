import { useLocation } from "react-router"; // or "react-router-dom"
import { ContentTabs } from "@/components/dashboard/ContentTabs";
// Import the components we just made
import { PortfolioSection } from "@/components/dashboard/profile/PortfolioSection";
import { ResumeSection } from "@/components/dashboard/profile/ResumeSection";

export default function DashboardProfilePage() {
  const location = useLocation();

  // NOTE: Ensure these paths are registered in your router.tsx
  // or that this page handles these sub-paths.
  const profileTabs = [
    {
      label: "Overview",
      path: "/dashboard/profile", // Assuming this is the main profile view
      // Add icons here if you have them, e.g. inactiveIcon: "..."
    },
    {
      label: "Portfolio",
      path: "/dashboard/profile/portfolio",
    },
    {
      label: "Resume",
      path: "/dashboard/profile/resume",
    },
    {
      label: "Edit Profile",
      path: "/dashboard/profile/edit", 
    }
  ];

  // Helper to determine what to render below the tabs based on current path
  const renderContent = () => {
    const path = location.pathname;
    
    if (path.includes("/portfolio")) {
      return <PortfolioSection />;
    }
    if (path.includes("/resume")) {
      return <ResumeSection />;
    }
    if (path.includes("/edit")) {
      return <div>{/* Your Edit Profile Component goes here */}</div>;
    }
    // Default to Overview
    return (
      <div className="text-gray-500 py-10 text-center border-dashed border border-gray-200 rounded-xl">
        Overview Content (Profile Stats, etc.)
      </div>
    );
  };

  return (
    <section className="relative z-10 min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        
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
        <div className="min-h-[400px]">
          {renderContent()}
        </div>

      </div>
    </section>
  );
}