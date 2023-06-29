import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "service_i8Fk3ms",
        "template_siFcin9",
        form.current,
        "c9HsFgGF0tFWyVnAL"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-center text-lg-start wow fadeInUp">
            <h2 className="text-10 fw-600 mb-5">Kontakt</h2>
            <p className="text-5 mb-5">
              Kontaktujte ma, ak máte záujem prediskutovať Váš projekt. Rád Vám pomôžem s Vaším novým alebo aj s existujúcim projektom.
            </p>
            {/* <h3 className="text-5 fw-600">Pochádzam z:</h3>
            <address className="text-4">
              Veľkej Mače 
            </address> */}
            <h3 className="text-5 fw-600">Mobil:</h3>
            <p className="text-4"><a href="tel:0911729581" className="footer-link">0911729581</a></p>
            <h3 className="text-5 fw-600">Email:</h3>
            <p className="text-4"><a href="mailto:patrik@elias.best" className="footer-link">patrik@elias.best</a></p>
            <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
           
              {/* <li className="social-icons-facebook">
                <Tooltip text="Facebook" placement="top">
                  <a
                    href="https://www.facebook.com/patrik.elias.7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </Tooltip>
              </li>  */}
              {/* <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="http://www.github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </Tooltip>
              </li> */}
              {/* <li className="social-icons-dribbble">
                <Tooltip text="Dribbble" placement="top">
                  <a
                    href="http://www.dribbble.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                </Tooltip>
              </li> */}
            </ul>
          </div>
          <div
            className="col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="row g-4">
                <div className="col-md-8 offset-md-2 text-center">
                    <img className="img-fluid rounded-pill d-block" src="images/web-developer.jpg" title="Patrik" alt="Patrik"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
