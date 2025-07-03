import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './app/App.js';
import { StoreProvider } from './app/providers/StoreProvider.js';
import { ThemeProvider } from './app/providers/ThemeProvider.js';
createRoot(document.getElementById('root')).render(_jsx(StoreProvider, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }));
