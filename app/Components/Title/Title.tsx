import React from "react";
import styles from './style.module.css'

interface IProps {
  text: string;
}

const Title: React.FC<IProps> = ({ text }) => {
  return (
    <>
      <h1 className={styles.section_title}>{text}</h1>
    </>
  );
};

export default Title;
