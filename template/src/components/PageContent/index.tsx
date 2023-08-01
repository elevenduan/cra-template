import { HTMLAttributes, ReactNode } from 'react';
import styles from './index.module.scss';

type PropsType = {
  loading?: boolean;
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Index(props: PropsType) {
  const { loading, children, className = '', ...rest } = props;
  // 使用项目引入的组件库中的loading
  return (
    <div className={`${styles['content']} ${className}`} {...rest}>
      {children}
    </div>
  );
}
