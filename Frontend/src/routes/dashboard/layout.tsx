// import { useEffect } from "react";
import { Outlet } from "react-router"; 
// import { toast } from "sonner";
import { ContentTabs } from "@/components/dashboard/ContentTabs";
import Navbar from "@/components/dashboard/Navbar";
// import { api } from "@/services/api";

// Define a context type for child components
// export type DashboardContextType = {
//   user: any;
//   refreshProfile: () => Promise<void>;
// };

export default function DashboardLayout() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [user, setUser] = useState<any>(null);
  // const [loading, setLoading] = useState(true);

  // Define tabs
  const dashboardTabs = [
    { label: "Home", path: "/dashboard" },
    { label: "Discover", path: "/dashboard/discover" },
    { label: "Profile", path: "/dashboard/profile" },
  ];

  // const fetchProfile = async () => {
    // --- BYPASSING AUTH VALIDATION ---
    // try {
    //   const token = localStorage.getItem("authToken");
    //   if (!token) {
    //     throw new Error("No token found");
    //   }
      
    //   const data = await api.profile.getMe();
    //   setUser(data);
    // } catch (error) {
    //   // If unauthorized or error, redirect to login
    //   console.error("Auth Error:", error);
    //   toast.error("Session Expired", { description: "Please log in again." });
    //   navigate("/auth/login", { state: { from: location.pathname } });
    // } finally {
      // setLoading(false);
    // }
  // };

  // useEffect(() => {
  //   fetchProfile();
  // }, [navigate]);

  // if (loading) {
  //   return (
  //     <div className="flex h-screen w-full items-center justify-center bg-gray-50">
  //       <div className="size-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
  //     </div>
  //   );
  // }

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Pass user data to Navbar */}
      <Navbar/>
      
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
          
          {/* Provide user data to all child routes (Home, Discover, Profile) */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}