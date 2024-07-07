import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import cv from "../../assets/CV.pdf";
import photo from "../../assets/profilephoto.jpg";
import "./About.scss";


function About({ isMenuOpen }) {
  return (
    <>
      <Container fluid className={`about ${!isMenuOpen ? "" : "deactive"}`}>
        <Stack className="align-items-center about-content">
          <Row className="mb-3 header w-100">
            <h1>ABOUT</h1>
            <hr />
          </Row>
          <Row className="about-profile w-100">
            <Col  md={5}  lg={5} xl={4} className="profile-left">
              <img src={photo} alt="profilepic" className="profilepic" />
            </Col>

            <Col  md={6} lg={6} xl={7} className=" profile-right">
                <p>
                  Hello,
                  <br />
                  I'm Irem, a former architect turned passionate web developer.
                  My journey began with a deep appreciation for design and
                  structure cultivated during my years as an architect.
                  This background honed my eye for detail, sense of aesthetics, and problem-solving skills.
                  Transitioning to web development, I've brought a unique perspective, blending architectural principles with modern web practices to create user-friendly and efficient solutions. I'm always learning and eager for new challenges, excited to contribute my diverse skills to a collaborative and innovative team.

Thank you for visiting my website. Explore my projects and feel free to get in touch!
                </p>
                <a href={cv} target="_blank" rel="noreferrer">
                  <i className="bi bi-arrow-down"></i>resume
                </a>
            </Col>
          </Row>
        </Stack>
      </Container>
    </>
  );
}

export default About;
