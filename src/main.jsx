import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error";
import { UserProvider } from "./context/UserContext";
import "./index.css";
import AuthLayout from "./layouts/Auth";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Volcano from "./pages/Volcano";
import Volcanoes from "./pages/Volcanoes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/volcanoes", element: <Volcanoes /> },
      { path: "/volcano/:volcanoId", element: <Volcano /> },
      {
        path: "/auth",
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/auth/login", element: <Login /> },
          { path: "/auth/register", element: <Register /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
