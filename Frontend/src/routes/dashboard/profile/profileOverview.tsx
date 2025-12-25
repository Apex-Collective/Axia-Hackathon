import { ProfileBanner } from "@/components/dashboard/profile/profileBanner";
import { ProfileOverview } from "@/components/dashboard/profile/profileOverview";

export default function ProfileOverviewPage() {
    return (
        <section>
            <ProfileBanner/>
            <ProfileOverview/>
        </section>
    )
}