import { Link } from "react-router";
import { X } from "lucide-react";

export default function MagicLinkSent() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center max-w-md animate-in fade-in zoom-in duration-300">
        <Link 
          to="/auth/login"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
          One last step to go live
        </h1>
        
        <p className="text-gray-500 mb-8">
          We'll send you a magic link to claim and manage your profil.
        </p>

        <div className="space-y-4 w-full">
          <button 
            type="button"
            className="block w-full bg-brand-primary text-white font-medium py-2.5 rounded-lg hover:bg-brand-primary/90 transition-colors cursor-pointer"
          >
            Send Magic Link
          </button>

          <div className="relative block w-65 mx-auto bg-[#fef5e7] border border-[#f59e0b] rounded-full p-3 text-sm text-[#f59e0b] hover:text-brand-primary transition-colors">
            Link expires in 15 minutes
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
              <img src="/icons/link.svg" alt="people" className="size-7 opacity-50"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}