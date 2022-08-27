import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";
import aboutImg from "../app/Asset/Razu.jpg";
import Title from "../app/Components/Title/Title";
import ProgressBar from "../app/Components/ProgressBar/ProgressBar";
import axios from "axios";
import { apiEndPoint } from "../app/utils";
import CountProject from "../app/Components/CountProjectNumber/CountProject";
import {
  AiOutlineCheckSquare,
  AiOutlineFire,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";
import SmLoader from "../app/Components/LoaderSm/SmallLoader";

export interface CounterProps {
  complete: string;
  project: string;
  satisfied: string;
  working: string;
}

const About = () => {
  const [data, setData] = useState<CounterProps[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${apiEndPoint}/projects`);
        setData(data?.project);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <section className={styles.about} id="about">
        <div className="container">
          <Title text="About Me" />
          <div className={styles.row}>
            {/* About Image */}
            <div className={styles.aboutImg}>
              <Image src={aboutImg} width={100} height={100} alt="Razu Islam" />
            </div>
            {/* About Info */}
            <div className={styles.aboutInfo}>
              <p>
                I'm a Experienced Full Stack Web developer with over 2 years of experience in software industry. Excellent reputation for resolving problems and improving customer satisfaction.  I'm a Full Stack Web developer to help you to build your personal website with seamless customization. I've worked on many complex data management project and I've been learning each day. 
I'm Highly proficient in both front-end and back-end frameworks along with relational / non-relational databases and well versed in API creation & integration.
I can work and manage from development to test to deployment & my another expertise is, I write very clean and readable code.
              </p>
              <a
                href="https://docdro.id/1ULofxH"
                target="_blank"
                className="app_btn second"
                type="button"
                rel="noreferrer"
                style={{
                  marginTop: "0.5em",
                  display: "inline-block",
                }}
              >
                Download Cv
              </a>
              {/* Skills */}
              <div className={styles.skills}>
                <ProgressBar
                  text="Javascript"
                  width="70%"
                  backgroundColor="#ffd15c"
                />
                <ProgressBar
                  text="Typescript"
                  width="70%"
                  backgroundColor="#3178c6"
                />
                <ProgressBar
                  text="React.js"
                  width="80%"
                  backgroundColor="#61dafb"
                />
                <ProgressBar
                  text="Next.js"
                  width="80%"
                  backgroundColor="#111"
                />
                <ProgressBar
                  text="Vue.js"
                  width="75%"
                  backgroundColor="#42d392 "
                />
                <ProgressBar
                  text="Nuxt.js"
                  width="75%"
                  backgroundColor="#00dc82"
                />
                <ProgressBar
                  text="Redux"
                  width="80%"
                  backgroundColor="#593d88"
                />
                <ProgressBar
                  text="Vuex"
                  width="75%"
                  backgroundColor="#7ec699"
                />
                <ProgressBar
                  text="Node.js"
                  width="50%"
                  backgroundColor="#65b849"
                />
                <ProgressBar
                  text="Express.js"
                  width="50%"
                  backgroundColor="#444"
                />
                <ProgressBar
                  text="MongoDB"
                  width="50%"
                  backgroundColor="#116149"
                />
                <ProgressBar
                  text="Firebase"
                  width="50%"
                  backgroundColor="#ffca2a"
                />
                <ProgressBar
                  text="React Native"
                  width="35%"
                  backgroundColor="#61dafb"
                />
                <ProgressBar
                  text="Github"
                  width="70%"
                  backgroundColor="#161b22"
                />
                <ProgressBar text="Git" width="70%" backgroundColor="#e84e31" />
                <ProgressBar
                  text="Html"
                  width="85%"
                  backgroundColor="#e96228"
                />
                <ProgressBar text="Css" width="85%" backgroundColor="#2862e9" />
                <ProgressBar
                  text="Scss"
                  width="85%"
                  backgroundColor="#cf649a"
                />
                <ProgressBar
                  text="Electron.js"
                  width="85%"
                  backgroundColor="#2b2e3a"
                />
                <ProgressBar
                  text="Wordpress TC"
                  width="85%"
                  backgroundColor="#0073aa"
                />
                <ProgressBar
                  text="Jquery"
                  width="70%"
                  backgroundColor="#1066a9"
                />
                <ProgressBar
                  text="Bootstrap"
                  width="80%"
                  backgroundColor="#7710f1"
                />
                <ProgressBar
                  text="Tailwind Css"
                  width="80%"
                  backgroundColor="#38bdf8"
                />
                <ProgressBar
                  text="WebRTC"
                  width="60%"
                  backgroundColor="#b90000"
                />
                <ProgressBar
                  text="Socket.io"
                  width="60%"
                  backgroundColor="#010101"
                />
                <ProgressBar
                  text="AWS"
                  width="60%"
                  backgroundColor="#ff9900"
                />
                <ProgressBar
                  text="Azure"
                  width="60%"
                  backgroundColor="#0085cf"
                />
                <ProgressBar
                  text="Microservice"
                  width="60%"
                  backgroundColor="#02c04f"
                />
                <ProgressBar
                  text="Docker"
                  width="60%"
                  backgroundColor="#2392e6"
                />
                <ProgressBar
                  text="Kubernetes"
                  width="60%"
                  backgroundColor="#3069de"
                />
                <ProgressBar
                  text="GraphQL"
                  width="70%"
                  backgroundColor="#de33a6"
                />
                <ProgressBar
                  text="Reset API"
                  width="70%"
                  backgroundColor="#de33a6"
                />
              </div>
            </div>
          </div>
          {/* Project STatus */}
          {loading ? (
            <SmLoader />
          ) : (
            <div className={styles.projectStatus}>
              {data && (
                <>
                  <CountProject
                    icon={<AiOutlineFire size={30} color="#dedeea" />}
                    title="Project"
                    number={Number(data[0]?.project)}
                  />
                  <CountProject
                    icon={<AiOutlineUsergroupAdd size={30} color="#dedeea" />}
                    title="Working"
                    number={Number(data[0]?.working)}
                  />
                  <CountProject
                    icon={<GiCoffeeCup size={30} color="#dedeea" />}
                    title="Satisfied"
                    number={Number(data[0]?.satisfied)}
                  />
                  <CountProject
                    icon={<AiOutlineCheckSquare size={30} color="#dedeea" />}
                    title="Complete"
                    number={Number(data[0]?.complete)}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
