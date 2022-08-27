import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

interface IProps {
  currentTime: string;
  companyName: string;
  description: string;
  timeImg:string
}

const Timeline: React.FC<IProps> = ({
  currentTime,
  companyName,
  description,
  timeImg
}) => {
  return (
    <>
      <div className={styles.timeLine}>
        <div className={styles.timeLineImg}>
          <Image
            src={timeImg}
            width={30}
            height={30}
            alt="Razu Islam"
          />
        </div>
        <span className={styles.currentTime}>{currentTime}</span>
        <h3 className={styles.title}>{companyName}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};

export default Timeline;
