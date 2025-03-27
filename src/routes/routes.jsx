import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATHS } from "./routerPaths";
import { Home } from "@/pages/Home";
import { Layout } from "@/layouts/Layout";
import { Category } from "@/pages/Category";
import { NotFound } from "@/pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Home />,
      },
      {
        path: ROUTER_PATHS.category,
        element: <Category />,
      },
      {
        path: ROUTER_PATHS.categoryDetail,
        element: <Category />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
