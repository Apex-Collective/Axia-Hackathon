import { Link, Outlet, useLocation } from "react-router";
import { Toaster } from "@/components/ui/sonner";

export default function AuthLayout() {
  const location = useLocation();

  const isLoginPage = location.pathname.includes("/login");

  // const isMagicLinkPage = location.pathname.includes("magic-link");
  return (
    <main className="relative w-full min-h-screen bg-[#fcfcfd] flex items-center justify-center overflow-hidden font-sans">
      {/* The Toaster Component */}
      <Toaster />
      {/* Background images */}
      <div className="fixed flex items-center gap-10 z-0">
        <img
          src="/images/auth_bg_img_2.svg"
          alt=""
          className="w-80 mr-20 pr-10 object-contain"
        />
        <img
          src="/images/auth_bg_img_1.svg"
          alt=""
          className="w-80 object-contain mt-40"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg p-4">
        <div className="mb-8">
          <img
            src="/images/Logo.svg"
            alt="Apex Collective Logo"
            className="w-48 object-contain"
          />
        </div>

        <Outlet />

        {isLoginPage ? (
          <Link
            to="/auth/signup"
            className="flex items-center p-4 text-brand-primary bg-white mt-7 rounded-xl"
          >
            <p>
              Don't have a profile? <strong>Create profile now</strong>
            </p>
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="flex items-center p-4 text-brand-primary bg-white mt-7 rounded-xl"
          >
            <p>
              Already have a profile? <strong>Login</strong>
            </p>
          </Link>
        )}
      </div>
    </main>
  );
}
