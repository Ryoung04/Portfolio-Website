
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 antialiased min-h-screen">
        <NavBar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
