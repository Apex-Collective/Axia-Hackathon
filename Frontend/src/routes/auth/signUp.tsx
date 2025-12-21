import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { WizardLayout } from "@/components/onboarding/WizardLayout";
import { Step1Origin } from "@/components/onboarding/Step1Origin";
import { Step2Work } from "@/components/onboarding/Step2Work";
import { Step3Intro } from "@/components/onboarding/Step3Intro";
import { api, type RegisterPayload } from "@/services/api";

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

    // Map your form state to the API expected format
    const payload: RegisterPayload = {
      name: formData.fullName,
      email: formData.email,
      country: formData.country,
      role: formData.jobTitle,
      skills: formData.skills,
      yearsOfExperience: formData.experience,
      tools: formData.tools,
      introduction: formData.bio,
    };

    try {
      await api.auth.register(payload);
      
      toast.success("Account Created", {
        description: "Please check your email to verify your profile."
      });
      
      navigate("/auth/magic-link", { state: { email: formData.email } });
      
    } catch (error: any) {
      toast.error("Registration Failed", {
        description: error.message || "An error occurred during registration."
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
            // Passing isLoading if your Step3Intro component supports a loading prop for the button
            // If not, it will simply ignore this prop without breaking.
            // @ts-ignore 
            isLoading={isSubmitting}
          />
        </WizardLayout>
      )}
    </>
  );
}