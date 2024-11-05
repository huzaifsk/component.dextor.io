import React from "react";
import Toast, { ToastProvider } from "./Toast";

function ToastExample() {
  const showSuccessToast = () => {
    Toast.success("Success! Operation completed successfully.");
  };

  const showErrorToast = () => {
    Toast.error("Error! Something went wrong.");
  };

  const showInfoToast = () => {
    Toast.info("Info: Here's some useful information.");
  };

  const showWarningToast = () => {
    Toast.warning("Warning: Please proceed with caution.");
  };

  return (
    <ToastProvider>
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <button
          onClick={showSuccessToast}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors w-48"
        >
          Show Success Toast
        </button>

        <button
          onClick={showErrorToast}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors w-48"
        >
          Show Error Toast
        </button>

        <button
          onClick={showInfoToast}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-48"
        >
          Show Info Toast
        </button>

        <button
          onClick={showWarningToast}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors w-48"
        >
          Show Warning Toast
        </button>
      </div>
    </ToastProvider>
  );
}

export default ToastExample;
