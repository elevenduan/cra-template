import { useRoutes } from 'react-router-dom';
import RouterTransition from 'components/RouterTransition';
import routes from 'routes';
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* some layout */}

      {/* view */}
      <div className="view">
        <RouterTransition>{useRoutes(routes)}</RouterTransition>
      </div>
    </div>
  );
}

export default App;
