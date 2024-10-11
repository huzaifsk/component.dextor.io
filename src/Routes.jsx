import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import ErrorScreen from "./ErrorScreen";
import UiLivePreview from "./UiLivePreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <UiLivePreview />,
      },
    ],
  },
]);

export default router;
