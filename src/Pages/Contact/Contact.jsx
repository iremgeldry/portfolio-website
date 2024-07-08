import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import "./Contact.scss";
import hand from "../../assets/hand.png";
import { useTranslation } from "react-i18next";

function Contact({ isMenuOpen }) {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className={`contact ${!isMenuOpen ? "" : "deactive"}`}>
        <img src={hand} alt="Hand" className="hand" />
        <Stack className="align-items-center contact-content">
          <Row className="header w-100">
            <h1>{t("contact1")}</h1>
            <hr />
          </Row>
          <Row className="w-100 contact-info">
            <Col className="d-flex flex-row p-0">
              <h4 className="me-5">MAIL</h4>
              <p className="email">
                <i class="bi bi-arrow-up-right"></i> iremcmm@gmail.com
              </p>
            </Col>
            <Col className="d-flex flex-row p-0">
              <h4 className="me-5">SOCIAL MEDIA</h4>
              <div>
                <li className="mb-2">
                  <a
                    href="https://www.linkedin.com/in/elifiremgeldry/"
                    className="nav-link"
                    target="_blank"
                  >
                    <i class="bi bi-arrow-up-right"></i> Linkedin
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/iremgeldry"
                    className="nav-link"
                    target="_blank"
                  >
                    <i class="bi bi-arrow-up-right"></i> Github
                  </a>
                </li>
              </div>
            </Col>
          </Row>
        </Stack>
      </Container>
    </>
  );
}

export default Contact;
