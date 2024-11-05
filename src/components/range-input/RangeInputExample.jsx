import React, { useState } from "react";
import RangeInput from "./RangeInput";

export default function RangeInputExample() {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-5 bg-white rounded shadow-md w-80">
        <RangeInput
          label="Adjust Value"
          min={0}
          max={100}
          value={rangeValue}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
}
