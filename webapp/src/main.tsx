import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import PoolList from "./pages/pool";
import Layout from "./layout.tsx";
import CityListsPage from "./pages/lists/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PoolList />,
  },
  {
    path: "/lists",
    element: <CityListsPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);
