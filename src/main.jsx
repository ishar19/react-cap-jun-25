import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Widgets from "./pages/widgets.jsx";
import Movies from "./pages/movies.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Login />} path="/login" />
        <Route element={<Home />} path="/" />
        <Route element={<Widgets />} path="/widgets" />
        <Route element={<Movies />} path="/movies" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

// try using BrowserRouter and Routes twice, BR will give error and Routes won't
