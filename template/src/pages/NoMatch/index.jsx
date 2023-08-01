import noMatch from './no-match.svg';
import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles.noMatch}>
      <img src={noMatch} alt="no-match" />
      <div className={styles.mainText}>没有找到你需要的东西</div>
      <div className={styles.subText}>找找其他的吧</div>
    </div>
  );
}
