import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="relative w-full min-h-screen bg-brand-bg flex items-center justify-center overflow-hidden">
      {/* The Background images */}
      <div className="fixed flex items-center gap-10">
        <img
          src="/images/auth_bg_img_2.jpg"
          alt=""
          loading="eager"
          fetchPriority="high"
          className="w-80 object-contain"
        />

        <img
          src="/images/auth_bg_img_1.jpg"
          alt=""
          loading="eager"
          fetchPriority="high"
          className="w-80 object-contain mt-40"
        />
      </div>

      {/* The forms/Outlets */}
      <div className="flex flex-col z-5 items-center bg-red-500 p-5">
        <div className="">
          <img
            src="/images/auth_logo.jpg"
            alt="Apex Collective Logo"
            loading="eager"
            fetchPriority="high"
            className="w-60 object-contain"
          />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
