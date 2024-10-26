import React, { useState } from "react";
import RadioButton from "./RadioButton";

export default function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "option1", label: "Option 1 🚀" },
    { value: "option2", label: "Option 2 🚀" },
    { value: "option3", label: "Option 3 🚀" },
  ];

  return (
    <div className="flex justify-center items-center ">
      <div className="p-5 bg-white rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Choose an Option
        </h2>
        <RadioButton
          name="example"
          options={options}
          selectedOption={selectedOption}
          onChange={handleRadioChange}
        />
        <div className="mt-4 text-sm text-gray-600">
          Selected Option:{" "}
          <span className="font-bold text-gray-800">{selectedOption}</span>
        </div>
      </div>
    </div>
  );
}
