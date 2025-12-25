import { useLocation } from "react-router";
import { ContentTabs } from "@/components/dashboard/profile/ContentTabs";
import { PortfolioSection } from "@/components/dashboard/profile/PortfolioSection";
import { ResumeSection } from "@/components/dashboard/profile/ResumeSection";
import { ProfileBanner } from "@/components/dashboard/profile/ProfileBanner";
import { ProfileOverview } from "@/components/dashboard/profile/ProfileOverview";

export default function DashboardProfilePage() {
  const location = useLocation();

  const profileTabs = [
    {
      label: "Overview",
      path: "/dashboard/profile",
    },
    {
      label: "Portfolio",
      path: "/dashboard/profile/portfolio",
    },
  ];

  const renderContent = () => {
    const path = location.pathname;

    if (path.includes("/portfolio")) {
      return <PortfolioSection />;
    }
    if (path.includes("/resume")) {
      return <ResumeSection />;
    }
    if (path.includes("/settings")) {
      return (
        <div className="p-10 text-center text-gray-500">
          Settings Configuration
        </div>
      );
    }

    return <ProfileOverview />;
  };

  return (
    <section className="relative z-10 min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        <ProfileBanner />

        <ContentTabs tabs={profileTabs} className="mb-8" />

        <div className="min-h-[400px]">{renderContent()}</div>
      </div>
    </section>
  );
}
