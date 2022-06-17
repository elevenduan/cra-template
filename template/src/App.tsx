import RouterTransition from 'components/RouterTransition';
import routes from 'routes';
import './App.scss';

function App() {
  return (
    <div className="app">
      <RouterTransition routes={routes} />
    </div>
  );
}

export default App;
