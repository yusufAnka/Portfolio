import React from "react";
import styles from "./style.module.css";

interface IProps {
  width: string;
  backgroundColor: string;
  text: string;
}

const ProgressBar: React.FC<IProps> = ({ width, backgroundColor, text }) => {
  return (
    <>
      <div className={styles.mainProgress}>
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%"
      }}>
      <p style={{
        color:backgroundColor
      }}>{text}</p>
      <span>{width}</span>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.skillsBar}
          style={{
            width,
            backgroundColor,
          }}
        />
      </div>
      </div>
    </>
  );
};

export default ProgressBar;
