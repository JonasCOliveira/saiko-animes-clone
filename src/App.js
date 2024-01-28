import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Calendario from "./Pages/Calendario";
import Detalhes from "./Pages/Detalhes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="home" />
        <Route element={<Calendario/>} path="calendario" />
        <Route element={<Detalhes/>} path="anime" />
      </Routes>
    </BrowserRouter>
  );
}
