import { useEffect } from 'react';
import { userLogin, userAccount } from 'services/user';
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
      <div>Home Home Home</div>
      <div>{loading ? 'loading...' : ''}</div>
    </div>
  );
}

export default Index;
