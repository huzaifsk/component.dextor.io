import React, { useState } from "react";

const ToggleButton = ({ initialState = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center justify-between w-16 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out ${
        isOn ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
