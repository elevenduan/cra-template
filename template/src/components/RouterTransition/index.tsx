import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';

type DirectionType = 'backward' | 'forward' | 'refresh';
type ChildElement = React.ReactElement | null;
type effectType = 'parallax' | 'fade' | 'dive' | 'cover';
type StageType = 'enter' | 'entered' | 'exit' | 'exited';
type StatusType = 'active' | 'done';
type PropsType = {
  children?: ChildElement;
  timeout?: number; // ms
  effect?: effectType;
  pagesClassName?: string;
  pageClassName?: string;
  style?: React.CSSProperties & { '--rt-page-background-color'?: string };
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
    style,
    onActive,
    onDone
  } = props;
  const location = useLocation();
  const prevIdxRef = useRef<number>(window?.history?.state?.idx);
  const [direction, setDirection] = useState<DirectionType>('refresh');
  const [childs, setChilds] = useState<[ChildElement, ChildElement]>([null, null]);
  const enterRef = useRef<ChildElement & { className?: string }>(null);
  const exitRef = useRef<ChildElement & { className?: string }>(null);
  const [status, setStatus] = useState<StatusType>('done');

  function getPageClassNames(stage: StageType) {
    return `rt-page rt-page-${stage} ${pageClassName}`;
  }

  function cloneChild() {
    const enterChild = React.createElement(
      'div',
      { className: getPageClassNames('enter'), key: location.key, ref: enterRef },
      children
    );
    const exitChild = childs[0]
      ? React.cloneElement(childs[0], { ref: exitRef, className: getPageClassNames('exit') })
      : null;
    setChilds([enterChild, exitChild]);
    setStatus('active');
    onActive?.();
  }

  function setPageDirection() {
    const next = getIdx();
    const dir = getDirection(prevIdxRef.current, next);
    prevIdxRef.current = next;
    setDirection(dir);
  }

  useEffect(() => {
    // 页面方向
    setPageDirection();

    // 复制页面
    cloneChild();
  }, [location]);

  useEffect(() => {
    setTimeout(
      () => {
        if (enterRef.current) {
          enterRef.current.className = getPageClassNames('entered');
        }
        if (exitRef.current) {
          exitRef.current.className = getPageClassNames('exited');
        }
        setStatus('done');
        onDone?.();
      },
      childs[0] && childs[1] ? timeout : 0
    );
  }, [childs]);

  return (
    <div
      className={`rt-pages rt-pages-${direction} rt-pages-${effect} ${pagesClassName}`}
      style={Object.assign({ '--rt-page-transition-duration': `${timeout}ms` }, style)}
    >
      {status === 'done' ? childs[0] : childs}
    </div>
  );
}
