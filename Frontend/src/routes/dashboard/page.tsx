import { useOutletContext } from "react-router";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import RecommendedJobs from "@/components/dashboard/Recommendedjobs";
import type { DashboardContextType } from "./layout";

export default function DashboardHomePage() {
  // Get data from Layout
  const { user } = useOutletContext<DashboardContextType>();

  return (
    <section className="space-y-6">
      {/* Welcome text could go here using {user.about.firstName} */}

      {/* Profile Header Card/Cards - passing user data */}
      <ProfileHeader user={user} />

      {/* Recommended jobs */}
      <RecommendedJobs />

      {/* Recently Applied Jobs */}
    </section>
  );
}