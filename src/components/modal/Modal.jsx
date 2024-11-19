import React, { useState } from "react";

// Customizable Modal component with default styling
const Modal = ({
  // Customizable properties
  isOpen = false, // Initial state of the modal
  onOpen = () => {}, // Function to call when modal is opened
  onClose = () => {}, // Function to call when modal is closed
  modalTitle = "Modal Title", // Title of the modal
  modalContent = "This is the content of the modal. You can place any content here.", // Content of the modal
  openModalButton = "Open Modal", // Text on the button to open the modal
  closeModalButton = "Close", // Text on the button to close the modal
  modalStyle = "fixed inset-0 z-50", // Style for the modal container
  overlayStyle = "fixed inset-0 bg-gray-900 bg-opacity-50", // Style for the overlay
  modalContentStyle = "fixed inset-0 flex items-center justify-center pointer-events-none", // Style for the modal content container
  modalInnerStyle = "bg-white rounded-xl shadow-2xl max-w-md w-full p-8 pointer-events-auto", // Style for the modal inner container
  titleStyle = "text-2xl font-bold text-gray-800", // Style for the modal title
  contentStyle = "text-gray-600 leading-relaxed mb-8", // Style for the modal content
  closeButtonStyle = "text-gray-400 hover:text-gray-600 transition-colors duration-200", // Style for the close button
  openButtonStyle = "px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-medium", // Style for the open button
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen); // State to manage the modal's open state

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
    onOpen(); // Call the custom onOpen function
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    onClose(); // Call the custom onClose function
  };

  return (
    <>
      <button onClick={openModal} className={openButtonStyle}>
        {openModalButton}
      </button>

      {modalIsOpen && (
        <div className={modalStyle}>
          <div className={overlayStyle} onClick={closeModal}></div>
          <div className={modalContentStyle}>
            <div className={modalInnerStyle}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={titleStyle}>{modalTitle}</h2>
                <button onClick={closeModal} className={closeButtonStyle}>
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
              <p className={contentStyle}>{modalContent}</p>
              <div className="flex justify-end">
                <button onClick={closeModal} className={openButtonStyle}>
                  {closeModalButton}
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
