import React from "react"
// import styles  from "../styles/Home.module.css;
import Image from "next/image";
// import aboutImg from "../app/Asset/yusuf.jpeg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import SocialMedia from "../app/Components/SocialMediaIcon/SocialMedia";
import Button from "../app/Components/Button/Button";
import { useRouter } from 'next/router'

const Home = () => {
  const textRef = useRef() as React.MutableRefObject<HTMLSpanElement>;
  const router = useRouter();

  useEffect(() => {
    const options = {
      stringsElement: "#typed-string",
      typeSpeed: 50,
      showCursor: true,
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    };

    const typed = new Typed(textRef?.current && textRef?.current, options);

    return () => {
      typed.destroy();
    };
  }, [textRef]);

  return (
    <>
      <section className={styles.home}>
        <div className={`container ${styles.container}`}>
          <Image
            src={aboutImg}
            width={100}
            height={100}
            className={styles.img}
          />
          <div className={styles.wrapper}>
            <h1>Razu Islam</h1>
            <div id="typed-string">
              <h1 className="p1">Web Developer</h1>
              <p className="p2">Junior Front-End Developer</p>
              <p className="p2">Junior Mern Stack Developer</p>
              <p className="p3">Mobile App Developer</p>
              <p className="p4">Desktop App Developer</p>
              <p className="p5">Extension App Developer</p>
              <p className="p6">Package Manger Developer</p>
            </div>
            <h3
              style={{
                fontSize: "1.3em",
                marginTop: "0.5em",
                color: "#fff",
              }}
            >
              I'm
              <span
                ref={textRef}
                style={{
                  color: "hotpink",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              ></span>
            </h3>
          </div>
          <div className={styles.social}>
              <SocialMedia
                icon={<FaInstagram size={20} />}
                link="https://www.instagram.com/jsdevrazu"
              />
              <SocialMedia
                icon={<FaYoutube size={20} />}
                link="https://www.youtube.com/channel/UCv54fMK_UR7SJX70W02usaA/videos"
              />
              <SocialMedia
                icon={<FaLinkedinIn size={20} />}
                link="https://www.linkedin.com/in/md-razu-islam"
              />
              <SocialMedia
                icon={<FaGithub size={20} />}
                link="https://github.com/jsdevraju"
              />
              <SocialMedia
                icon={<FaFacebookF size={20} />}
                link="https://www.instagram.com/jsdevrazu"
              />
            </div>
            <Button onClick={() => router.push("/contact")} className="app_btn second" type="button" style={{
              marginTop:"1em"
            }}>
              Hire Me
            </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
