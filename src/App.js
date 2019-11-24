import React from "react";
import Navbar from "./features/Navbar";
import { Home } from "./features/Home";
import "./App.css";
import { PortfolioContainer } from "./features/Portfolio/PortfolioContainer";
import { BlogsContainer } from "./features/Blogs/BlogsContainer";
import { Footer } from "./features/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PortfolioContainer id="portfolio" />
      <BlogsContainer />
      <Footer />
    </div>
  );
}

export default App;
