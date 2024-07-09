import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Navigationbar.scss";

const Navigationbar = ({ toggleMenu, isMenuOpen }) => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "EN" },
    { code: "de", name: "DE" },
  ];

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
            {languages.map((language) => (
              <Button
                className="language-switch"
                onClick={() => {
                  i18n.changeLanguage(language.code);
                }}
                key={language.code}
              >
                {language.name}
              </Button>
            ))}

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
        <div className="menu-wrapper">
          <ol className="nav-list">
            <li className=" nav-item">
              <a href="/" className="nav-link">
                {t("HOME")}
              </a>
            </li>
            <li className=" nav-item">
              <a href="/about" className="nav-link">
                {t("ABOUT")}
              </a>
            </li>
            <li className=" nav-item">
              <a href="/projects" className="nav-link">
                {t("PROJECTS")}
              </a>
            </li>
            <li className=" nav-item">
              <a href="/contact" className="nav-link">
                {t("CONTACT")}
              </a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;

// {languages.map((language) => (
//   <Button
//     className="language-switch"
//     onClick={() => {
//       i18n.changeLanguage(language.code);
//     }}
//     key={language.code}
//   >
//     {language.name == "EN" ?  "DE" : "EN"}
//   </Button>
// ))}
