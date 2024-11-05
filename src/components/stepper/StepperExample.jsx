import React, { useState } from "react";
import Stepper from "./Stepper";

function StepperExample() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Details", "Address", "Payment", "Confirm"];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8 overflow-y-auto">
      <div className="w-full max-w-3xl">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepperExample;
