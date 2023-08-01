import { Outlet } from 'react-router-dom';

function Index() {
  return (
    <div className="page-content">
      {/* layout */}
      {/* page */}
      <Outlet />
    </div>
  );
}

export default Index;
