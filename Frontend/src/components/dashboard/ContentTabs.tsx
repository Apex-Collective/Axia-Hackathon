import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils"; // generic shadcn utility for classes

interface TabItem {
  label: string;
  path: string; // The URL path this tab links to
  activeIcon?: string; // Image path for active state
  inactiveIcon?: string; // Image path for inactive state
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
        "w-full flex justify-start border-b border-gray-200 bg-transparent gap-6",
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
              "group flex items-center gap-2 border-b-2 px-0 py-3 font-medium transition-all cursor-pointer",
              isActive
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            {/* ICON CONTAINER */}
            <div className="flex items-center justify-center w-5 h-5">
              {/* Show Active Icon if isActive is true */}
              {isActive ? (
                <img
                  src={tab.activeIcon}
                  alt={tab.label}
                  className="w-full h-full object-contain"
                />
              ) : (
                // Show Inactive Icon if isActive is false
                <img
                  src={tab.inactiveIcon}
                  alt={tab.label}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <span>{tab.label}</span>
          </Link>
        );
      })}
      <Link to={`${publicProfile}`} className="text-pink-500">
        View Public Profile
      </Link>
    </div>
  );
}
