import { useState, useEffect } from 'react';
import { ProjectItem } from './ProjectItem/ProjectItem';
import classes from './ProjectsItems.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { useDebounce } from '../../../hooks/useDebouce';
import { Project } from '../../../types/project';

export const ProjectsItems = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/projects${
            debouncedSearchTerm ? `?search=${debouncedSearchTerm}` : ''
          }`
        );
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setProjects([]);
      }
    };

    fetchProjects();
  }, [debouncedSearchTerm]);
  return (
    <div className={classes.listContainer}>
      {projects.length > 0 ? (
        <ProjectItem projects={projects} />
      ) : (
        <p className={classes.resultsNotFound}>
          Oooops... No results found... Try again!
        </p>
      )}
    </div>
  );
};
