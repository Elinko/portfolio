import React from "react";
import { Link } from "react-scroll";
import { scrollDuration } from "../../../config/commonConfig";

const StandardMenuDefaultIntro = () => {
  return (
    <section
      id="home"
      className="bg-primary d-flex position-relative"
    >
      <div className="container my-auto pb-5 py-lg-0">
        <div className="row py-4">
          <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0">
            <p className="text-4 fw-600 text-uppercase mb-2">Patrik Eliáš</p>
            <h1 className="text-11 fw-600 mb-3">Webové aplikácie na mieru</h1>
            <p className="text-4 mb-1">
              Programujem ich od návrhu po nasadenie. Od prezentácie cez
              rezervácie až po administráciu.
            </p>
            <Link
              className="btn btn-dark rounded-0 smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="portfolio"
            >
              Moja práca
            </Link>
            <Link
              className="btn btn-link text-dark smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="contact"
            >
              Kontaktujte ma
              <span className="text-4 ms-2">
                <i className="far fa-arrow-alt-circle-down" />
              </span>
            </Link>
          </div>
          <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
            <div className="bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
              <img
                className="img-fluid rounded-pill d-block"
                src="images/web-developer.jpg"
                title="I'm Patrik"
                alt="I'm Patrik"
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        className="scroll-down-arrow text-dark smooth-scroll"
        smooth="easeInOutQuint"
        duration={scrollDuration}
        style={{ cursor: "pointer" }}
        to="about"
      >
        <span className="animated">
          <i className="fas fa-arrow-down" />
        </span>
      </Link>
    </section>
  );
};

export default StandardMenuDefaultIntro;
