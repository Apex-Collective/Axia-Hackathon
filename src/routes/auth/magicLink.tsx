import { Link } from "react-router";

export default function MagicLinkSent() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center max-w-md">

      <h1 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
        One last step to go live
      </h1>
      
      <p className="text-gray-500 mb-8">
        We'll send you a magic link to claim and manage your profil.
      </p>

      <div className="space-y-4 w-full">
        <a 
          
          className="block w-full bg-brand-primary text-white font-medium py-2.5 rounded-lg hover:bg-brand-primary/90 transition-colors"
        >
          Send Magic Link
        </a>

        <div
          className="block w-65 mx-auto bg-indigo-500/70 border border-indigo-900 rounded-full p-3 text-sm text-indigo-800 hover:text-brand-primary transition-colors"
        >
          Link expires in 15 minutes
        </div>
      </div>
    </div>
  );
}