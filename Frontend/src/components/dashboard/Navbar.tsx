import { Bell, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="z-10 w-full h-16 bg-white border-b border-brand-primary/20 flex items-center justify-between px-4 md:px-8 fixed top-0">
      {/* Logo Div */}
      <Link to="/dashboard" className="flex items-center">
        <img src="/images/Logo.svg" alt="Logo" className="size-60" />
      </Link>
      {/* Mini Profile */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 bg-brand-primary/10 rounded-full"
        >
          <Bell size={20} />
        </Button>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <Avatar className="size-8 bg-br">
              <AvatarImage src="/vite.svg" alt="profile pic" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-start gap-[-1]">
              <p className="text-xl text-brand-primary">Joshua Inioluwa</p>
              <p className="text-brand-primary/60">joshuainioluwa@ui.com</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col gap-[-1]"
          >
            <ChevronUp size={16} className="text-gray-800" />
            <ChevronDown size={16} className="text-gray-800" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
