import React, { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Get the root element safely, with a null check
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure the root div is in the HTML file.",
  );
}

const app = createRoot(rootElement);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

app.render(
  <StrictMode>
    <Suspense fallback={""}>
      <App />
    </Suspense>
  </StrictMode>,
);

export default App;
