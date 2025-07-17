import { ProjectsContainer } from './ProjectsContainer/ProjectsContainer';
import classes from './ProjectsOverview.module.css';

export const ProjectsOverview = () => {
  return (
    <section className={classes.projects}>
      <div className={classes.projectsContainer}>
        <ProjectsContainer />
      </div>
      <div className={classes.extraBorder}></div>
    </section>
  );
};
