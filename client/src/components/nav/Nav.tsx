import clsx from 'clsx';
import type { FC } from 'react';
import { NavLink } from 'react-router';
import { Group } from '../group/Group';
import styles from './Nav.module.css';
import { ThemeToggle } from './theme-toggle/ThemeToggle';

const NAV_ITEMS = ['teams'];

export const Nav: FC = () => {
  return (
    <nav className={styles.root}>
      <Group alignItems="center">
        <img className={styles.logo} src="/nhl-logo.png" alt="nav logo" />
        <h5>Hockey Manager</h5>
      </Group>
      <Group>
        {NAV_ITEMS.map((item) => {
          return (
            <NavLink
              key={item}
              className={({ isActive }) => clsx(styles.navItem, { [styles.isActive]: isActive })}
              to={`/${item}`}
            >
              {item}
            </NavLink>
          );
        })}
      </Group>
      <Group>
        <ThemeToggle />
      </Group>
    </nav>
  );
};
