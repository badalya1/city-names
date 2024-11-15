import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import "./index.css";
import PoolList from "./pages/pool";
import Layout from "./layout.tsx";
import CityListsPage from "./pages/lists/index.tsx";
import CityListPage from "./pages/list/index.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <PoolList />,
        },
        {
          path: "/lists",
          element: <CityListsPage />,
        },
        {
          path: "/list/:id",
          element: <CityListPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
