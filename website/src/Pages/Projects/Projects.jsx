import React from "react";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import cutoutstudio from "../../assets/Cutoutstudio.png";
import resumebuilder from "../../assets/resumebuilder.png";
import "./Projects.scss";
function Projects({ isMenuOpen }) {
  return (
    <>

      <Container fluid className={`projects ${!isMenuOpen ? "" : "deactive"}`}>
        <Stack gap={5} className="align-items-center projects-content">
          <Row className="mb-3 header w-100">
            <h1>PROJECTS</h1>
            <hr />
          </Row>
          <Row className="single-project w-100">
            <Col md={5} lg={5} xl={5} className="project-img">
              <img src={cutoutstudio} alt="Cutout Studio" className="profilepic" />
            </Col>

            <Col md={6} lg={6} xl={6} className=" project-def">
              <h1>Cutout Studio</h1>
              <p>
                Discover an exquisite collection of high-quality cutouts, flat
                vectors, textures, and patterns designed to elevate your
                projects to new heights. Whether you're an architect, designer,
                or creative professional, StudioIrem offers a diverse range of
                digital assets tailored to meet your unique design needs. Our
                meticulously curated library ensures you have the perfect
                resources to bring your visions to life with ease and elegance.
                Explore, create, and inspire with StudioIrem – your ultimate
                destination for premium design assets.
              </p>
              <div><a href="/about" className="me-5">
                <i className="bi bi-arrow-right me-2"></i>GitHub
              </a>
                <a href="/about">
                  <i className="bi bi-arrow-right me-2"></i>Live Demo
                </a></div>
            </Col>
          </Row>
          <Row className="single-project w-100">
            <Col md={5} lg={5} xl={5} className="project-img">
              <img src={resumebuilder} alt="Resume Builder" />
            </Col>

            <Col md={6} lg={6} xl={6} className=" project-def">
              <h1>Resume Builder</h1>
              <p>
                Discover an exquisite collection of high-quality cutouts, flat
                vectors, textures, and patterns designed to elevate your
                projects to new heights. Whether you're an architect, designer,
                or creative professional, StudioIrem offers a diverse range of
                digital assets tailored to meet your unique design needs. Our
                meticulously curated library ensures you have the perfect
                resources to bring your visions to life with ease and elegance.
                Explore, create, and inspire with StudioIrem – your ultimate
                destination for premium design assets.
              </p>
              <div><a href="https://github.com/iremgeldry/resume-builder" target="_blank" className="me-5">
                <i className="bi bi-arrow-right me-2"></i>GitHub
              </a>
                <a href="https://resume-builder-swart-six.vercel.app/" target="_blank">
                  <i className="bi bi-arrow-right me-2"></i>Live Demo
                </a></div>
            </Col>
          </Row>
        </Stack>
      </Container>

    </>
  );
}

export default Projects;
