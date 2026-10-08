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
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-600 mb-3">Kontakt</h2>
            <p className="mb-4">
              Kontaktujte ma, ak máte záujem prediskutovať Váš projekt. Rád Vám pomôžem s Vaším novým alebo aj s existujúcim projektom.
            </p>
            <div className="d-sm-flex justify-content-center justify-content-lg-start gap-sm-5">
              <div className="mb-3 mb-sm-0">
                <h3 className="text-4 fw-600 mb-1">Mobil:</h3>
                <p className="mb-0"><a href="tel:0911729581" className="footer-link">0911729581</a></p>
              </div>
              <div>
                <h3 className="text-4 fw-600 mb-1">Email:</h3>
                <p className="mb-0"><a href="mailto:patrik@elias.best" className="footer-link">patrik@elias.best</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-center mt-4 mt-lg-0 wow fadeInUp" data-wow-delay="0.3s">
            <img className="img-fluid rounded-pill d-block mx-auto" src="images/web-developer.jpg" title="Patrik" alt="Patrik"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
