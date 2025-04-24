import { FC } from 'react';
import { useMatches } from 'react-router';
import styles from './PageTitle.module.css';

export const PageTitle: FC = () => {
  const [activeRoute] = useMatches();
  const pageTitle = activeRoute.handle as string;

  return <h1 className={styles.root}>{pageTitle}</h1>;
};
