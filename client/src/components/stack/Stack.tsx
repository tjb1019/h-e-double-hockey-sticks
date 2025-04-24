import clsx from 'clsx';
import { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './Stack.module.css';

type StackProps = {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
};

export const Stack: FC<PropsWithChildren<StackProps>> = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  gap = '1rem',
}) => {
  return (
    <div
      className={clsx(styles.root, gap)}
      style={{
        justifyContent,
        alignItems,
        gap,
      }}
    >
      {children}
    </div>
  );
};
