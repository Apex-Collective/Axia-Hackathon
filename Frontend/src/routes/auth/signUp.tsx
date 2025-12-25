import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { WizardLayout } from "@/components/onboarding/WizardLayout";
import { Step1Origin } from "@/components/onboarding/Step1Origin";
import { Step2Work } from "@/components/onboarding/Step2Work";
import { Step3Intro } from "@/components/onboarding/Step3Intro";
// import { api, type RegisterPayload } from "@/services/api"; // API not needed for demo

export default function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    jobTitle: "",
    skills: "",
    experience: "",
    tools: "",
    bio: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateData = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    try {
      // --- DEMO MODE: SAVE TO LOCAL STORAGE ---
      // We save the raw form data so we can reconstruct the user profile in Dashboard
      localStorage.setItem("temp_user_data", JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        country: formData.country,
        role: formData.jobTitle,
        skills: formData.skills,
        experience: formData.experience,
        tools: formData.tools,
        bio: formData.bio,
      }));

      // Simulate a brief network delay for realism
      await new Promise(resolve => setTimeout(resolve, 800));

      toast.success("Account Created (Demo)", {
        description: "Profile saved locally. Proceeding to verification."
      });
      
      navigate("/auth/magic-link", { state: { email: formData.email } });
      
    } catch (error: any) {
      toast.error("Registration Failed", {
        description: "Could not save demo data."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      {step === 1 && (
        <WizardLayout
          currentStep={1}
          totalSteps={3}
          title="Hello! What's your origin story?"
        >
          <Step1Origin
            data={formData}
            onUpdate={updateData}
            onNext={nextStep}
          />
        </WizardLayout>
      )}

      {step === 2 && (
        <WizardLayout
          currentStep={2}
          totalSteps={3}
          title="Love it! Tell us more about what you do."
        >
          <Step2Work
            data={formData}
            onUpdate={updateData}
            onNext={nextStep}
            onBack={prevStep}
          />
        </WizardLayout>
      )}

      {step === 3 && (
        <WizardLayout
          currentStep={3}
          totalSteps={3}
          title="Almost there! How would you like to be intro'd?"
        >
          <Step3Intro
            data={formData}
            onUpdate={updateData}
            onSubmit={handleFinalSubmit}
            onBack={prevStep}
            // @ts-ignore 
            isLoading={isSubmitting}
          />
        </WizardLayout>
      )}
    </>
  );
}