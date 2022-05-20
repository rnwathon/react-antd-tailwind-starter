import { lazy, Suspense } from 'react';
import { useTheme } from './use-theme.hook';

const DarkTheme = lazy(() => import('./DarkTheme'));
const LightTheme = lazy(() => import('./LightTheme'));

export const ThemeProvider = ({ children }) => {
  const [darkMode] = useTheme();

  return (
    <Suspense fallback={<span />}>
      {darkMode ? <DarkTheme>{children}</DarkTheme> : <LightTheme>{children}</LightTheme>}
    </Suspense>
  );
};
