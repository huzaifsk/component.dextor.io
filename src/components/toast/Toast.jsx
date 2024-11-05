import React, { useState, useEffect } from "react";

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`mb-4 p-4 rounded-lg shadow-lg flex items-center justify-between min-w-[300px] animate-[slideIn_0.3s_ease-out] ${
            toast.type === "success"
              ? "bg-green-50 text-green-800"
              : toast.type === "error"
                ? "bg-red-50 text-red-800"
                : toast.type === "warning"
                  ? "bg-yellow-50 text-yellow-800"
                  : "bg-blue-50 text-blue-800"
          }`}
          style={{
            animation: toast.isExiting
              ? "slideOut 0.3s ease-in forwards"
              : "slideIn 0.3s ease-out",
          }}
        >
          <p>{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      ))}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slideOut {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

let toastCount = 0;
let addToastCallback = () => {};

const Toast = {
  success: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "success", message });
    }
  },

  error: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "error", message });
    }
  },

  warning: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "warning", message });
    }
  },

  info: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "info", message });
    }
  },
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    addToastCallback = (toast) => {
      setToasts((prev) => [...prev, { ...toast, isExiting: false }]);
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === toast.id ? { ...t, isExiting: true } : t)),
        );
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== toast.id));
        }, 300); // Wait for animation to complete
      }, 2700); // Start exit animation before the 3s mark
    };

    return () => {
      addToastCallback = () => {};
    };
  }, []);

  const removeToast = (id) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, isExiting: true } : toast,
      ),
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  };

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
};

export default Toast;
