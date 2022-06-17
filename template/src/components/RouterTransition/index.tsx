import React, { useEffect, useState } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import type { RouteObject } from 'react-router-dom';
import './index.scss';

// 记载页面index
const getStateIdx = () => window?.history?.state?.idx;
let stateIdxPrev = getStateIdx();

function Index({
  routes,
  timeout = 600,
  effect = 'slide',
  style
}: {
  routes: RouteObject[];
  timeout?: number; // milliseconds
  effect?: 'slide';
  style?: React.CSSProperties & { '--page-background-color'?: string };
}) {
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
    <TransitionGroup
      className={`pages-${direction}`}
      style={Object.assign({ '--page-animation-duration': `${timeout}ms` }, style)}
    >
      <CSSTransition key={location.key} classNames={`page-${effect}`} timeout={timeout}>
        {useRoutes(routes, location)}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Index;
