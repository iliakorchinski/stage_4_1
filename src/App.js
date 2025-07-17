import { Header } from './components/Header/Header';
import { ProjectsOverview } from './components/ProjectsOverview/ProjectsOverview';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { SearchProvider } from './context/SearchContext';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ProjectsOverview />
        <SearchProvider>
          <ProjectsSection />
        </SearchProvider>
      </main>
    </>
  );
};

export default App;
