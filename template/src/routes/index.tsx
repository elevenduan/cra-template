import React, { Suspense, useEffect } from 'react';
import RoutesObject from './RoutesObject';
import type { RouteObject } from 'react-router-dom';
// PageLoading
import PageLoading from '../components/PageLoading';

// Add Title
function WrapElement({ title, element }: { title?: string; element: React.ReactNode }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, []);
  return <Suspense fallback={<PageLoading />}>{element}</Suspense>;
}

function suspenseElement(routes: (RouteObject & { title?: string })[]): RouteObject[] {
  return routes.map(({ element, children, title, ...rest }) => ({
    element: element && <WrapElement element={element} title={title} />,
    children: children && children.length ? suspenseElement(children) : children,
    ...rest
  }));
}

export default suspenseElement(RoutesObject);
