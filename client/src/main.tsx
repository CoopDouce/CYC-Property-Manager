import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from './App';
import "./index.css";
import Default from "./pages/Default/Default";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Default />
            },
        ],
    },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
  } else {
    console.error("Root element not found");
  }