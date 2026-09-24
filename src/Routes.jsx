import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import ErrorScreen from "./ErrorScreen";
import HomePage from "./HomePage";
import Guide from "./Guide";
import ComponentPage from "./site/ComponentPage";

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
      {
        path: "components/:slug",
        element: <ComponentPage />,
      },
    ],
  },
]);

export default router;
