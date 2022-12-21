import React from "react";
import {
  Blog,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Features,
} from "./components/containers";
import { Brand, CTA, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
