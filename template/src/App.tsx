import { useRoutes } from 'react-router-dom';
import RouterTransition from 'components/RouterTransition';
import routes from 'routes';
import './App.scss';

function App() {
  return (
    <div className="app">
      <RouterTransition>{useRoutes(routes)}</RouterTransition>
    </div>
  );
}

export default App;
