import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-medium"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 pointer-events-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Modal Title
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
              <p className="text-gray-600 leading-relaxed mb-8">
                This is the content of the modal. You can place any content
                here.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
