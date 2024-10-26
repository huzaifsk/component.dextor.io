import React from "react";

export default function Chips() {
  const chips = [
    { label: "Apple", color: "bg-red-200 text-red-800" },
    { label: "Banana", color: "bg-yellow-200 text-yellow-800" },
    { label: "Cherry", color: "bg-pink-200 text-pink-800" },
    { label: "Blueberry", color: "bg-blue-200 text-blue-800" },
    { label: "Elderberry", color: "bg-purple-200 text-purple-800" },
    { label: "Fig", color: "bg-orange-200 text-orange-800" },
  ];

  const getChipClasses = (color = "") => {
    return `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color}`;
  };

  return (
    <div>
      {chips &&
        chips.map((chip) => {
          return (
            <div key={chip.label} className={getChipClasses(chip.color)}>
              {chip.label}
            </div>
          );
        })}
    </div>
  );
}
