import { ReactNode } from "react";

interface WizardLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
}

export function WizardLayout({ 
  children, 
  currentStep, 
  totalSteps, 
  title, 
  subtitle 
}: WizardLayoutProps) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Step Indicator */}
      <div className="text-purple-600 text-sm font-semibold tracking-wide mb-4">
        STEP {currentStep} of {totalSteps}
      </div>

      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
      {subtitle && <p className="text-gray-500 mb-6">{subtitle}</p>}

      {/* Form Content */}
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}