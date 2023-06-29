import React, { useState } from "react";
import { Link } from "react-scroll";
import { scrollDuration } from "../../../config/commonConfig";
import { Tooltip } from "../../Tooltip";

const StandardMenuHeader = () => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg text-uppercase navbar-line-under-text fw-600">
        <div className="container position-relative">
          <div className="col-auto col-lg-2 d-inline-flex ps-lg-0">
            {/* Logo */}
            <Link
              className="logo"
              title="Elias"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              offset={-72}
              to="home"
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true);
              }}
            >
              ELIAS
            </Link>
            {/* Logo End */}
          </div>
          <div className="col col-lg-8 navbar-accordion px-0">
            <button
              className={
                "navbar-toggler ms-auto collapsed " +
                (isNavModalClose ? "" : "show")
              }
              type="button"
              onClick={() => setIsNavModalClose(!isNavModalClose)}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={
                "collapse navbar-collapse justify-content-center " +
                (isNavModalClose ? "" : "show")
              }
            >
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <Link
                    className="nav-link "
                    smooth="easeInOutQuint"
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    spy
                    to="home"
                    offset={-71}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Home
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    smooth="easeInOutQuint"
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    spy
                    to="about"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    O mne
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    smooth="easeInOutQuint"
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    spy
                    to="services"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Služby
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    smooth="easeInOutQuint"
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    spy
                    to="resume"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    smooth="easeInOutQuint"
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    spy
                    to="portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Portfólio
                  </Link>
                </li> 
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    smooth="easeInOutQuint"
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                    spy
                    to="contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end ps-0">
            <ul className="social-icons">
              <li className="social-icons-facebook">
                <Tooltip text="Twitter" placement="bottom">
                  <a
                    href="https://www.facebook.com/patrik.elias.7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default StandardMenuHeader;
