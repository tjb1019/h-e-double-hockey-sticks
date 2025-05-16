import clsx from 'clsx';
import type { FC } from 'react';
import { NavLink } from 'react-router';
import { Group } from '../group/Group';
import styles from './Nav.module.css';
import { ThemeToggle } from './theme-toggle/ThemeToggle';

type NavItem = {
  label: string;
  path: string;
};
const NAV_ITEMS: NavItem[] = [
  { label: 'Standings', path: 'standings' },
  { label: 'Teams', path: 'teams' },
  { label: 'Prospects', path: 'prospects' },
  { label: 'Lineup Builder', path: 'lineup-builder' },
];

export const Nav: FC = () => {
  return (
    <nav className={styles.root}>
      <Group alignItems="center">
        <NavLink className={styles.logo} to={'/'}>
          <img src="/logo.png" alt="hockey manager logo" />
        </NavLink>
      </Group>
      <Group>
        {NAV_ITEMS.map((item) => {
          return (
            <NavLink
              key={item.path}
              className={({ isActive }) => clsx(styles.navItem, { [styles.isActive]: isActive })}
              to={`/${item.path}`}
            >
              {item.label}
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
