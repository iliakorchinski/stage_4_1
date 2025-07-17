import { Header } from './components/Header/Header';
import { ProjectsOverview } from './components/ProjectsOverview/ProjectsOverview';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ProjectsOverview />
      </main>
    </>
  );
};

export default App;
