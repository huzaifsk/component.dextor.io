import React, {StrictMode, Suspense} from "react";
import {RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import router from "./Routes";

const app = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

app.render(
  <StrictMode>
    <Suspense fallback={"Test"}>
      <App />
    </Suspense>
  </StrictMode>
);

export default App;
