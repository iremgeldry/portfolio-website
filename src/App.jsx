import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

// Bootstrap CSS and Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min";

// Your custom CSS/SCSS
import "../sass/styles.scss";
import "./App.scss";

// Components
import Navigationbar from "./Components/Navbar/Navigationbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Container fluid className="p-0 m-0">
        <Navigationbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Container fluid className="page-content">
          <Routes>
            <Route path="/" element={<Home isMenuOpen={isMenuOpen} />} />
            <Route path="/about" element={<About isMenuOpen={isMenuOpen} />} />
            <Route
              path="/projects"
              element={<Projects isMenuOpen={isMenuOpen} />}
            />
            <Route
              path="/contact"
              element={<Contact isMenuOpen={isMenuOpen} />}
            />
            {/*
          <Route
            path="/resume"
            element={<Resume/>}
          />

           */}
          </Routes>
        </Container>
        {/* <Footer /> */}
        <div className="noise"></div>
        <div className="cursor"></div>
      </Container>
    </>
  );
}

export default App;

// animate__animated animate__fadeIn
