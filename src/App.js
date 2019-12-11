import React from "react";
import Navbar from "./features/Navbar";
import { Home } from "./features/Home";
import "./App.css";
import { PortfolioContainer } from "./features/Portfolio/PortfolioContainer";
import { BlogsContainer } from "./features/Blogs/BlogsContainer";
import { Footer } from "./features/Footer";
import { TestimonialContainer } from "./features/Testimonials/TestimonialContainer";
import { About } from "./features/About/About";
import { Contact } from "./features/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <PortfolioContainer id="portfolio" />
      <BlogsContainer />
      <TestimonialContainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
