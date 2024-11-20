import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors duration-200",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

export default Input;
