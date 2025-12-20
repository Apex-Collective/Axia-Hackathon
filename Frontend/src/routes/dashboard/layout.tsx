import { ContentTabs } from "@/components/dashboard/ContentTabs";
import Navbar from "@/components/dashboard/Navbar";
import { Outlet } from "react-router";
// import HomeActive from "/icons/home-filled.svg";
// import HomeInactive from "/icons/home-outline.svg";
// import DiscoverActive from "/icons/discover-filled.svg";
// import DiscoverInactive from "/icons/discover-outline.svg";

export default function DashboardLayout() {
  const dashboardTabs = [
    {
      label: "Home",
      path: "/dashboard",
      //   activeIcon: HomeActive,
      //   inactiveIcon: HomeInactive
    },
    {
      label: "Discover",
      path: "/dashboard/discover",
      //   activeIcon: DiscoverActive,
      //   inactiveIcon: DiscoverInactive
    },
    {
      label: "Profile",
      path: "/dashboard/profile",
      //   activeIcon: DiscoverActive,
      //   inactiveIcon: DiscoverInactive
    },
  ];

  return (
    <div className="relative min-h-scren bg-gray-50">
      <Navbar />
      <main className="pt-16 pb-8">
        <div className="absolute flex justify-between w-full px-1">
          <img
            src="/images/abstract-left.svg"
            alt=""
            className="w-50 object-contain"
          />
          <img
            src="/images/abstract-left.svg"
            alt=""
            className="w-50 scale-x-[-1] object-contain"
          />
        </div>
        <div className="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ContentTabs tabs={dashboardTabs} className="relative z-30" />
          <Outlet />
        </div>
      </main>
    </div>
  );
}
