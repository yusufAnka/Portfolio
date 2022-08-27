import Image from "next/image";
import React from "react";
import { ITestimonial } from "../../utils";
import styles from "./style.module.css";

interface IProps {
  testimonial: ITestimonial;
}

const TestimonialCard: React.FC<IProps> = ({ testimonial }) => {
  return (
    <>
      <div className={styles.card}>
        {/* User Information */}
        <div className={styles.information}>
          <Image src={testimonial.img} width={100} height={100} />
          <h1>{testimonial.name}</h1>
          <p>{testimonial.title}</p>
        </div>
        {/* Product Description */}
        <div className={styles.description}>
          <p>{testimonial.review}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
