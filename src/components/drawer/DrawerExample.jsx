import React, { useState } from "react";
import Drawer from "./Drawer";

export default function DrawerExample() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="px-4 py-2 bg-black text-white rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg border border-black"
        onClick={toggleDrawer}
      >
        Open Drawer
      </button>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="block p-3 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300 relative group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-black scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-5 rounded-lg transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300 relative group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-black scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-5 rounded-lg transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300 relative group"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute inset-0 bg-black scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-5 rounded-lg transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300 relative group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-black scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-5 rounded-lg transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
