import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layout";
import HomePadre from "../pages/padre/homePadre";
import HomeHijo from "../pages/hijo/homeHijo";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/consorcioFuturo" replace /> },
      { path: "/consorcioFuturo", element: <HomePadre /> },
      { path: "/vistaHijo", element: <HomeHijo /> },
      { path: "*", element: <Navigate to="/consorcioFuturo" replace /> },
    ],
  },
]);
