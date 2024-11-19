import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import ErrorScreen from "./ErrorScreen";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
