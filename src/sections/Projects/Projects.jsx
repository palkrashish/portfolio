import styles from "./ProjectsStyles.module.css";
import movieimage from "../../assets/movieimage.png";
import seomaster from "../../assets/seomaster.png";
import bccolorChange from "../..//assets/bgcolorchanger.png"
import emoji from "../../assets/emoji.jpg"
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={movieimage}
          link="https://ashish-movie-search.netlify.app/"
          h3="Movie Search App"
          p="Movie details"
        />
        <ProjectCard
          src={bccolorChange}
          link="https://ashish-bgc-changer.netlify.app/"
          h3="Background Color Changer"
          p="bg App"
        />
        <ProjectCard
          src={seomaster}
          link="https://ashish-project1-seomaster.netlify.app/"
          h3="seo master"
          p="seo page"
        />
        <ProjectCard
        src={emoji}
        link="https://stsq43.csb.app/"
        h3="Emoji"
        p="emoji App"
      />
      </div>
    </section>
  );
};

export default Projects;
