import React from "react";
import Navbar from "./features/Navbar";
import { Home } from "./features/Home";
import "./App.css";
import { PortfolioContainer } from "./features/Portfolio/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PortfolioContainer id="portfolio" />
    </div>
  );
}

export default App;
