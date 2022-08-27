import React from "react";
import Timeline from "../app/Components/TimeLine/Timeline";
import Title from "../app/Components/Title/Title";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <>
      <section className={styles.experience} id="experience">
        <div className="container">
          <Title text="Education & Experience" />
          {/* Wrapper */}
          <div className={styles.row}>
            {/* Education  */}
            <div className={styles.education}>
              <Timeline
                currentTime="2017 - 2019"
                companyName="SSC Degree"
                description="I have passed SSC from  computer information and technology department. My school name Pabna Technical School And College. I have continuing education in Computer Engineering and I have successfully completed professional development in Computer Engineering."
                timeImg="https://img.icons8.com/color/2x/student-female.png"
              />
              <Timeline
                currentTime="2019 - 2022"
                companyName="HSC Degree"
                description="I have passed HSC from  computer information and technology department. My school name Pabna Technical School And College. I have continuing education in Computer Engineering and I have successfully completed professional development in Computer Engineering."
                timeImg="https://img.icons8.com/color/2x/student-female.png"
              />
              <Timeline
                currentTime="2022 - Present"
                companyName="Bachelor of Science Degree"
                description="Varendra university, Rajshahi"
                timeImg="https://img.icons8.com/color/2x/student-female.png"
              />
              <span className={styles.line}></span>
            </div>
            {/* Job Experience */}
            <div className={styles.job_experience}>
              <Timeline
                currentTime="2022 - Present"
                companyName="Freelancer Web Developer At Fiverr.com"
                description="Planned website development, converting mockups into usable web presence with HTML, JavaScript, FETCH and JSON coding.
                Provided front-end website development using WordPress, Hubspot and other editing software.
                Provided security maintenance and patching on website interface to maintain viability after launch.
                Oversaw technical issues and troubleshooting requests to resolve user problems.
                Designed, implemented and monitored web pages, plugins and functionality for continuous improvement.
                Pulled from Node.js, MongoDB, JavaScript, Typescript and other back-end library knowledge to bolster programming resources.
                Built and styled new mobile-friendly websites, transitioning legacy presentations to simultaneous easy-to-use versions.
                Coded websites using HTML, CSS, JavaScript, React.js, Next.js, Vue.js, Nuxt.js With Typescript and jQuery languages.
                Validated third-party code to comply with internal standards and technical requirements.
                Adhered to SEO best practices while designing sites."
                timeImg="https://img.icons8.com/color/2x/new-job.png"
              />
              <Timeline
                currentTime="2022 - Present"
                companyName="Freelancer Web Developer At Freelancer.com"
                description="Planned website development, converting mockups into usable web presence with HTML, JavaScript, FETCH and JSON coding.
                Provided front-end website development using WordPress, Hubspot and other editing software.
                Provided security maintenance and patching on website interface to maintain viability after launch.
                Oversaw technical issues and troubleshooting requests to resolve user problems.
                Designed, implemented and monitored web pages, plugins and functionality for continuous improvement.
                Pulled from Node.js, MongoDB, JavaScript, Typescript and other back-end library knowledge to bolster programming resources.
                Built and styled new mobile-friendly websites, transitioning legacy presentations to simultaneous easy-to-use versions.
                Coded websites using HTML, CSS, JavaScript, React.js, Next.js, Vue.js, Nuxt.js With Typescript and jQuery languages.
                Validated third-party code to comply with internal standards and technical requirements.
                Adhered to SEO best practices while designing sites."
                timeImg="https://img.icons8.com/color/2x/new-job.png"
              />
              <Timeline
                currentTime="2022 - Present"
                companyName="Junior Front-End Developer At KS Devware"
                description="Developed and implemented performance improvement strategies and plans to promote continuous improvement.
                Worked flexible hours across night, weekend and holiday shifts.
                Participated in team-building activities to enhance working relationships.
                Used Microsoft Word and other software tools to create documents and other communications."
                timeImg="https://img.icons8.com/color/2x/new-job.png"
              />
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
