import React, { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./Routes";
import { Analytics } from "@vercel/analytics/react";
import "./styles/globals.css";

// Get the root element safely, with a null check
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure the root div is in the HTML file.",
  );
}

const app = createRoot(rootElement);

const App = () => {
  return <RouterProvider router={router} />;
};

app.render(
  <StrictMode>
    <Suspense fallback={""}>
      <App />
      <Analytics />
    </Suspense>
  </StrictMode>,
);

export default App;
