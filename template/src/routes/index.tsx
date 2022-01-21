import { Suspense, useEffect } from 'react';
import RoutesObject from './RoutesObject';
import type { RouteObject } from 'react-router-dom';
// PageLoading
import PageLoading from '../components/PageLoading';

// Add Title
function WrapElement(props: any) {
  const { title, element } = props;
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, []);
  return element;
}

function suspenseElement(routes: (RouteObject & { title?: string })[]): RouteObject[] {
  return routes.map(({ element, children, title, ...rest }) => ({
    element: element && (
      <Suspense fallback={<PageLoading />}>
        <WrapElement title={title} element={element} />
      </Suspense>
    ),
    children: children && children.length ? suspenseElement(children) : children,
    ...rest
  }));
}

export default suspenseElement(RoutesObject);
