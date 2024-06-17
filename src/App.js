import React from "react";
import { Routes, Route } from "react-router-dom";

import Homenew from "./Homenew";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homenew />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
