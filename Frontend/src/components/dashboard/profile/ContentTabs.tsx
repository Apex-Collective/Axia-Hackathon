import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils"; // generic shadcn utility for classes

interface TabItem {
  label: string;
  path: string;
  publicProfilePath?: string;
}

interface ContentTabsProps {
  tabs: TabItem[];
  className?: string;
}

export function ContentTabs({ tabs, className }: ContentTabsProps) {
  const location = useLocation();
  const publicProfile = tabs.find((tab) => tab.publicProfilePath);
  

  return (
    <div
      className={cn(
        "w-full relative flex justify-start border-b border-gray-200 bg-transparent gap-6",
        className
      )}
    >
      {tabs.map((tab) => {
        // Check if the current URL matches this tab's path
        // We use 'endsWith' or exact match depending on your needs.
        // For root /dashboard, we might need strict equality to avoid it being active for /dashboard/discover
        const isActive = location.pathname === tab.path;
        

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={cn(
              "group flex items-center gap-2 border-b-2 px-0 py-3 font-medium transition-all cursor-pointer relative",
              isActive
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            {/* ICON CONTAINER */}

            <span>{tab.label}</span>
          </Link>
        );
      })}

      <Link
        to={`${publicProfile}`}
        className="text-pink-500 absolute right-10 bottom-0"
      >
        View Public Profile
      </Link>
    </div>
  );
}
