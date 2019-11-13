import React from "react";
import Navbar from "./features/Navbar";
import { Home } from "./features/Home";
import './App.css';
import { PortfolioContainer } from "./features/Portfolio/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PortfolioContainer />
    </div>
  );
}

export default App;
