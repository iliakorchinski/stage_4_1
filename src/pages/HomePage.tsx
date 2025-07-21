import { ProjectsOverview } from '../components/ProjectsOverview/ProjectsOverview';
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection';
import { SearchProvider } from '../context/SearchContext';

export const HomePage = () => {
  return (
    <>
      <ProjectsOverview />
      <SearchProvider>
        <ProjectsSection />
      </SearchProvider>
    </>
  );
};
