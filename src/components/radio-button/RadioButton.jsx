import React, { useState } from "react";

const RadioButton = ({ options, name, selectedOption, onChange }) => {
  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center space-x-4 cursor-pointer group hover:bg-gray-50/50 p-3 rounded-xl transition-all duration-300 backdrop-blur-sm relative"
        >
          <div className="relative">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => onChange(option.value)}
              className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-black checked:border-[6px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 hover:border-gray-600"
            />
            <div className="absolute inset-0 bg-gray-100 scale-0 rounded-full transition-transform duration-300 group-hover:scale-150 opacity-0 group-hover:opacity-30" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium group-hover:text-black transition-colors duration-300">
              {option.label}
            </span>
            {option.description && (
              <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                {option.description}
              </span>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
