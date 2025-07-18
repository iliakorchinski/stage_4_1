import { ProjectsContainer } from './ProjectsContainer/ProjectsContainer';
import classes from './ProjectsOverview.module.css';

export const ProjectsOverview = () => {
  return (
    <section className={classes.projects}>
      <ProjectsContainer />
      <div className={classes.extraBorder}></div>
    </section>
  );
};
