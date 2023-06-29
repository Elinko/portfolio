import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    wp: "Wordpress",
    laravel: "Laravel",
    ci: "CodeIgniter",
    bez: "Bez CMS",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "Morocco dream tour", 
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Informačný portál pre cestovnú kanceláriu, kde sa môžu zákazníci informovať o rôznych turistických výletoch do Maroka. Súčasťou je redakčných systém, blog, registrácie na zájazdy.",
        technologies: "HTML5, CSS3, Gulp, PHP, Wordpress, MySQL",
        url: {
          name: "www.moroccodreamtour.com",
          link: "https://moroccodreamtour.com/",
        },

        sliderImages: [
          "images/projects/morocco.jpg",
          "images/projects/morocco2.jpg",
          "images/projects/morocco3.jpg", 
          "images/projects/morocco4.jpg", 
        ],
      },

      thumbImage: "images/projects/morocco.jpg", 
      categories: [filters.wp],
    },
    {
      title: "Púpavy Hviezdoslav      ", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Spolupráca na prezentácii developérskej výstavby bytov. Kladený dôraz na animácie a kreativitu. Webstránka s redakčným systémom na administráciu dostupných a predaných bytov.        ",
        technologies: "HTML5, CSS3, Gulp, PHP, Laravel.",
        url: {
          name: "www.pupavyhviezdoslav.sk",
          link: "https://www.pupavyhviezdoslav.sk/",
        },

        sliderImages: [
          "images/projects/pupavy.jpg",
          "images/projects/pupavy2.jpg",
          "images/projects/pupavy3.jpg", 
          "images/projects/pupavy4.jpg", 
        ],
      },

      thumbImage: "images/projects/pupavy.jpg", 
      categories: [filters.laravel],
    },
    {
      title: "Spievankovo", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Webstránka spievankovo je prezentácia skupiny s informáciami o ich koncertoch, histórii a hercoch s redakčným systémom pred editáciu koncertov.        ",
        technologies: "HTML5, CSS3, PHP, SQL, Wordpress.",
        url: {
          name: "spievankovo.sk",
          link: "https://spievankovo.sk/",
        },

        sliderImages: [
          "images/projects/spievankovo.jpg",
          "images/projects/spievankovo2.jpg",
          "images/projects/spievankovo3.jpg",  
        ],
      },

      thumbImage: "images/projects/spievankovo.jpg", 
      categories: [filters.wp],
    },
    {
      title: "Lovecolors", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Webová prezentácia značky Lovecolors, ručne vyrábaných detských doplnkov a šiat pre dospelých. Súčasťou je administrácia a blog, neskôr bol web obohatený o eshop.        ",
        technologies: "HTML5, CSS3, PHP, Wordpress, E-shop.",

        sliderImages: [
          "images/projects/lovecolors.jpg",
          "images/projects/lovecolors2.jpg",
          "images/projects/lovecolors3.jpg",  
        ],
      },

      thumbImage: "images/projects/lovecolors.jpg", 
      categories: [filters.wp],
    },
    {
      title: "Tvojeharmony", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Tvojeharmony je webová prezentácia produktov a zároveň aj blog s novinkami, radami a zaujímavosťami z domácností, predovšetkým pre využitie produktov Harmony priamo v praxi.        ",
        technologies: "HTML5, CSS3, PHP, SQL, API, Brevo, Wordpress.",
        url: {
          name: "www.tvojeharmony.sk",
          link: "https://www.tvojeharmony.sk/",
        },

        sliderImages: [
          "images/projects/tvojeharmony.jpg",
          "images/projects/tvojeharmony2.jpg",
          "images/projects/tvojeharmony3.jpg",  
        ],
      },

      thumbImage: "images/projects/tvojeharmony.jpg", 
      categories: [filters.wp],
    },
    {
      title: "Evidencia školení", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Webová aplikácia školenia slúži pre školiteľov rôznych kurzov a licencií, aby si mohli viesť evidenciu svojich zákazníkov. Aplikácia dokáže vytvárať a editovať kurzy, pridávať nové firmy a nových zákazníkov. <br/> Slúži umožňuje školiteľom zapisovať dátumy, kedy končia ľuďom dané kurzy, aby nikomu neprepadlo školenie.",
        technologies: "HTML5, CSS3, PHP, MySQL, CodeIgniter",

        sliderImages: [
          "images/projects/skolenia.jpg",
          "images/projects/skolenia2.jpg",
          "images/projects/skolenia3.jpg",  
        ],
      },

      thumbImage: "images/projects/skolenia.jpg", 
      categories: [filters.ci],
    },
    {
      title: "ZSE FitMeet", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "ZSE FitMeet vznikol na podnet pribúdajúceho HomeOffice. FitMeet prináša pohybové videá s tematikou Body workout, Jóga, Pilates, Strečing... Webstránka je bez administrácie, pracuje čisto len s Javascriptom, kde sú uložené linky na videá z youtube a texty.        ",
        technologies: "HTML5, CSS3, PHP, Javascript, Youtube API.",
        url: {
          name: "zsefitmeet.sk",
          link: "https://zsefitmeet.sk/",
        },

        sliderImages: [
          "images/projects/fitmeet.jpg",
          "images/projects/fitmeet2.jpg",
          "images/projects/fitmeet3.jpg",  
        ],
      },

      thumbImage: "images/projects/fitmeet.jpg", 
      categories: [filters.bez],
    },
    {
      title: "Plzeňka", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Webstránka slúži na vyhladávanie reštaurácií alebo hospod so značkou plzeňka. K dispozícii je administrácia na vytváranie nových reštaurácií, umiestneni na mape, editácia obsahu jednodlivých reštaurácií a hospod.",
        technologies: "HTML5, CSS3, PHP, Laravel, SQL.",
        url: {
          name: "plzenka.pilsner-urquell.cz",
          link: "https://plzenka.pilsner-urquell.cz/",
        },

        sliderImages: [
          "images/projects/plzenka.png",
          "images/projects/plzenka2.png",
          "images/projects/plzenka3.png",  
        ],
      },

      thumbImage: "images/projects/plzenka.png", 
      categories: [filters.laravel],
    },
    {
      title: "Vtáčia pomoc", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Vtáčia pomoc je webstránka pre pomoc nájdených a zranenách vtákov, cicavcov, či plazov. Web je založený na wordpresse. Umožňuje administráciu zvierat a kvízových odpovedí na otázky o zvieratách.",
        technologies: "HTML5, CSS3, PHP, jQuery, Wordpress.",
        url: {
          name: "vtaciapomoc.sk",
          link: "https://vtaciapomoc.sk/",
        },

        sliderImages: [
          "images/projects/vtaciapomoc.jpg",
          "images/projects/vtaciapomoc2.jpg",
          "images/projects/vtaciapomoc3.jpg",  
        ],
      },

      thumbImage: "images/projects/vtaciapomoc.jpg", 
      categories: [filters.DETAILED],
    },
    // {
    //   title: "Mockups Design 1",
    //   type: types.IMAGE,

    //   thumbImage: "images/projects/project-2.jpg",

    //   categories: [filters.MOCKUPS],
    // },
    // {
    //   title: "YouTube Video",
    //   type: types.VIDEO,
    //   video: {
    //     vimeo: false,
    //     id: "PMNnEEEacCg",
    //   },
    //   thumbImage: "images/projects/project-3.jpg",

    //   categories: [filters.YOUTUBE],
    // },
   
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfólio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Niektoré z mojich projektov
          </h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                            </p>
                            <h5 className="text-white text-5">
                              {project?.title}
                            </h5>
                            <span className="text-light">{project.categories}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
