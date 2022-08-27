import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { IPortfolio } from "../../utils";
import styles from "./style.module.css";

interface IProps {
  portfolio: IPortfolio;
}

const PortfolioCard: React.FC<IProps> = ({ portfolio }) => {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/portfolioDetails/${portfolio._id}`)}
    >
      <Image src={portfolio.img} alt="Razu Islam" width={350} height={200} />
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <h5>{portfolio.category}</h5>
          <h2>{portfolio.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
