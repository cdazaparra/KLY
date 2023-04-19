import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// creación del router
import router from "./routes/router";
//Styles
import "./index.css";
import "./index.sass";
//Provider
import LanguajeProvider from "./providers/LanguajeProvider";
import InteractionProvider from "./providers/InteractionProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InteractionProvider>
      <LanguajeProvider>
        <RouterProvider router={router}></RouterProvider>
      </LanguajeProvider>
    </InteractionProvider>
  </React.StrictMode>
);
