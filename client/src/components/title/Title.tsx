import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import styles from './Title.module.css';

type TitleProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Title: FC<PropsWithChildren<TitleProps>> = ({ children, size = 'md' }) => {
  return <span className={clsx(styles.root, { [styles[size]]: size })}>{children}</span>;
};
