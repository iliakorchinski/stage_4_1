import { ProjectItem } from './ProjectItem/ProjectItem';
import { projects } from '../../../data/projects';
import classes from './ProjectsItems.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { useDebounce } from '../../../hooks/useDebouce';

export const ProjectsItems = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const filteredProjects = debouncedSearchTerm
    ? projects.filter(
        (item) =>
          item.description
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : [];
  return (
    <div className={classes.listContainer}>
      {!debouncedSearchTerm && <ProjectItem projects={projects} />}
      {debouncedSearchTerm && filteredProjects.length > 0 && (
        <ProjectItem projects={filteredProjects} />
      )}
      {debouncedSearchTerm && filteredProjects.length === 0 && (
        <p className={classes.resultsNotFound}>
          Oooops... No results found... Try again!
        </p>
      )}
    </div>
  );
};
