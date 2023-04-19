import React from "react";
import { createBrowserRouter } from "react-router-dom";
//PÁGINAS
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Tshir from "../pages/Tshir";
// COMPONENTE BASE
import Layout from "../layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        errorElement: <NotFound></NotFound>,
        children: [
          {
            path: "/kly",
            element: <Home></Home>
          },
          {
            path: "/Tshirt",
            element: <Tshir></Tshir>
          }
        ]
      }
    ]
  }
]);

export default router;
