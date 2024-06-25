import styles from "./ProjectsStyles.module.css";
import movieimage from "../../assets/movieimage.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={movieimage}
          link="https://github.com/palkrashish/movie-search"
          h3="Movie Search App"
          p="Movie details"
        />
      </div>
    </section>
  );
};

export default Projects;
