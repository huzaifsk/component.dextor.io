import React, { useState } from "react";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
