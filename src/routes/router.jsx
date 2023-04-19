import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Tshir from "../pages/Tshir";
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
            path: "/",
            element: <Home></Home>
          },
          {
            path: "/Tshirt",
            element: <Tshir></Tshir>
          },
          {
            path: "/Tshirt",
            element: <Tshir></Tshir>
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
