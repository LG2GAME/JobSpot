import { createBrowserRouter } from "react-router-dom";
import { Layout, ErrorLayout } from "@components/layout";
import { Home, NotFound } from "@pages/index";
import UnderConstruction from "@pages/underConstruction/UnderConstruction";

export const plannedRoutes = [
  "/career",
  "/blog",
  "/about-us",
  "/account",
  "/terms",
  "/privacy-policy",
  "/cookies",
];

export const router = createBrowserRouter([
  {
    element: <ErrorLayout />,
    children: [{ path: "*", element: <NotFound /> }],
  },
  ...plannedRoutes.map((path) => ({
    element: <ErrorLayout />,
    children: [{ path: path, element: <UnderConstruction /> }],
  })),
  {
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
