import React from "react";

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-4 py-2 border rounded-lg focus:outline-[bg-gradient-to-r from-violet-600 to-indigo-600] focus:ring-2 focus:ring-indigo-500"
      {...props}
    />
  );
};
