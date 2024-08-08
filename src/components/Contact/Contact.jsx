import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        
        <p>Feel free to reach out!</p>
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
    <div clssName={styles.footer}>
    Copyright @2024 Nishant
    </div>
        
      
     
    </footer>
  );
};
