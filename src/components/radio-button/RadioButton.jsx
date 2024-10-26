import React, { useState } from "react";

const RadioButton = ({ options, name, selectedOption, onChange }) => {
  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
            className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-blue-500 checked:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
