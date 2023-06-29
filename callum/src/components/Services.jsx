import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Dizajn",
      desc: "Pripravím Vám priehladnú grafiku pre jednoduchšie ale aj zložitejšie až futuristické projekty, aj so špeciálnymi efektami.",
      icon: "fas fa-palette",
    },
    {
      name: "Frontend",
      desc: "Naprogramujem Vám Seo friendly, responzívny web s technológiami HTML5, CSS3, SCSS, JQUERY, JS, REACT, GULP.",
      icon: "fas fa-desktop",
    },
    {
      name: "Backend",
      desc: "V závislosti od projektu Vám pripravím bezpečnú, na mieru šitú administráciu v redakčnom systéme Wordpress, Laravel či CodeIgniter.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Analýza",
      desc: "Na Váš web nasadím analytiká, aby sme zistili, čo ľudia navštevujú a ktoré časti webu treba zlepšiť.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Marketing",
      desc: "Zriadim pre Váš web google reklamy, nastavím klúčové slová, nadpisy, lokáciu, aby bolo všetko zacielené pre Vašich zákazníkov.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Podpora",
      desc: "Naša spolupráca odovzdaním projektu nekončí, vždy ma môžete kontaktovať ak potrebujete s niečím pomôcť alebo sa poradiť.",
      icon: "fas fa-question",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Čo robím?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
        Ako Vám viem pomôcť s Vaším projektom?

        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
