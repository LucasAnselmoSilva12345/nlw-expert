import { ThemeProvider } from './components/theme-provider';
import { RoutesApp } from './routes';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RoutesApp />
    </ThemeProvider>
  );
}
