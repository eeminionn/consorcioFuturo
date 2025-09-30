import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePadre from "../pages/Padre/HomePadre";
import HomeHijo from "../pages/Hijo/HomeHijo";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePadre /> },       // landing: vista padre
      { path: "/hijo", element: <HomeHijo /> },    // vista niño
    ],
  },
]);
