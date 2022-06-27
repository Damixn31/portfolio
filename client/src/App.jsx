import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import PagInicio from "./components/pagInicio/PagInicio";

function App() {
  return (
    <Routes>
      <Route exact path="/portfolio" element={<PagInicio />} />

      <Route exact path="/portfolio/home" element={<Home />} />
    </Routes>
  );
}

export default App;
