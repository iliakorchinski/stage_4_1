import { Project } from '../types/project';
import { secureFetch } from '../utils/secureFetch';

export const fetchProjects = async (
  debouncedSearchTerm: string,
  setProjects: (value: React.SetStateAction<Project[]>) => void,
) => {
  try {
    const url = `/api/projects${debouncedSearchTerm ? `?search=${debouncedSearchTerm}` : ''}`;

    const response = await secureFetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 401) {
      window.location.href = '/login';
      return;
    }
    const data = await response.json();
    setProjects(data);
  } catch (err) {
    console.error(err);
    setProjects([]);
  }
};
