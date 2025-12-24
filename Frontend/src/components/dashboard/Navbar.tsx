import { Bell, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  user?: any;
}

export default function Navbar({ user }: NavbarProps) {
  // Safe extraction of user details
  const firstName = user?.about?.fullName?.split(" ")[0] || "User";
  const fullName = user?.about?.fullName || "Guest User";
  const email = user?.about?.email || "guest@example.com";
  // Fallback initials
  const initials = fullName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <nav className="z-50 w-full h-16 bg-white border-b border-brand-primary/20 flex items-center justify-between px-4 md:px-8 fixed top-0 shadow-sm">
      {/* Logo Div */}
      <Link to="/" className="flex items-center">
        <img
          src="/images/Logo.svg"
          alt="Logo"
          className="w-32 md:w-40 object-contain"
        />
      </Link>

      {/* Mini Profile */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 bg-brand-primary/10 rounded-full hidden sm:flex"
        >
          <Bell size={20} />
        </Button>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <Avatar className="size-8 md:size-10 bg-brand-primary/10 border border-brand-primary/20">
              {/* If user has a photo URL, you can put it here */}
              <AvatarImage src={user?.passportPhoto || ""} alt={fullName} />
              <AvatarFallback className="text-brand-primary font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col justify-start">
              <p className="text-sm font-semibold text-brand-primary leading-tight">
                {firstName}
              </p>
              <p className="text-xs text-brand-primary/60">{email}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col gap-0 h-auto p-1 hover:bg-transparent"
          >
            <ChevronUp size={14} className="text-gray-400" />
            <ChevronDown size={14} className="text-gray-400" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
