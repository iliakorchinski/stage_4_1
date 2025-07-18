import { ProjectsItems } from './ProjectItems/ProjectsItems';
import classes from './ProjectsSection.module.css';
import { Search } from './Search/Search';

export const ProjectsSection = () => {
  return (
    <div>
      <Search />
      <div className={classes.itemsContainer}>
        <ProjectsItems />
      </div>
    </div>
  );
};
