import { useEffect, useState } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import routes from 'routes';
import './index.scss';

// 记载页面index
const getStateIdx = () => window?.history?.state?.idx;
let stateIdxPrev = getStateIdx();

function Index() {
  const location = useLocation();
  const [direction, setDirection] = useState('refresh');

  useEffect(() => {
    const stateIdxNext = getStateIdx();
    const stateIdxDiff = stateIdxNext - stateIdxPrev;
    const stateDirection = (() => {
      if (stateIdxDiff < 0) {
        return 'backward';
      }
      if (stateIdxDiff > 0) {
        return 'forward';
      }
      return 'refresh';
    })();
    setDirection(stateDirection);
    stateIdxPrev = stateIdxNext;
  }, [location.key]);

  return (
    <TransitionGroup className={`pages ${direction}`}>
      <CSSTransition key={location.key} classNames="slide" timeout={400}>
        {useRoutes(routes, location)}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Index;
