import React, { useState } from "react";
import RadioButton from "./RadioButton";

export default function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "option1", label: "Basic Plan ⭐" },
    { value: "option2", label: "Pro Plan 🌟" },
    { value: "option3", label: "Enterprise Plan 💫" },
  ];

  return (
    <div className="flex justify-center items-center min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-md w-full mx-4 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Select Your Plan
        </h2>

        <div className="mb-8">
          <RadioButton
            name="example"
            options={options}
            selectedOption={selectedOption}
            onChange={handleRadioChange}
          />
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Currently Selected:</p>
          <p className="font-semibold text-gray-900 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
            {options.find((opt) => opt.value === selectedOption)?.label}
          </p>
        </div>
      </div>
    </div>
  );
}
