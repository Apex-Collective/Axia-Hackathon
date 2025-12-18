import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router"; 
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
    toast.success("Magic Link Sent! Check the email you entered")
    navigate("/auth/magic-link");
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-md">
    
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-500 mb-6">
          Log in to your Apex Collective account to continue
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
                  className="px-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img 
                    src="/icons/help_icon.svg" 
                    alt="mail" 
                    className="size-5 text-gray-400 opacity-50"
                  />
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img 
                    src="/icons/auth_mail_icon.svg" 
                    alt="mail" 
                    className="size-5 text-gray-400 opacity-50"
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
      </div>
    </div>
  );
}