import { ProjectItem } from './ProjectItem/ProjectItem';
import { projects } from '../../../data/projects';
import classes from './ProjectsItems.module.css';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { useDebounce } from '../../../hooks/useDebouce';

export const ProjectsItems = () => {
  const { searchTerm } = useContext(SearchContext);
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
