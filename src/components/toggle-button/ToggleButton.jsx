import React, { useState } from "react";

const ToggleButton = ({ initialState = false, onToggle, label }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <div className="inline-flex items-center gap-3">
      {label && <span className="text-gray-700 font-medium">{label}</span>}
      <button
        onClick={handleToggle}
        className={`relative flex items-center justify-between w-14 h-7 rounded-full p-1 transition-all duration-300 ease-in-out ${
          isOn ? "bg-black hover:bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isOn ? "focus:ring-black" : "focus:ring-gray-400"
        }`}
        aria-pressed={isOn}
        role="switch"
      >
        <span className="sr-only">{label || "Toggle"}</span>
        <span
          className={`absolute w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOn ? "translate-x-7" : "translate-x-0"
          } hover:scale-110`}
        ></span>
        <span
          className={`ml-1 text-xs font-medium ${isOn ? "opacity-0" : "text-gray-500"}`}
        >
          Off
        </span>
        <span
          className={`mr-1 text-xs font-medium ${isOn ? "text-white" : "opacity-0"}`}
        >
          On
        </span>
      </button>
    </div>
  );
};

export default ToggleButton;
