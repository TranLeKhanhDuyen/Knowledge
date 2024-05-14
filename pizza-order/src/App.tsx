import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CreateProductPage from "./pages/CreateProductPage";
import DetailProductPage from "./pages/DetailProductPage";

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
  return <RouterProvider router={router} />;
}

export default App;
