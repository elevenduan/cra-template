import React, { useEffect, useState, useRef, cloneElement } from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';

type ChildElement = React.ReactElement | null;
type DirectionType = 'backward' | 'forward' | 'refresh';
type effectType = 'parallax' | 'fade' | 'dive' | 'cover';
type StageType = 'enter' | 'enter-done' | 'exit' | 'exit-done';
type StatusType = 'active' | 'done';
type PropsType = {
  children: ChildElement;
  timeout?: number; // ms
  effect?: effectType;
  pagesClassName?: string;
  pageClassName?: string;
  onActive?: () => void;
  onDone?: () => void;
};

// 页面顺序
const getIdx = (): number => window?.history?.state?.idx;

// 页面方向
const getDirection = (prevIdx: number, nextIdx: number): DirectionType => {
  const diff = nextIdx - prevIdx;
  if (diff < 0) {
    return 'backward';
  }
  if (diff > 0) {
    return 'forward';
  }
  return 'refresh';
};

export default function RouterTransition(props: PropsType) {
  const {
    children,
    timeout = 500,
    effect = 'parallax',
    pagesClassName = '',
    pageClassName = '',
    onActive,
    onDone
  } = props;
  const location = useLocation();
  const prevIdxRef = useRef<number>(getIdx());
  const [direction, setDirection] = useState<DirectionType>('refresh');
  const [status, setStatus] = useState<StatusType>('done');
  const [enterClassName, setEnterClassName] = useState('');
  const [exitClassName, setExitClassName] = useState('');
  const [enterChild, setEnterChild] = useState<ChildElement>(null);
  const [exitChild, setExitChild] = useState<ChildElement>(null);

  // 页面类名
  function getPageClassName(stage: StageType) {
    return `rt-page rt-page-${stage} ${pageClassName}`;
  }

  // 页面方向
  function updateDirection() {
    const nextIdx = getIdx();
    setDirection(getDirection(prevIdxRef.current, nextIdx));
    prevIdxRef.current = nextIdx;
  }

  // 页面内容
  function updateChild() {
    setStatus(enterChild ? 'active' : 'done');
    setExitChild(enterChild ? cloneElement(enterChild) : null);
    setEnterChild(children ? cloneElement(children) : null);
    onActive?.();
  }

  useEffect(() => {
    // 页面方向
    updateDirection();
    // 更新页面
    updateChild();
  }, [location]);

  // 过渡状态
  useEffect(() => {
    if (status === 'active') {
      setEnterClassName(getPageClassName('enter'));
      setExitClassName(getPageClassName('exit'));
      setTimeout(() => {
        setStatus('done');
        onDone?.();
      }, timeout);
    } else {
      setEnterClassName(getPageClassName('enter-done'));
      setExitClassName(getPageClassName('exit-done'));
    }
  }, [status]);

  return (
    <div
      className={`rt-pages rt-pages-${direction} rt-pages-${effect} ${pagesClassName}`}
      // @ts-ignore
      style={{ '--rt-page-transition-duration': `${timeout}ms` }}
    >
      <div className={enterClassName}>{enterChild}</div>
      {status === 'active' ? <div className={exitClassName}>{exitChild}</div> : null}
    </div>
  );
}
