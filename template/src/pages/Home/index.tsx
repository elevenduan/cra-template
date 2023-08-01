import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userLogin, userAccount } from 'services/api';
import { useRequest } from 'ahooks';

function Index() {
  const { runAsync, loading } = useRequest(userAccount, { manual: true });

  useEffect(() => {
    userLogin({ id: 24, name: 'coco' }).then((res) => {
      console.log(res);
    });
    runAsync({ id: 24 }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <div>
        <div>Home Home Home</div>
        <div>
          <Link to="/">To Home</Link>
        </div>
        <div>
          <Link to="/login">To Login</Link>
        </div>
        <div>
          <Link to="/about">To About</Link>
        </div>
        <div>
          <Link to="/nomatch">To No Match</Link>
        </div>
      </div>
      <div>{loading ? 'loading...' : ''}</div>
    </div>
  );
}

export default Index;
