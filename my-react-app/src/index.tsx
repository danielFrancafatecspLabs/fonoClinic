import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

// Defina as rotas do seu app
const routes = [
  {
    path: "/",
    element: <App />, // Aqui seu App será o container de todas as seções
  },
];

// Crie o router com as future flags
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  } as any, // <-- força o TS aceitar
});

// Renderize
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);