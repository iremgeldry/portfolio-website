import React from "react";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import cutoutstudio from "../../assets/Cutoutstudio.png";
import resumebuilder from "../../assets/resumebuilder.png";
import "./Projects.scss";
import { useTranslation } from "react-i18next";

function Projects({ isMenuOpen }) {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className={`projects ${!isMenuOpen ? "" : "deactive"}`}>
        <Stack gap={5} className="align-items-center projects-content">
          <Row className="mb-3 header w-100">
            <h1>{t("projects1")}</h1>
            <hr />
          </Row>
          <Row className="single-project w-100">
            <Col md={5} lg={5} xl={5} className="project-img">
              <img
                src={cutoutstudio}
                alt="Cutout Studio"
                className="profilepic"
              />
            </Col>

            <Col md={6} lg={6} xl={6} className=" project-def">
              <h1>{t("projects2")}</h1>
              <p>{t("projects3")}</p>
              <div>
                <a
                  href="https://github.com/iremgeldry/cutout-store"
                  className="me-5"
                  target="_blank"
                >
                  <i className="bi bi-arrow-right me-2"></i>GitHub
                </a>
                <a href="https://studioirem.vercel.app/" target="_blank">
                  <i className="bi bi-arrow-right me-2"></i>Live Demo
                </a>
              </div>
            </Col>
          </Row>
          <Row className="single-project w-100">
            <Col md={5} lg={5} xl={5} className="project-img">
              <img src={resumebuilder} alt="Resume Builder" />
            </Col>

            <Col md={6} lg={6} xl={6} className=" project-def">
              <h1>{t("projects4")}</h1>
              <p>{t("projects5")}</p>
              <div>
                <a
                  href="https://github.com/iremgeldry/resume-builder"
                  target="_blank"
                  className="me-5"
                >
                  <i className="bi bi-arrow-right me-2"></i>GitHub
                </a>
                <a
                  href="https://resume-builder-swart-six.vercel.app/"
                  target="_blank"
                >
                  <i className="bi bi-arrow-right me-2"></i>Live Demo
                </a>
              </div>
            </Col>
          </Row>
        </Stack>
      </Container>
    </>
  );
}

export default Projects;
