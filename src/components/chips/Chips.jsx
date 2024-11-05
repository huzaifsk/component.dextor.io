import React from "react";

export default function Chips() {
  const chips = [
    {
      label: "Apple",
      color: "bg-red-100 hover:bg-red-200 text-red-800",
      icon: "🍎",
    },
    {
      label: "Banana",
      color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-800",
      icon: "🍌",
    },
    {
      label: "Cherry",
      color: "bg-pink-100 hover:bg-pink-200 text-pink-800",
      icon: "🍒",
    },
    {
      label: "Blueberry",
      color: "bg-blue-100 hover:bg-blue-200 text-blue-800",
      icon: "🫐",
    },
    {
      label: "Elderberry",
      color: "bg-purple-100 hover:bg-purple-200 text-purple-800",
      icon: "🫐",
    },
    {
      label: "Fig",
      color: "bg-orange-100 hover:bg-orange-200 text-orange-800",
      icon: "🪴",
    },
  ];

  const getChipClasses = (color = "") => {
    return `inline-flex items-center gap-2 px-4 py-2 m-1 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md ${color}`;
  };

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {chips &&
        chips.map((chip) => {
          return (
            <div
              key={chip.label}
              className={getChipClasses(chip.color)}
              onClick={() => console.log(`Clicked ${chip.label}`)}
            >
              <span className="text-base">{chip.icon}</span>
              {chip.label}
            </div>
          );
        })}
    </div>
  );
}
