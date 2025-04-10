import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATHS } from "./routerPaths";
import { Home } from "@/pages/Home";
import { Layout } from "@/layouts/Layout";
import { Category } from "@/pages/Category";
import { NotFound } from "@/pages/NotFound";
import { ProductDetail } from "@/pages/ProductDetail";
import { Search } from "@/pages/Search";
import { Cart } from "@/pages/Cart";
import { Favorites } from "@/pages/Favorites";
import { About } from "@/pages/About";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { Contacts } from "@/pages/Contacts";
import { Vacancies } from "@/pages/Vacancies";
import ArticleDetail from "@/pages/ArticleDetail/ArticleDetail";
import { Orders } from "@/pages/Orders";

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
      {
        path: ROUTER_PATHS.product,
        element: <ProductDetail />,
      },
      {
        path: ROUTER_PATHS.search,
        element: <Search />,
      },
      {
        path: ROUTER_PATHS.cart,
        element: <Cart />,
      },
      {
        path: ROUTER_PATHS.favorites,
        element: <Favorites />,
      },
      {
        path: ROUTER_PATHS.about,
        element: <About />,
      },
      {
        path: ROUTER_PATHS.contacts,
        element: <Contacts />,
      },
      {
        path: ROUTER_PATHS.jobs,
        element: <Vacancies />,
      },
      {
        path: ROUTER_PATHS.article,
        element: <ArticleDetail />,
      },
      {
        path: ROUTER_PATHS.privacyPolicy,
        element: <PrivacyPolicy />,
      },
      {
        path: ROUTER_PATHS.orders,
        element: <Orders />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
