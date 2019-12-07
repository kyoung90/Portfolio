import React from "react";
import Navbar from "./features/Navbar";
import { Home } from "./features/Home";
import "./App.css";
import { PortfolioContainer } from "./features/Portfolio/PortfolioContainer";
import { BlogsContainer } from "./features/Blogs/BlogsContainer";
import { Footer } from "./features/Footer";
import { TestimonialContainer } from "./features/Testimonials/TestimonialContainer";
import { About } from "./features/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <PortfolioContainer id="portfolio" />
      <BlogsContainer />
      <TestimonialContainer />
      <Footer />
    </div>
  );
}

export default App;
