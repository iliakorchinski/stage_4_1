import { Project } from '../types/project';

export const fetchProjects = async (
  debouncedSearchTerm: string,
  setProjects: (value: React.SetStateAction<Project[]>) => void,
) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/projects${
        debouncedSearchTerm ? `?search=${debouncedSearchTerm}` : ''
      }`,
    );
    const data = await response.json();
    setProjects(data);
  } catch (err) {
    console.error(err);
    setProjects([]);
  }
};
