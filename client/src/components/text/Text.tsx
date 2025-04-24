import clsx from 'clsx';
import { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './Text.module.css';

type TextProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontWeight?: CSSProperties['fontWeight'];
};

export const Text: FC<PropsWithChildren<TextProps>> = ({ children, size = 'md', fontWeight = 'normal' }) => {
  return (
    <span className={clsx(styles.root, size)} style={{ fontWeight }}>
      {children}
    </span>
  );
};
