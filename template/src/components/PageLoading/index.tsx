import { Loading } from 'antd-mobile';
import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles['pageloading']}>
      <Loading />
      <span>Loading</span>
    </div>
  );
}
