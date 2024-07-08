import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Home.scss";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function Home({ isMenuOpen }) {
  const { t } = useTranslation();
  return (
    <Container fluid className={`home ${!isMenuOpen ? "" : "deactive"}`}>
      <Row className="intro-wrapper">
        <div className="intro-text">
          <h1 className="display-1 fw-bold">
            <Trans i18nKey="greeting">
              Hey, I`m Irem.
              <br />
              Frontend Developer.
            </Trans>
          </h1>
          <h6 className="fst-italic">{t("greeting2")}</h6>
          <p>{t("greeting3")}</p>
        </div>
        <a href="/about">
          <i className="bi bi-arrow-right me-2"></i>
          {t("greeting4")}
        </a>
      </Row>
    </Container>
  );
}

export default Home;
