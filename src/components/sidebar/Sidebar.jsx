import React from "react";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex h-screen">
      {/* Mobile Button */}
      <button
        className="p-4 bg-gray-800 text-white lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Open"} Sidebar
      </button>
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-full bg-gray-800 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <h1 className="text-xl font-bold">My Sidebar</h1>
        </div>
        <nav className="flex-grow px-4 py-2">
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Logout
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
        <p className="mt-4">This is the main content area.</p>
      </div>
    </div>
  );
}
