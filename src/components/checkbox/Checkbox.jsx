import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:rounded-lg rounded-lg"
      />
      <span className="text-gray-800">{label}</span>
    </label>
  );
};

export default Checkbox;
