import React from "react";

export default function Button() {
  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
      >
        Button Text
      </button>
    </div>
  );
}
