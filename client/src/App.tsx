import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  console.log('App component rendered');
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
