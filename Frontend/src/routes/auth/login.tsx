import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email Required", {
        description: "Please enter your email address to continue.",
      });
      return;
    }

    setIsLoading(true);

    // --- DEMO MODE: SIMULATE LOGIN ---
    // Update the stored email, preserving other mock data if it exists
    const existingData = localStorage.getItem("temp_user_data");
    const parsedData = existingData ? JSON.parse(existingData) : {};

    localStorage.setItem(
      "temp_user_data",
      JSON.stringify({
        ...parsedData,
        email: email, // Update email to the one just entered
        fullName: parsedData.fullName || "Demo User", // Fallback name if starting fresh
      })
    );

    // Simulate network delay
    setTimeout(() => {
      toast.success("Check your inbox", {
        description: `We've sent a magic link to ${email}.`,
      });

      navigate("/dashboard", { state: { email } });
      setIsLoading(false);
    }, 1000);
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
                  disabled={isLoading}
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
            disabled={isLoading}
            className="w-full bg-[#0f172a] text-white font-medium py-2.5 rounded-lg hover:bg-[#0f172a]/90 transition-colors cursor-pointer"
          >
            {isLoading ? "Sending..." : "Send Magic Link"}
          </button>
        </form>
      </div>
    </div>
  );
}
