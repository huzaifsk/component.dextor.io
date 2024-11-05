import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Step circle */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
              index <= currentStep
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-500"
            }`}
          >
            {index < currentStep ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>

          {/* Step label */}
          <span
            className={`ml-2 text-sm font-medium ${
              index <= currentStep ? "text-black" : "text-gray-500"
            }`}
          >
            {step}
          </span>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-0.5 mx-4 ${
                index < currentStep ? "bg-black" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
