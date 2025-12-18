import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner"; //

export default function AuthLayout() {
  return (
    <main className="relative w-full min-h-screen bg-[#fcfcfd] flex items-center justify-center overflow-hidden font-sans">
      {/* Background images */}
      <div className="fixed flex items-center gap-10 opacity-50 z-0">
        <img
          src="/images/auth_bg_img_2.jpg"
          alt=""
          className="w-80 mr-20 pr-10 object-contain"
        />
        <img
          src="/images/auth_bg_img_1.jpg"
          alt=""
          className="w-80 object-contain mt-40"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg p-4">
        <div className="mb-8">
          <img
            src="/images/auth_logo.jpg"
            alt="Apex Collective Logo"
            className="w-48 object-contain"
          />
        </div>

        <Outlet />
      </div>

      {/* The Toaster Component */}
      <Toaster />
    </main>
  );
}
