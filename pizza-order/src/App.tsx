import React, { Suspense } from "react";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
const DetailProductPage = React.lazy(() => import("./pages/DetailProductPage"));
const CreateProductPage = React.lazy(() => import("./pages/CreateProductPage"));

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/create-product",
        element: <CreateProductPage />,
      },
      {
        path: "/product/:id",
        element: <DetailProductPage />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes,
  },
]);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
