import React, { useState, useEffect } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show button initially
    setIsVisible(true);

    const handleScroll = () => {
      // Get the sidebar component's position
      const sidebarElement = document.getElementById("sidebar-component");
      if (sidebarElement) {
        const rect = sidebarElement.getBoundingClientRect();
        const buffer = 100; // Add buffer zone for smoother transition

        // Check if component is in viewport with buffer
        const isInViewport =
          rect.top >= -buffer && rect.bottom <= window.innerHeight + buffer;

        setIsVisible(isInViewport);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common navigation items
  const navItems = [
    {
      name: "Dashboard",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
    {
      name: "Settings",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
    },
    {
      name: "Profile",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
    {
      name: "Logout",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      ),
    },
  ];

  const NavLink = ({ name, icon }) => (
    <a
      href="#"
      className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-black hover:text-white transition-all duration-200 group"
    >
      <svg
        className="w-5 h-5 mr-3 group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
      {name}
    </a>
  );

  return (
    //change the height to screen and remove the padding
    <div id="sidebar-component" className="flex h-full bg-gray-50 py-5">
      {" "}
      {/* Mobile Button */}
      {isVisible && (
        <button
          className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-black shadow-lg text-white lg:hidden hover:bg-gray-800 hover:text-white transition-all duration-200 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-left-expand"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-left-expand"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
            </svg>
          )}
        </button>
      )}
      {/* Mobile Sidebar */}
      <div
        className={`fixed lg:hidden inset-y-0 left-0 z-30 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-black">Mobile Menu</h1>
        </div>
        <nav className="flex-grow px-6 py-8 space-y-4 overflow-y-auto">
          {navItems.map((item, index) => (
            <NavLink key={index} {...item} />
          ))}
        </nav>
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-72 bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-black">Desktop Menu</h1>
        </div>
        <nav className="flex-grow px-6 py-8 space-y-4 overflow-y-auto">
          {navItems.map((item, index) => (
            <NavLink key={index} {...item} />
          ))}
        </nav>
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Main Content */}
      <div className="lg:hidden">
        <div className="flex-1 h-ful">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mt-16 lg:mt-0">
              Click the icon on top left to open the sidebar
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex-1">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mt-16 lg:mt-0">
              Welcome to the Dashboard
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the main content area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
