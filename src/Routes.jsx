import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import ErrorScreen from "./ErrorScreen";
import HomePage from "./HomePage";
import Guide from "./Guide";

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
      {
        path: "guide",
        element: <Guide />,
      },
    ],
  },
]);

export default router;
