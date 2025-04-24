import { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './Group.module.css';

type GroupProps = {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  flexWrap?: CSSProperties['flexWrap'];
};

export const Group: FC<PropsWithChildren<GroupProps>> = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  gap = '1rem',
  flexWrap = 'nowrap',
}) => {
  return (
    <div
      className={styles.root}
      style={{
        justifyContent,
        alignItems,
        gap,
        flexWrap,
      }}
    >
      {children}
    </div>
  );
};
