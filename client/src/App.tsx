import './App.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import styles from './App.module.css';
import { Nav } from './components/nav/Nav';

function AppCore() {
  return (
    <>
      <Nav />
      <main className={styles.appContent}>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppCore />
    </QueryClientProvider>
  );
}

export default App;
