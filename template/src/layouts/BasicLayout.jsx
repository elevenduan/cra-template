import { Outlet, Link } from 'react-router-dom';

function Index() {
  return (
    <div className="page-content">
      {/* layout */}
      <div>
        <div>BasicLayout</div>
        <div>
          <Link to="/login">To Login</Link>
        </div>
        <div>
          <Link to="/">To Home</Link>
        </div>
        <div>
          <Link to="/about">To About</Link>
        </div>
        <div>
          <Link to="/nomatch">To No Match</Link>
        </div>
      </div>
      {/* page */}
      <Outlet />
    </div>
  );
}

export default Index;
