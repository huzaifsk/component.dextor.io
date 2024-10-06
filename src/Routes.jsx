import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import ErrorScreen from "./ErrorScreen";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <h1>Home Page</h1>,
      },
    ],
  },
]);

export default router;
