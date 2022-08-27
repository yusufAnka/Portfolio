import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Title from "../Title/Title";
import styles from "./style.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const testimonialData = [
  {
    id: 1,
    name: "Ryan Alex",
    title: "Full Stack Developer at freelancer.com",
    img: "https://bolby-react.vercel.app/images/avatar-1.svg",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    name: "Ricky Alex",
    title: "Full Stack Developer at fiverr.com",
    img: "https://bolby-react.vercel.app/images/avatar-3.svg",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,
    name: "Sanju Samual",
    title: "Full Stack Developer at upwork.com",
    img: "https://bolby-react.vercel.app/images/avatar-2.svg",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonial = () => {
  return (
    <>
      <section className={styles.testimonial} id="testimonial">
        <div className="container">
          <Title text="Clients & Review" />
          <div className={styles.row}>
            <Carousel
              showStatus={false}
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
            >
              {testimonialData &&
                testimonialData.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
