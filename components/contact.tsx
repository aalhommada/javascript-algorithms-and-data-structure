import styles from "./contact.module.css";
import { FaLinkedin, FaTwitter, FaGithub, FaMedium } from "react-icons/fa";

export function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contatHeader}>contact info</h2>
      <div className={styles.icons}>
        <a
          href="https://twitter.com/a_alhommada"
          rel="noreferrer"
          target="_blank"
          className="mr-6 text-md text-center text-white font-medLarg"
        >
          <FaTwitter />
        </a>

        <a
          href="https://linkedin.com/in/aalhommada"
          rel="noreferrer"
          target="_blank"
          className="mr-6 text-md text-center text-white font-medLarg"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aalhommada"
          rel="noreferrer"
          target="_blank"
          className="mr-6 text-md text-center text-white font-medLarg"
        >
          <FaGithub />
        </a>
        <a
          href="https://medium.com/@aalhommada"
          rel="noreferrer"
          target="_blank"
          className="text-md text-center text-white font-medLarg"
        >
          <FaMedium />
        </a>
      </div>
    </div>
  );
}
