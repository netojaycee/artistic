import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Project from "./Project.tsx";
import Design from "./Design.tsx";
import Contact from "./Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
>>>>>>> 55fd8696ffc7fca921fdb5f1836b374b74af661e

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
