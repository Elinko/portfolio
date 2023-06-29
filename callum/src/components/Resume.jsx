import React from "react";
import resumeFile from "../documents/zivotopis.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2014 – 2017",
      title: "Bakalárske štúdium",
      place: "FEI STU - Aplikovaná Informatika",
      desc: "Modelovanie a simulácia udalostných systémov. Slovenská Technická Univerzita v Bratislave (STU) – Fakulta Elektrotechniky a Informatiky.",
    },
    {
      yearRange: "2010 - 2014",
      title: "Gymnázium",
      place: "Gymnázium Janka Matúšku Galanta",
      desc: "Všeobecný prehľad a zároveň začiatok štúdia webových aplikácií cez kurzy a vytváranie prvých webstránok.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2017 - súčastnosť",
      title: "Developer",
      place: "Elite / Monday Lovers s.r.o. ",
      desc: "Z počiatku to bolo zalamovanie frontendu stránky z grafických podkladov (photoshop, figma, Adobe XD...), príprava namieru robených emailov. Postupne som sa stal vývojárom vo wordpresse a čo to naučil aj v Laraveli, Cake, CodeIgniteri.  ",
    },
    {
      yearRange: "2013 - 2017",
      title: "Little Junior",
      place: "Detská izba",
      desc: "Samo štúdium webstránok a veľké sny o vlastných eshopoch :D, vytváranie prvých zákaziek/webstránok pre známych a okolité firmy.",
    }
  ];

  const skills = [
    {
      name: "HTML/CSS/SCSS",
      percent: 90,
    },
    {
      name: "Wordpress",
      percent: 90
    },
    {
      name: "Bootstrap",
      percent: 80,
    },
    {
      name: "PHP",
      percent: 70
    },
    {
      name: "JavaScript/jQuery",
      percent: 70,
    },
    {
      name: "MySQL",
      percent: 50
    },
    {
      name: "React JS",
      percent: 25,
    }, 
    {
      name: "CodeIgniter",
      percent: 50,
    }, 
    {
      name: "Svojpomocna stavba domu pocas Covidu: murovanie, armovanie, malovanie, sadrokarton, obkladanie, kominar, vodar, elektrikar",
      percent: 80,
    }, 

 

  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Ako som sa sem dostal
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">Vzdelanie</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">Skúsenosti</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
