import { useEffect, useState, useCallback } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { toast } from "sonner";
import { ContentTabs } from "@/components/dashboard/ContentTabs";
import Navbar from "@/components/dashboard/Navbar";
import { api } from "@/services/api";

// Import Icons
import homeActive from "/icons/home-active.svg";
import homeInActive from "/icons/home-inactive.svg";
import discoveryActive from "/icons/discovery-active.svg";
import discoveryInActive from "/icons/discovery-inactive.svg";
import profileActive from "/icons/profile-active.svg";
import profileInActive from "/icons/profile-inactive.svg";

export type DashboardContextType = {
  user: any;
  refreshProfile: () => Promise<void>;
};

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const dashboardTabs = [
    {
      label: "Home",
      path: "/dashboard",
      activeIcon: homeActive,
      inactiveIcon: homeInActive,
    },
    {
      label: "Discover",
      path: "/dashboard/discover",
      activeIcon: discoveryActive,
      inactiveIcon: discoveryInActive,
    },
    {
      label: "Profile",
      path: "/dashboard/profile/preview",
      activeIcon: profileActive,
      inactiveIcon: profileInActive,
    },
  ];

  const fetchProfile = useCallback(async () => {
    try {
      // 1. Try to fetch from Backend
      const data = await api.profile.getMe();
      setUser(data);
    } catch (error) {
      console.log(
        `Backend offline or auth failed. Checking LocalStorage for Demo Mode. ${error}`
      );

      // 2. DEMO MODE FALLBACK (The Fix)
      // Instead of redirecting to login immediately, we check if we have local data.
      const cachedData = localStorage.getItem("temp_user_data");

      if (cachedData) {
        const local = JSON.parse(cachedData);

        // Construct a Mock User object that matches what the backend WOULD return
        const mockUser = {
          _id: "demo_user_id",
          email: local.email,
          about: {
            fullName: local.fullName || "Demo User",
            title: local.role || "Creator",
            bio: local.bio || "This is a demo account.",
            location: local.country || "Remote",
            email: local.email,
          },
          skills: local.skills ? local.skills.split(",") : [],
          experience: local.experience || "0",
          tools: local.tools || "",
        };

        setUser(mockUser);
        // CRITICAL: We do NOT navigate away. We stay on the dashboard.
      } else {
        // Only if we have NO backend AND NO local data do we kick the user out.
        toast.error("Session Expired", { description: "Please log in again." });
        navigate("/auth/login", { state: { from: location.pathname } });
      }
    } finally {
      setLoading(false);
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="size-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar user={user} />

      <main className="pt-16 pb-8">
        <div className="absolute flex justify-between w-full px-1 pointer-events-none">
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

        <div className="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
          <ContentTabs tabs={dashboardTabs} className="relative z-30" />
          <Outlet
            context={
              {
                user,
                refreshProfile: fetchProfile,
              } satisfies DashboardContextType
            }
          />
        </div>
      </main>
    </div>
  );
}
