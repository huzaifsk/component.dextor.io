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
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={toggleDrawer}
      >
        Open Drawer
      </button>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
