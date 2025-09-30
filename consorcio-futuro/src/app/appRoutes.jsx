import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layout";
import HomePadre from "../pages/padre/homePadre";
import HomeHijo from "../pages/hijo/homeHijo";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    // (opcional) un componente para manejar errores del router
    // errorElement: <div style={{padding:16}}>Ups, no encontramos esa página.</div>,
    children: [
      // 👉 si entras a "/", redirige a /consorcioFuturo
      { index: true, element: <Navigate to="/consorcioFuturo" replace /> },
      { path: "/consorcioFuturo", element: <HomePadre /> },
      { path: "/vistaHijo", element: <HomeHijo /> },
      // (opcional) 404 amigable para rutas desconocidas
      { path: "*", element: <Navigate to="/consorcioFuturo" replace /> },
    ],
  },
]);
