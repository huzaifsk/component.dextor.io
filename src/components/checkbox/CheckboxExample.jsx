import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function CheckboxExample() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "terms", label: "I agree to the terms and conditions" },
    { value: "newsletter", label: "Subscribe to newsletter" },
    { value: "updates", label: "Receive product updates" },
  ];

  const handleCheckboxChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-5">
        <Checkbox
          options={options}
          selectedOptions={selectedOptions}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}
