import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <div>
        <h1 className={styles.title}>Hi, I'm Nishant Kumar Jha</h1>
        <p className={styles.description}>
          I'm a Competitive programer as well as full-stack developer using React and
          NodeJS.
          <br></br> Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1F-6l2xXPSWEsUJ-ltOK7RX0wTQFgbvlp/view?usp=sharing" className={styles.ResumeBtn}>
          Download CV
        </a>
        </div>
        <div className={styles.contacts}>
        
          
          <a href="mailto:npkjha02@email.com">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        
          
          <a href="https://www.linkedin.com/in/nishant-kumar-jha-56a4a8231">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          </a>
        
         
          <a href="https://www.github.com/Nkj02">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        
      </div>
      </div>
      
      <img
        src= 'photo.jpg'
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
