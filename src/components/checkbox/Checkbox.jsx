import React from "react";

const Checkbox = ({
  options = [],
  selectedOptions = [],
  onChange,
  containerStyle = "flex flex-col space-y-3",
  labelStyle = "flex items-center space-x-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200",
  inputStyle = "peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:border-black checked:bg-black outline-none transition-all duration-200",
  svgStyle = "absolute w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none",
  labelTextStyle = "text-gray-700 font-medium select-none group-hover:text-gray-900 transition-colors duration-200 text-sm",
}) => {
  const handleChange = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(newSelectedOptions);
  };

  return (
    <div className={containerStyle}>
      {options.map((option) => (
        <label key={option.value} className={labelStyle}>
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className={inputStyle}
            />
            <svg
              className={svgStyle}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 4L6.00008 11.3333L2.66675 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className={labelTextStyle}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
