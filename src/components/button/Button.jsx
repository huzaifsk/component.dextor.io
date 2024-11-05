import React from "react";

export default function Button({ onClick, text = "Click me" }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-white bg-black rounded hover:bg-gray-700 outline-none"
    >
      {text}
    </button>
  );
}
