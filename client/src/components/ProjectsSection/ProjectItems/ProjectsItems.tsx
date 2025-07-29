import { useState, useEffect } from 'react';
import { ProjectItem } from './ProjectItem/ProjectItem';
import classes from './ProjectsItems.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { useDebounce } from '../../../hooks/useDebouce';
import { Project } from '../../../types/project';
import { fetchProjects } from '../../../services/getProjects';

export const ProjectsItems = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects(debouncedSearchTerm, setProjects);
  }, [debouncedSearchTerm]);
  return (
    <div className={classes.listContainer}>
      {projects.length > 0 ? (
        <ProjectItem projects={projects} />
      ) : (
        <p className={classes.resultsNotFound}>Oooops... No results found... Try again!</p>
      )}
    </div>
  );
};
