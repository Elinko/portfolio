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
    vlastne: "Vlastné",
    react: "Next.js"
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "Terminio",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Multi-tenant SaaS na online rezervácie pre kadernícke a beauty salóny. Salón má vlastnú stránku a dashboard na termíny, služby a klientov. Súčasťou je schvaľovanie salónov, viackrokový booking, SMS OTP a ochrana proti spamu.",
        technologies:
          "React, TypeScript, Vite, Tailwind, shadcn/ui, Supabase, Postgres",
        url: {
          name: "www.terminio.sk",
          link: "https://www.terminio.sk/",
        },

        sliderImages: [
          "images/projects/terminio2.png",
          "images/projects/terminio3.png",
        ],
      },

      thumbImage: "images/projects/terminio1.png",
      categories: [filters.vlastne, filters.react],
    },
    {
      title: "Kariéra SSD",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Kariérna stránka Stredoslovenskej distribučnej. Voľné pozície sa filtrujú podľa lokality a odboru, súčasťou sú aj príbehy zamestnancov.",
        technologies: "HTML5, CSS3, PHP, Wordpress",
        url: {
          name: "www.karierassd.sk",
          link: "https://www.karierassd.sk/",
        },

        sliderImages: [
          "images/projects/ssd2.jpg",
          "images/projects/ssd3.jpg",
        ],
      },

      thumbImage: "images/projects/ssd1.jpg",
      categories: [filters.wp],
    },
    {
      title: "UNIQA GSC",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Kariérna stránka UNIQA Group Service Center. IT pozície sa filtrujú podľa miesta a dátumu, súčasťou sú príbehy kolegov a prehľad benefitov.",
        technologies: "HTML5, CSS3, PHP, Wordpress",
        url: {
          name: "napredujsnami.uniqa-gsc.sk",
          link: "https://napredujsnami.uniqa-gsc.sk/",
        },

        sliderImages: [
          "images/projects/uniqa2.jpg",
          "images/projects/uniqa3.jpg",
        ],
      },

      thumbImage: "images/projects/uniqa1.jpg",
      categories: [filters.wp],
    },
    // Ďalšie projekty pridávať až sem, UNIQA GSC ostáva tretia.
    {
      title: "Karpatská Trenčín",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Prezentácia prémiových bytov v Trenčíne. Cenník filtruje ponuku podľa budovy, podlažia a dispozície, detail bytu ukazuje pôdorys, výmery a cenu.",
        technologies: "HTML5, CSS3, PHP, Wordpress",
        url: {
          name: "karpatskatrencin.sk",
          link: "https://karpatskatrencin.sk/",
        },

        sliderImages: [
          "images/projects/karpatska2.jpg",
          "images/projects/karpatska3.jpg",
          "images/projects/karpatska4.jpg",
        ],
      },

      thumbImage: "images/projects/karpatska1.jpg",
      categories: [filters.wp],
    },
    {
      title: "Smartbar",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Kvízový automat na svadby, firemné eventy a detské párty. Hostia hádajú otázky a automat čapuje nápoj. Texty, otázky, nápoje aj rezervácie sú plne editovateľné.",
        technologies: "Next.js",
        url: {
          name: "smartbar.sk",
          link: "https://smartbar.sk/",
        },

        sliderImages: ["images/projects/smartbar2.jpg"],
      },

      thumbImage: "images/projects/smartbar1.jpg",
      categories: [filters.vlastne, filters.react],
    },
    {
      title: "TATRAROPES",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Prezentácia výrobcu syntetických lán. Produkty sa filtrujú podľa pevnosti a priemeru, detail ukazuje parametre a technický list.",
        technologies: "HTML5, CSS3, PHP, Wordpress",
        url: {
          name: "tatraropes.com",
          link: "https://tatraropes.com/",
        },

        sliderImages: [
          "images/projects/timm2.jpg",
          "images/projects/timm3.jpg",
        ],
      },

      thumbImage: "images/projects/timm.jpg",
      categories: [filters.wp],
    },
    {
      title: "Glasora",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Objednávkový portál výrobcu izolačných skiel. Obchodník alebo klient nakonfiguruje sklo do okna — skladbu, rámik, rozmery a úpravy — a sleduje stav objednávky.",
        technologies: "HTML5, CSS3, PHP, Wordpress",
        url: {
          name: "klientglasora.sk",
          link: "https://klientglasora.sk/",
        },

        sliderImages: [
          "images/projects/glasora2.jpg",
          "images/projects/glasora3.jpg",
          "images/projects/glasora4.jpg",
        ],
      },

      thumbImage: "images/projects/glasora1.jpg",
      categories: [filters.wp],
    },
    {
      title: "Sedin Apartments",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Prezentácia apartmánov a víl v golfovom rezorte pri jazere. Cenník filtruje ponuku podľa typu, výmery a dostupnosti, súčasťou je aj kalkulačka hypotéky.",
        technologies: "HTML5, CSS3, PHP, Wordpress",
        url: {
          name: "apartmanysedin.sk",
          link: "https://apartmanysedin.sk/",
        },

        sliderImages: [
          "images/projects/sedin2.jpg",
          "images/projects/sedin3.jpg",
        ],
      },

      thumbImage: "images/projects/sedin.jpg",
      categories: [filters.wp],
    },
    {
      title: "Byty Zicher",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Prezentácia skolaudovaných bytov v centre Martina. Cenník filtruje ponuku podľa dispozície a dostupnosti, detail bytu ukazuje pôdorys, výmery a vybavenie.",
        technologies: "HTML5, CSS3, PHP, Wordpress",
        url: {
          name: "www.bytyzicher.sk",
          link: "https://www.bytyzicher.sk/",
        },

        sliderImages: [
          "images/projects/zicher2.jpg",
          "images/projects/zicher3.jpg",
          "images/projects/zicher4.jpg",
        ],
      },

      thumbImage: "images/projects/zicher1.jpg",
      categories: [filters.wp],
    },
    {
      title: "Púpavy Hviezdoslav",
      type: types.DOCUMENT,
      document: {
        projectInfo: "Prezentácia developerského projektu bytov s dôrazom na animácie. Dostupné a predané byty sa spravujú v administrácii.",
        technologies: "HTML5, CSS3, Gulp, PHP, Laravel.",
        url: {
          name: "www.pupavyhviezdoslav.sk",
          link: "https://www.pupavyhviezdoslav.sk/",
        },

        sliderImages: [
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
        projectInfo: "Prezentácia skupiny: koncerty, história a účinkujúci. Termíny koncertov sa upravujú v administrácii.",
        technologies: "HTML5, CSS3, PHP, SQL, Wordpress.",
        url: {
          name: "spievankovo.sk",
          link: "https://spievankovo.sk/",
        },

        sliderImages: [
          "images/projects/spievankovo2.jpg",
          "images/projects/spievankovo3.jpg",  
        ],
      },

      thumbImage: "images/projects/spievankovo.jpg", 
      categories: [filters.wp],
    },
    {
      title: "Tvojeharmony", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Produktový web a blog s novinkami a praktickými radami k použitiu produktov Harmony.",
        technologies: "HTML5, CSS3, PHP, SQL, API, Brevo, Wordpress.",
        url: {
          name: "www.tvojeharmony.sk",
          link: "https://www.tvojeharmony.sk/",
        },

        sliderImages: [
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
        projectInfo: "Evidencia kurzov, firiem a účastníkov pre školiteľov. Systém ukazuje, kedy klientom končí platnosť školenia.",
        technologies: "HTML5, CSS3, PHP, MySQL, CodeIgniter",

        sliderImages: [
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
        projectInfo: "Katalóg cvičení pre zamestnancov na home office: body workout, jóga, pilates a strečing. Videá sa prehrávajú z YouTube, bez administrácie.",
        technologies: "HTML5, CSS3, PHP, Javascript, Youtube API.",
        url: {
          name: "zsefitmeet.sk",
          link: "https://zsefitmeet.sk/",
        },

        sliderImages: [
          "images/projects/fitmeet2.jpg",
          "images/projects/fitmeet3.jpg",  
        ],
      },

      thumbImage: "images/projects/fitmeet.jpg", 
      categories: [filters.bez],
    },
    {
      title: "Vtáčia pomoc", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Web na pomoc nájdeným a zraneným vtákom, cicavcom a plazom. V administrácii sa spravujú zvieratá a kvíz.",
        technologies: "HTML5, CSS3, PHP, jQuery, Wordpress.",
        url: {
          name: "vtaciapomoc.sk",
          link: "https://vtaciapomoc.sk/",
        },

        sliderImages: [
          "images/projects/vtaciapomoc2.jpg",
          "images/projects/vtaciapomoc3.jpg",  
        ],
      },

      thumbImage: "images/projects/vtaciapomoc.jpg", 
      categories: [filters.wp],
    },
        {
      title: "Nadácia Good Boy", 
      type: types.DOCUMENT,
      document: {
        projectInfo: "Cvičný projekt fiktívnej nadácie. Formuláre a stav aplikácie sú riešené cez Redux, web nie je v ostrej prevádzke.",
        technologies: "HTML5, CSS3, Javascript, REACT, REDUX",
        url: {
          name: "Nadácia Good boy",
          link: "https://www.elias.best/good-boy/",
        },

        sliderImages: [
          "images/projects/good-boy2.jpg",
          "images/projects/good-boy3.jpg",  
        ],
      },

      thumbImage: "images/projects/good-boy.jpg", 
      categories: [filters.react],
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
