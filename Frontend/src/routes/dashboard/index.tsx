import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeFeed from "@/components/dashboard/HomeFeed";
import DiscoverFeed from "@/components/dashboard/DiscoverFeed";
import ProfileView from "@/components/dashboard/ProfileView";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-white flex justify-center">
      {/* Centralized Desktop Container */}
      <div className="w-full max-w-3xl border-x min-h-screen relative">
        {/* Sticky Header & Navigation */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 border-b">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight text-brand-primary">
              Axia
            </h1>
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
              {/* Avatar Placeholder - Replace with actual user image if available */}
              <img
                src="https://github.com/shadcn.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start h-12 bg-transparent p-0 border-b rounded-none px-6 space-x-8">
              <TabsTrigger
                value="home"
                className="h-full rounded-none border-b-2 border-transparent px-0 data-[state=active]:border-brand-primary data-[state=active]:shadow-none bg-transparent"
              >
                Home
              </TabsTrigger>
              <TabsTrigger
                value="discover"
                className="h-full rounded-none border-b-2 border-transparent px-0 data-[state=active]:border-brand-primary data-[state=active]:shadow-none bg-transparent"
              >
                Discover
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="h-full rounded-none border-b-2 border-transparent px-0 data-[state=active]:border-brand-primary data-[state=active]:shadow-none bg-transparent"
              >
                Profile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Main Content Area */}
        <main className="p-0">
          {activeTab === "home" && <HomeFeed />}
          {activeTab === "discover" && <DiscoverFeed />}
          {activeTab === "profile" && <ProfileView />}
        </main>
      </div>
    </div>
  );
}
