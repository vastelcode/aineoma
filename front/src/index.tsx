import { createRoot } from 'react-dom/client'
import App from './app/App.js';
import { StoreProvider } from './app/providers/StoreProvider.js';
import { ThemeProvider } from './app/providers/ThemeProvider.js';

createRoot(document.getElementById('root')!).render(
  <StoreProvider> 
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </StoreProvider>
)

