import { useState } from "react";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router"; 
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    console.log("Sending magic link to:", email);
    navigate("/auth/magic-link");
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-md">
      {/* 1. The New Login Image */}
      <div className="w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/login_illustration.jpg" 
          alt="Login to Apex Collective" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-500 mb-6">
          Enter your email to receive a magic link to login.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email address</FieldLabel>
              <div className="relative">
                <Input 
                  id="email" 
                  type="email"
                  placeholder="scottowens@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img 
                    src="/icons/Axia Hackathon.zip/ion_mail.svg" 
                    alt="mail" 
                    className="w-5 h-5 text-gray-400 opacity-50"
                  />
                </div>
              </div>
            </Field>
          </FieldGroup>

          <button
            type="submit"
            className="w-full bg-[#0f172a] text-white font-medium py-2.5 rounded-lg hover:bg-[#0f172a]/90 transition-colors cursor-pointer"
          >
            Send Magic Link
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-purple-600 font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}