import ProfileHeader from "@/components/dashboard/ProfileHeader";
import RecommendedJobs from "@/components/dashboard/Recommendedjobs";

export default function DashboardHomePage() {
  return (
    <section>
      {/* Welcome text */}

      {/* Profile Header Card/Cards */}
      <ProfileHeader/>

      {/* Recommended jobs  */}
      <RecommendedJobs />

      {/* Recently Applied Jobs */}
    </section>
  );
}
