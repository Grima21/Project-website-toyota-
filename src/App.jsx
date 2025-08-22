// import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Features from "./components/Fectures";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import OffersServices from "./components/OffecersService";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Hero />
      <Models />
      <Features />
      <TestimonialsCarousel />
      <OffersServices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
