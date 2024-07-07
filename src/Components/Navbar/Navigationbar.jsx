import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Navigationbar.scss";

const Navigationbar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <>
      <Navbar className="custom-navbar">
        <Container fluid className="p-0 m-0">
          <div className="left-part">
            <Navbar.Brand href="/" className="navbar-brand">
              Irem Geldry
            </Navbar.Brand>
          </div>
          <div className="right-part">
            {/* <Button className="language-switch">DE</Button> */}
            <div
              className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </Container>
      </Navbar>
      <div className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ol className="nav-list">
          <li className=" nav-item">
            <a href="/" className="nav-link">
              HOME
            </a>
          </li>
          <li className=" nav-item">
            <a href="/about" className="nav-link">
              ABOUT
            </a>
          </li>
          <li className=" nav-item">
            <a href="/projects" className="nav-link">
              PROJECTS
            </a>
          </li>
          <li className=" nav-item">
            <a href="/contact" className="nav-link">
              CONTACT
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Navigationbar;
