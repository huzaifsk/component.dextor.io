import React from "react";

const RangeInput = ({ label, min, max, value, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <label className="text-gray-800 font-medium tracking-wide">
          {label}
        </label>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          {value}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-300
          [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150
          [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:border-gray-400
          focus:outline-none"
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500">{min}</span>
        <span className="text-xs text-gray-500">{max}</span>
      </div>
    </div>
  );
};

export default RangeInput;
