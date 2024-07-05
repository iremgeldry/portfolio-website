import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Home.scss";

function Home({ isMenuOpen }) {
  return (
    <Container fluid className={`home ${!isMenuOpen ? "" : "deactive"}`}>
      <Row className="intro-wrapper">
        {/* <img src={pphead} alt="" /> */}
        <div className="intro-text">
          <h1 className="display-1 fw-bold">
            Hey, I`m Irem.
            <br />
            Frontend Developer.
          </h1>
          <h6 className="fst-italic">and a former architect</h6>
          <p>
            I am dedicated to creating intuitive, responsive, and visually
            appealing web applications.
          </p>
        </div>
        <a href="/about">
          <i className="bi bi-arrow-right me-2"></i>about me
        </a>
      </Row>
    </Container>
  );
}

export default Home;
