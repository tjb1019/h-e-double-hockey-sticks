import { FC, useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={styles.root} onClick={() => setDarkMode((state) => !state)}>
      {darkMode ? 'Light Theme' : 'Dark Theme'}
    </div>
  );
};
