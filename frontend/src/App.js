import React from "react";
import Home from "./Home";
import Bigram from "./Bigram";
import Clustering from "./Clustering";
import Frequent from "./Frequent";
import Sentiment from "./Sentiment";
import Thematic from "./Thematic";
import Testing from "./Testing";
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
          <Route path="clustering" element={<Clustering/>} />
          <Route path="frequent" element={<Frequent/>} />
          <Route path="sentiment" element={<Sentiment/>} />
          <Route path="thematic" element={<Thematic/>} />
          <Route path="testing" element={<Testing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
