import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import WBtn from "./components/WBtn";
import Modal from "./components/Modal";
import Home from "./Home";
import Bigram from "./Bigram";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="bigram" element={<Bigram/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
