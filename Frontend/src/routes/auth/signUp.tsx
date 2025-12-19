import { useState } from "react";
import { useNavigate } from "react-router";
import { WizardLayout } from "@/components/onboarding/WizardLayout";
import { Step1Origin } from "@/components/onboarding/Step1Origin";
import { Step2Work } from "@/components/onboarding/Step2Work";
import { Step3Intro } from "@/components/onboarding/Step3Intro";

export default function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
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

  const handleFinalSubmit = () => {
    console.log("Form Completed:", formData);
    navigate("/auth/magic-link", { state: { email: formData.email } });
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
          />
        </WizardLayout>
      )}
    </>
  );
}
