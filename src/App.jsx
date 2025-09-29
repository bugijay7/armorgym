import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
