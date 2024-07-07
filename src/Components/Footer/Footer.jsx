import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <Container className="p-5">
        <footer className="justify-content-between w-100">
          <section className="footer-top mt-5">
            <div className="row">
              <div className="col-4 col-md-2 mb-3">
                <h5>Helpful Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 ">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 ">
                      About
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 ">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 ">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 ">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-4 col-md-2 mb-3">
                <h5>Connect</h5>
                <ul className="nav flex-column">
                  <div className="d-flex">
                    <li className="nav-item mb-2">
                      <a
                        href="https://www.linkedin.com/in/elifiremgeldry/"
                        className="nav-link p-0 "
                      >
                        Linkedin
                      </a>
                    </li>
                    <a
                      href="https://www.linkedin.com/in/elifiremgeldry/"
                      className="col"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <div className="d-flex">
                    <li className="nav-item mb-2">
                      <a
                        href="https://github.com/iremgeldry"
                        className="nav-link p-0 "
                      >
                        Github
                      </a>
                    </li>
                    <a href="https://github.com/iremgeldry" className="col">
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </section>

          <section className="footer-bottom">
            <div className="d-flex flex-column flex-sm-row justify-content-between">
              <h2>&copy; 2024 Irem Geldry</h2>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlink:href="#twitter" />
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlink:href="#instagram" />
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlink:href="#facebook" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
