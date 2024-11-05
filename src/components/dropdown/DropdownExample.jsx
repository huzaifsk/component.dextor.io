import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function DropdownExample() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("Selected:", option);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-ful p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Dropdown Example
      </h2>
      <div className="w-64">
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleSelect}
          placeholder="Select an option"
        />
      </div>
      {/* {selectedOption && ( */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
        <p className="text-gray-600">
          Selected Value:{" "}
          <span className="font-medium text-gray-900">
            {selectedOption.label ? selectedOption.label : "selected option"}
          </span>
        </p>
      </div>
      {/* )} */}
    </div>
  );
}
