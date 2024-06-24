import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile img" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Ashish Kr Pal</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/palkrashish" target="_blank">
            <img src={twitterIcon} alt="Twitter_Icon" />
          </a>
          <a href="https://github.com/palkrashish" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/palkrashish" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <p className={styles.description}>
            With a passion for developing modern React web apps.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </span>
      </div>
    </section>
  );
};

export default Hero;
