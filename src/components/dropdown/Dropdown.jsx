import React, { useState } from "react";

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  buttonStyle = "w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black",
  buttonTextStyle = "block truncate text-gray-500",
  buttonArrowStyle = "w-5 h-5 text-gray-400 transition-transform duration-200",
  listStyle = "absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto",
  listItemStyle = "px-4 py-2 text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors duration-150 ease-in-out",
  listTextStyle = "text-gray-900",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={buttonStyle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={`${buttonTextStyle} ${!value ? "text-gray-500" : "text-gray-900"}`}
        >
          {value ? value.label : placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={`${buttonArrowStyle} ${isOpen ? "transform rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className={listStyle}>
          <ul className="py-1" role="listbox">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={listItemStyle}
                role="option"
                aria-selected={value?.value === option.value}
              >
                <span className={listTextStyle}>{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
