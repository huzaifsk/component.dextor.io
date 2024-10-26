import React from "react";

const RangeInput = ({ label, min, max, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-gray-700 font-medium">
        {label}: <span className="text-blue-500">{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default RangeInput;
