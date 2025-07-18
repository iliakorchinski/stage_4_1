import classes from './ProjectItem.module.css';

export const ProjectItem = ({ projects }) => {
  return (
    <div className={classes.listContainer}>
      {projects.map((project) => {
        return (
          <article key={project.title} className={classes.listItem}>
            <a href="/">
              <div className={classes.listItemHeader}>
                <div className={classes.image}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div>
                  <h1 className={classes.listItemTitle}>{project.title}</h1>
                </div>
              </div>

              <div>
                <p className={classes.listItemDescription}>
                  {project.description}
                </p>
                <div>
                  <span className={classes.listItemVersion}>
                    {project.version}
                  </span>
                  <span className={classes.additionalVersions}>
                    {project.otherVersions}
                  </span>
                </div>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
};
