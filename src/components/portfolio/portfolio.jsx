import React from "react";
import "./portfolio.css";

import proj1 from "../../assets/proj1.jpg";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/fizido.png";
import proj5 from "../../assets/proj5.png";
import proj6 from "../../assets/proj6.png";

const data = [
  {
    id: 1,
    img: proj6,
    title: "LIS-Pendens website.",
    github: "https://github.com/yusufAnka/lis-pendens",
    demo: "https://lis-pendens.vercel.app/",
  },
  {
    id: 2,
    img: proj3,
    title: "ARE Muajjal Supplies",
    github: "https://github.com/yusufAnka/aremuajjal",
    demo: "https://www.aremuajjal.com/",
  },
  {
    id: 3,
    img: proj4,
    title: "DANFATIMA Real Estate Limited",
    github: "https://github.com/yusufAnka/danfatima",
    demo: "https://danfatima.com/realestate",
  },
  {
    id: 4,
    img: proj1,
    title: "Accessified",
    github: "https://github.com/yusufAnka/Accessified",
    demo: "https://github.com/yusufAnka/Accessified",
  },
  {
    id: 5,
    img: proj2,
    title: "TMB Catalog",
    github: "https://github.com/yusufAnka/TMB-Frontend.git",
    demo: "https://tmb-frontend-two.vercel.app/",
  },
  {
    id: 6,
    img: proj5,
    title: "Device Intel",
    github:
      "https://github.com/yusufAnka/device-intel",
    demo: "https://device-intel-two.vercel.app/login",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, title, img, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>

            <h4>{title}</h4>

            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>

              <a
                href={demo}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
