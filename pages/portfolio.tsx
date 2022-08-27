import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../app/Components/Button/Button";
import SmLoader from "../app/Components/LoaderSm/SmallLoader";
import PortfolioCard from "../app/Components/PortfolioCard/PortfolioCard";
import Title from "../app/Components/Title/Title";
import { apiEndPoint, IPortfolio } from "../app/utils";
import styles from "../styles/Portfolio.module.css";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<IPortfolio[]>();
  const [loading, setLoading] = useState(false);
  const [loadedData, setLoadedData] = useState<IPortfolio[]>();
  const [portData, setPortData] = useState(portfolio);
  const [active, setActive] = useState("all");

  const allCategories = [
    "all",
    ...new Set(portfolio?.map((item) => item.category)),
  ];

  const filterItems = (category: string) => {
    if (category === "all") {
      setPortData(portfolio);
      setLoadedData(createPagination(portfolio));
      setActive("all");
      return;
    }
    const newItems = portfolio?.filter((item) => item?.category === category);
    if (!newItems) return;
    setActive(newItems[0].category);
    setPortData(newItems);
    setLoadedData(createPagination(newItems));
  };

  const createPagination = (items: any, limit = 6, offset = 0) => {
    let arr = [] as any;
    items?.forEach((item: any, index: any) => {
      if (index >= offset && index < offset + limit) {
        arr.push(item);
      }
    });
    return arr;
  };

  const loadMore = () => {
    if (!loadedData || !portData) return;
    if (loadedData?.length >= portData?.length) return;
    const newProducts = createPagination(portData, 6, loadedData?.length);
    setLoadedData([...loadedData, ...newProducts]);
  };

  useEffect(() => {
    const getPortfolio = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${apiEndPoint}/portfolios`);
        setPortfolio(data?.portfolio);
        setLoadedData(createPagination(data?.portfolio));
        setPortData(data?.portfolio);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getPortfolio();
  }, []);

  return (
    <>
      <section className={styles.portfolio} id="portfolio">
        <div className="container">
          <Title text="Recent Works/Portfolio" />
          {loading ? (
            <SmLoader />
          ) : (
            <>
              {/* Filter Button */}
              <div className={styles.portfolioFilter}>
                {allCategories &&
                  allCategories?.map((category, index) => (
                    <Button
                      onClick={() => filterItems(category)}
                      key={index}
                      className={
                        active === category
                          ? `${styles.active} ${styles.button}`
                          : styles.button
                      }
                    >
                      {category}
                    </Button>
                  ))}
              </div>

              <div className={styles.row}>
                {loadedData &&
                  loadedData?.map((portfolio) => (
                    <PortfolioCard key={portfolio._id} portfolio={portfolio} />
                  ))}
              </div>

              {/* Loader More Button */}
              {loadedData?.length != portData?.length && (
                <div
                  style={{
                    marginTop: "2em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={loadMore}
                    className="app_btn"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
