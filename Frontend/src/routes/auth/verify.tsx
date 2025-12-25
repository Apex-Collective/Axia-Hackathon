import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { api } from "@/services/api";

export default function VerifyMagicLink() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const verified = useRef(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = searchParams.get("token");
      const email = searchParams.get("email");

      if (!token) {
        toast.error("Invalid Link", { description: "Missing token." });
        navigate("/auth/login");
        return;
      }

      if (verified.current) return;
      verified.current = true;

      // --- DEMO MODE HANDLER ---
      if (token === "demo") {
        setTimeout(() => {
          toast.success("Verified!", { description: "Welcome back (Demo Mode)." });
          navigate("/dashboard");
        }, 1500); // 1.5s delay for spinner effect
        return;
      }
      // -------------------------

      try {
        await api.auth.verifyMagicLink(token, email || "");
        toast.success("Verified!", { description: "Welcome back." });
        navigate("/dashboard"); 
      } catch (error: any) {
        toast.error("Verification Failed", {
          description: error.message || "Link expired or invalid."
        });
        navigate("/auth/login");
      }
    };

    verifyToken();
  }, [searchParams, navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#fcfcfd]">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
         <h1 className="text-xl font-bold text-gray-900 mb-2">Verifying...</h1>
         <div className="mt-4 flex justify-center">
            <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
         </div>
         <p className="text-gray-500 mt-4">Please wait while we log you in.</p>
      </div>
    </div>
  );
}