import React from "react";

export default function Chips({ onClose }) {
  const chips = [
    { label: "Apple", color: "bg-red-200 text-red-800" },
    { label: "Banana", color: "bg-yellow-200 text-yellow-800" },
    { label: "Cherry", color: "bg-pink-200 text-pink-800" },
    { label: "Blueberry", color: "bg-blue-200 text-blue-800" },
    { label: "Elderberry", color: "bg-purple-200 text-purple-800" },
    { label: "Fig", color: "bg-orange-200 text-orange-800" },
  ];

  const getChipClasses = (color) => {
    return `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color}`;
  };

  return (
    <div>
      {chips &&
        chips.map((chip) => {
          return (
            <div key={chip.label} className={getChipClasses(chip.color)}>
              {chip.label}
              {onClose && (
                <button
                  onClick={onClose}
                  className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={"currentColor"} // can change the color of the svg
                    className="icon icon-tabler icons-tabler-filled icon-tabler-circle-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
                  </svg>
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
}
