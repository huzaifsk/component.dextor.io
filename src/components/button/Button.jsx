import React from "react";

export default function Button({
  onClick,
  text = "Click me",
  className = "px-4 py-2 text-white bg-black rounded hover:bg-gray-700 outline-none",
}) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
