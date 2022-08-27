import React from "react";
import Title from "../app/Components/Title/Title";
import styles from "../styles/Service.module.css";
import ServiceCard from '../app/Components/ServiceCard/ServiceCard'

const Service = () => {
  return (
    <>
      <section className={styles.service} id="service">
        <div className="container">
          <Title text="My Service" />
          <div className={styles.row}>
            <ServiceCard
              img="https://img.icons8.com/color-glass/2x/source-code.png"
              title="Web Development"
              desc="I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
              color="#6c6ce5"
            />
            <ServiceCard
              img="https://img.icons8.com/color/2x/my-orange.png"
              title="Mobile App Development"
              desc="I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
              color="#f9d74c"
            />
            <ServiceCard
              img="https://img.icons8.com/color-glass/2x/extensions-folder.png"
              title="Extension Development"
              desc="I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
              color="#f97b8b"
            />
            <ServiceCard
              img="https://img.icons8.com/color/12x/npm.png"
              title="Package Manger Development"
              desc="I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
              color="#ff4c60"
            />
            <ServiceCard
              img="https://img.icons8.com/color/344/wordpress.png"
              title="Wordpress Theme Customization"
              desc="I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
              color="#01579b"
            />
            <ServiceCard
              img="https://img.icons8.com/color/2x/windows8.png"
              title="Desktop App Development"
              desc="I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
              color="#01579b"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
