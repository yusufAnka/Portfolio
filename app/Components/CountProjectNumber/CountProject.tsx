import React from "react";
import CountUp from "react-countup";
import styles from './style.module.css'

interface IProps {
  title: string;
  number: number;
  icon: JSX.Element;
}

const CountProject: React.FC<IProps> = ({ title, number, icon }) => {
  return (
    <div className={styles.projectCount}>
      <div>{icon}</div>
      <div>
        <h1>
          <CountUp start={0} end={number} />
        </h1>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CountProject;
