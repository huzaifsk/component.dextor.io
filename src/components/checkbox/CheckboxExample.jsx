import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-5">
        <Checkbox
          label="I agree to the terms and conditions"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}
