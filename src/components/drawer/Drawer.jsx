import React from "react";

const Drawer = ({
  isOpen,
  onClose,
  children,
  overlayStyle = "fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm transition-all duration-300",
  drawerStyle = "fixed top-0 left-0 w-80 h-full z-[100] bg-white shadow-2xl transition-all duration-300 transform backdrop-blur-md border-r border-black/10",
  headerStyle = "flex justify-between items-center p-6 border-b border-black/10",
  closeButtonStyle = "p-2 rounded-full hover:bg-black/5 transition-colors duration-200 group",
  closeIconStyle = "w-5 h-5 text-black/50 group-hover:text-black transition-colors duration-200",
  contentStyle = "p-6 overflow-y-auto max-h-[calc(100vh-5rem)]",
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`${overlayStyle} ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`${drawerStyle} ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className={headerStyle}>
          <h2 className="text-xl font-semibold text-black">Menu</h2>
          <button onClick={onClose} className={closeButtonStyle}>
            <svg
              className={closeIconStyle}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={contentStyle}>{children}</div>
      </div>
    </>
  );
};

export default Drawer;
