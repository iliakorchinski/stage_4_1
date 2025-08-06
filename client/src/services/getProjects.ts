import { Project } from '../types/project';
import { secureFetch } from '../utils/secureFetch';
import { useNavigate } from 'react-router-dom';

export const fetchProjects = async (
  debouncedSearchTerm: string,
  setProjects: (value: React.SetStateAction<Project[]>) => void,
  navigate: ReturnType<typeof useNavigate>,
) => {
  try {
    const url = `/api/projects${debouncedSearchTerm ? `?search=${debouncedSearchTerm}` : ''}`;

    const response = await secureFetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      navigate,
    );

    const data = await response.json();
    setProjects(data);
  } catch (err) {
    console.error(err);
    setProjects([]);
  }
};
