import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import styles from "./style.module.css";

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const navItem = [
    {
      id: 1,
      text: "Home",
      url: "/",
      className: router.asPath == "/" ? "nav_links active" : "nav_links",
    },
    {
      id: 2,
      text: "About",
      url: "#about",
      className: router.asPath == "/#about" ? "nav_links active" : "nav_links",
    },
    {
      id: 3,
      text: "Services",
      url: "#service",
      className:
        router.asPath == "/#service" ? "nav_links active" : "nav_links",
    },
    {
      id: 7,
      text: "Experience",
      url: "#experience",
      className:
        router.asPath == "/#experience" ? "nav_links active" : "nav_links",
    },
    {
      id: 4,
      text: "Portfolio",
      url: "#portfolio",
      className:
        router.asPath == "/#portfolio" ? "nav_links active" : "nav_links",
    },
    {
      id: 5,
      text: "Blogs",
      url: "#blogs",
      className: router.pathname == "/blogs" ? "nav_links active" : "nav_links",
    },
    {
      id: 6,
      text: "Contact",
      url: "#contact",
      className:
        router.pathname == "/#contact" ? "nav_links active" : "nav_links",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.navbar}>
            {/* Logo */}
            <Link href="/">
              <h2 className={styles.logo}>Razu I.</h2>
            </Link>
            {/* Navbar */}
            <div className={styles.navItem}>
              <ul
                className={
                  show
                    ? `${styles.itemBar} ${styles.active}`
                    : `${styles.itemBar}`
                }
              >
                {navItem.map(({ text, url, className, id }) => (
                  <li key={id}>
                    <Link href={url}>
                      <a className={className}>{text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              {show ? (
                <AiOutlineClose
                  color="#fff"
                  size={30}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <FaBars color="#fff" size={30} onClick={() => setShow(!show)} />
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
